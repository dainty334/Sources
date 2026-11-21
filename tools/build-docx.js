// Export a manuscript chapter note to Word in the D-005 Manuscript Format.
//
// Usage (from the vault root):
//   node tools/build-docx.js "Manuscript/<Chapter note>.md" ["Manuscript/<Chapter> (Revised).docx"]
//
// Exports from the first "# CHAPTER" heading up to the first "---" line after it
// (or the end of the note), so frontmatter, callouts and appendix tables stay out.
// Markdown handled: #/##/### headings, paragraphs, "- " bullets, "1. " numbered
// lists, **bold**, *italic*, and [placeholders] (highlighted yellow).
const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  LevelFormat, Footer, PageNumber,
} = require('docx');

const [src, outArg] = process.argv.slice(2);
if (!src) {
  console.error('error: missing note path. Usage: node tools/build-docx.js "Manuscript/<note>.md" [out.docx]');
  process.exit(2);
}
const out = outArg || src.replace(/ \((Revised Draft|Unrevised|Draft)\)\.md$|\.md$/, ' (Revised).docx');

const text = fs.readFileSync(src, 'utf8');
const start = text.search(/^# CHAPTER/m);
if (start < 0) {
  console.error(`error: no "# CHAPTER" heading in ${src}. Add one where the exported text should begin.`);
  process.exit(1);
}
const endIdx = text.indexOf('\n---\n', start);
const lines = text.slice(start, endIdx < 0 ? undefined : endIdx).trim().split(/\r?\n/);

const FONT = 'Times New Roman';
const SIZE = 24; // 12 pt
const LINE = 480; // double spacing

function runs(s) {
  const result = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\])/g;
  let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) result.push(new TextRun({ text: s.slice(last, m.index) }));
    const t = m[0];
    if (t.startsWith('**')) result.push(new TextRun({ text: t.slice(2, -2), bold: true }));
    else if (t.startsWith('*')) result.push(new TextRun({ text: t.slice(1, -1), italics: true }));
    else result.push(new TextRun({ text: t, highlight: 'yellow' }));
    last = m.index + t.length;
  }
  if (last < s.length) result.push(new TextRun({ text: s.slice(last) }));
  return result;
}

const children = [];
let inBib = false, olInstance = 0, prevWasOl = false, placeholders = 0;

for (const raw of lines) {
  const s = raw.trimEnd();
  if (!s) continue;
  placeholders += (s.match(/\[[^\]]+\]/g) || []).length;
  let m;
  if ((m = s.match(/^(#{1,3})\s+(.*)$/))) {
    const level = m[1].length, title = m[2];
    inBib = title.toUpperCase() === 'BIBLIOGRAPHY';
    prevWasOl = false;
    const heading = level === 1 ? HeadingLevel.HEADING_1 : level === 2 ? HeadingLevel.HEADING_2 : HeadingLevel.HEADING_3;
    children.push(new Paragraph({
      heading,
      alignment: level === 1 || inBib ? AlignmentType.CENTER : AlignmentType.LEFT,
      children: [new TextRun({ text: title })],
    }));
    continue;
  }
  if ((m = s.match(/^(\d+)\.\s+(.*)$/))) {
    if (!prevWasOl) olInstance += 1;
    prevWasOl = true;
    children.push(new Paragraph({
      numbering: { reference: 'numbers', level: 0, instance: olInstance },
      alignment: AlignmentType.JUSTIFIED,
      children: runs(m[2]),
    }));
    continue;
  }
  prevWasOl = false;
  if ((m = s.match(/^-\s+(.*)$/))) {
    children.push(new Paragraph({
      numbering: { reference: 'bullets', level: 0 },
      alignment: AlignmentType.JUSTIFIED,
      children: runs(m[1]),
    }));
    continue;
  }
  if (inBib && !s.startsWith('This section')) {
    children.push(new Paragraph({ indent: { left: 720, hanging: 720 }, children: runs(s) }));
    continue;
  }
  children.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, indent: { firstLine: 720 }, children: runs(s) }));
}

const headingRun = { font: FONT, size: SIZE, bold: true, color: '000000' };
const doc = new Document({
  creator: 'DIVIRUSH Capstone',
  styles: {
    default: {
      document: { run: { font: FONT, size: SIZE }, paragraph: { spacing: { line: LINE, before: 0, after: 0 } } },
      heading1: { run: { ...headingRun }, paragraph: { spacing: { line: LINE, before: 0, after: 0 }, keepNext: true, outlineLevel: 0 } },
      heading2: { run: { ...headingRun }, paragraph: { spacing: { line: LINE, before: 240, after: 0 }, keepNext: true, outlineLevel: 1 } },
      heading3: { run: { ...headingRun, italics: true }, paragraph: { spacing: { line: LINE, before: 240, after: 0 }, keepNext: true, outlineLevel: 2 } },
    },
  },
  numbering: {
    config: [
      { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbers', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 }, // US Letter
        margin: { top: 1440, right: 1440, bottom: 1440, left: 2160 }, // 1.5 in left (D-005)
      },
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT] })] })] }),
    },
    children,
  }],
});

(async () => {
  // Rebuild the ZIP without folder entries: Word has refused files that contain them.
  const zip = await JSZip.loadAsync(await Packer.toBuffer(doc));
  const clean = new JSZip();
  for (const [name, entry] of Object.entries(zip.files)) {
    if (!entry.dir) clean.file(name, await entry.async('nodebuffer'), { createFolders: false });
  }
  fs.writeFileSync(out, await clean.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
  console.log(`status: success\nsummary: ${children.length} paragraphs, ${placeholders} placeholders -> ${path.resolve(out)}`);
  if (placeholders) console.log('next_actions: fill the yellow [placeholders] before submission');
})().catch((err) => {
  console.error(`status: error\nsummary: ${err.message}\nnext_actions: close the .docx if it is open in Word, then run again`);
  process.exit(1);
});
