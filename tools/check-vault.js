// Integrity check for the DIVIRUSH vault. No dependencies.
//
// Usage (from the vault root):
//   node tools/check-vault.js            check the whole vault
//   node tools/check-vault.js --staged   also block staged edits to Final/ (used by the pre-commit hook)
//
// Set ALLOW_FINAL_EDIT=1 to commit a new final version supplied by the researcher.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['.git', '.obsidian', '.trash', 'node_modules', 'tools', '.githooks']);
const SKIP_FILES = new Set(['CLAUDE.md']); // imports AGENTS.md; has no frontmatter by design
const STATUSES = new Set(['final', 'unrevised', 'revised', 'reference', 'draft', 'open', 'settled', 'verified', 'unverified']);
const TYPED_DIRS = ['Decisions', 'Design', 'Sources'];

const errors = [];
const warnings = [];
const err = (file, problem, fix) => errors.push(`ERROR ${file}: ${problem}. Fix: ${fix}`);
const warn = (file, problem, fix) => warnings.push(`WARN  ${file}: ${problem}. Fix: ${fix}`);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(path.join(dir, e.name), out); }
    else out.push(path.join(dir, e.name));
  }
  return out;
}

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^["']|["']$/g, '').trim();
  }
  return fm;
}

const files = walk(ROOT);
const rel = (f) => path.relative(ROOT, f).split(path.sep).join('/');
const notes = files.filter((f) => f.endsWith('.md') && !SKIP_FILES.has(path.basename(f)));
const noteNames = new Set(notes.map((f) => path.basename(f, '.md')));
const attachments = new Set(files.filter((f) => rel(f).startsWith('attachments/')).map((f) => path.basename(f)));

const parsed = notes.map((f) => {
  const text = fs.readFileSync(f, 'utf8').replace(/^﻿/, ''); // tolerate a UTF-8 BOM
  return { file: f, rel: rel(f), text, fm: frontmatter(text) };
});

// Verified source URLs, for the bibliography check.
const verifiedUrls = new Set();
const decisionIds = new Map();

for (const n of parsed) {
  const isTemplate = n.rel.startsWith('Templates/');
  if (isTemplate) continue;
  const top = n.rel.split('/')[0];

  // Frontmatter and status. A missing block is reported, and the link checks below still run.
  if (!n.fm) err(n.rel, 'no frontmatter', 'add a --- block with at least title and status');
  n.fm = n.fm || {};
  if (!n.fm.status) err(n.rel, 'missing status', `add status: one of ${[...STATUSES].join(', ')}`);
  else if (!STATUSES.has(n.fm.status)) err(n.rel, `status "${n.fm.status}" is not allowed`, `use one of ${[...STATUSES].join(', ')}`);
  if (TYPED_DIRS.includes(top) && !n.fm.type) err(n.rel, 'missing type', 'add type: decision, spec, source or source-matrix');

  // Decisions: unique IDs that match the file name.
  if (top === 'Decisions') {
    const id = n.fm.id;
    if (!id) err(n.rel, 'decision has no id', 'add id: D-NNN using the next free number');
    else {
      if (!path.basename(n.rel).startsWith(id)) err(n.rel, `id ${id} does not match the file name`, `rename the file to start with "${id} "`);
      if (decisionIds.has(id)) err(n.rel, `id ${id} is also used by ${decisionIds.get(id)}`, 'give one of them the next free id');
      else decisionIds.set(id, n.rel);
    }
    if (!['open', 'settled'].includes(n.fm.status)) err(n.rel, 'decision status must be open or settled', 'set status: open or status: settled');
  }

  // Sources: URL present; collect verified ones. A verified source matrix (type: source-matrix)
  // vouches for every URL in its table rows, one row per source.
  if (top === 'Sources' && n.fm.type === 'source-matrix') {
    if (n.fm.status === 'verified') {
      for (const row of n.text.split(/\r?\n/).filter((l) => l.startsWith('|'))) {
        for (const u of row.match(/https?:\/\/[^\s|)]+/g) || []) verifiedUrls.add(u.replace(/[).,;]+$/, ''));
      }
    }
  } else if (top === 'Sources') {
    if (!n.fm.url) err(n.rel, 'source has no url', 'add url: with the DOI or official link');
    if (n.fm.status === 'verified' && n.fm.url) verifiedUrls.add(n.fm.url.replace(/[).,;]+$/, ''));
  }

  // Wikilinks and embeds (ignore code spans and fenced code).
  const body = n.text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  for (const m of body.matchAll(/(!?)\[\[([^\]|#]+)/g)) {
    const target = m[2].trim();
    const ok = m[1] ? attachments.has(target) : noteNames.has(target);
    if (!ok) err(n.rel, `broken ${m[1] ? 'embed' : 'link'} [[${target}]]`, m[1] ? 'add the file to attachments/ or fix the name' : 'create the note or fix the link text');
  }
}

// Bibliography entries in manuscript notes must have a verified source note.
// A note may set its own allowed range in frontmatter, e.g. source_years: 2015-2026 (default 2020-2026).
for (const n of parsed.filter((p) => p.rel.startsWith('Manuscript/'))) {
  const range = ((n.fm && n.fm.source_years) || '').match(/^(\d{4})\s*-\s*(\d{4})$/);
  const [minYear, maxYear] = range ? [+range[1], +range[2]] : [2020, 2026];
  const lines = n.text.split(/\r?\n/);
  const bibStart = lines.findIndex((l) => /^#{1,3}\s+BIBLIOGRAPHY\s*$/i.test(l));
  if (bibStart < 0) continue;
  for (let i = bibStart + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^#{1,3}\s/.test(l) || /^---\s*$/.test(l)) break;
    const url = (l.match(/https?:\/\/\S+/) || [])[0];
    if (!url) continue;
    const clean = url.replace(/[).,;]+$/, '');
    if (!verifiedUrls.has(clean)) err(n.rel, `bibliography entry has no verified source note: ${clean}`, 'add a note in Sources/ with this url and status: verified, after checking the source');
    const year = (l.match(/\((\d{4})/) || [])[1];
    if (year && (+year < minYear || +year > maxYear)) warn(n.rel, `source year ${year} is outside ${minYear}-${maxYear}`, `replace it with a ${minYear}-${maxYear} source`);
  }
}

// Staged edits to Final/ (pre-commit only).
if (process.argv.includes('--staged') && process.env.ALLOW_FINAL_EDIT !== '1') {
  try {
    const staged = execSync('git diff --cached --name-only', { cwd: ROOT, encoding: 'utf8' }).split(/\r?\n/).filter(Boolean);
    for (const f of staged.filter((s) => s.startsWith('Final/'))) {
      err(f, 'Final/ notes are read-only', 'unstage it, or set ALLOW_FINAL_EDIT=1 when the researcher supplied a new final version');
    }
  } catch (e) {
    warn('git', 'could not read staged files', 'run the check from inside the vault repository');
  }
}

for (const line of [...errors, ...warnings]) console.log(line);
const status = errors.length ? 'error' : warnings.length ? 'warning' : 'success';
console.log(`status: ${status}`);
console.log(`summary: ${parsed.length} notes checked, ${errors.length} errors, ${warnings.length} warnings`);
if (errors.length) console.log('next_actions: fix each ERROR above, then run the check again');
process.exit(errors.length ? 1 : 0);
