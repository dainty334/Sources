---
title: "DIVIRUSH Progress Log"
project: DIVIRUSH
status: reference
tags: [divirush, log]
---

# DIVIRUSH Progress Log

Newest entry first. Each entry records what was done, what was decided, and what is still open.

## 2026-11-22

### Done

**Vault setup**
- Imported the source documents as notes: [[Chapter 1 - Introduction (Unrevised)]], [[Pre-Proposal - Division Duel (Final)]], [[Survey Tally (Final)]], [[Manuscript Outline - BSIT (Table of Contents)]] and [[Guidelines - Writing Chapters 1-3]].
- Sorted notes into `Final/`, `Guidelines/`, `Manuscript/`, `Templates/` and `attachments/`.
- Wrote `AGENTS.md` (with `CLAUDE.md` importing it): layout, note status, writing steps, commit rules and source conflicts.
- Set Obsidian options: attachments folder, new notes in `Manuscript/`, templates folder, links update on rename.
- Initialized this vault as the Sources repo (`dainty334/Sources`) with 5 commits on `main`. A `.gitignore` leaves out `.obsidian/workspace.json` and `.trash/`.

**Chapter I**
- Wrote [[Chapter 1 - Introduction (Revised Draft)]] following the BSIT outline and the Chapters 1–3 guide.
- Addressed the adviser comments in the unrevised draft: removed the tools sentence from Scope, removed the repeated users line from Limitations, and added a placeholder for the specific excluded topics.
- Added an inverted-pyramid Project Context (global, national, local), four problems matched in order to four SMART objectives, and a Bibliography.
- Verified five sources from 2020–2026 (APA 7): DepEd MATATAG FAQ (2024), TIMSS 2019 (Mullis et al., 2020), PISA 2022 Philippines (OECD, 2023), UNESCO GEM Report (2023), Wang et al. (2022).
- Exported the chapter to Word: `Manuscript/Chapter 1 - Introduction (Revised).docx` (10 pages).

**Second-brain structure**
- Added `Decisions/` with D-001 to D-005 settled and [[D-006 Survey Evidence for Division]] open. These replace the conflict list in `AGENTS.md`.
- Added [[Game Spec]] in `Design/` as the single source of truth for game behaviour, with undecided values marked OPEN.
- Added `Sources/` with one verified note per Chapter I reference.
- Added `Decision` and `Source` templates, and described the new folders and statuses in `AGENTS.md`.

**Vault tooling**
- Saved the Chapter I prompt rules as [[Writing Rules]] for all chapters.
- Added `tools/build-docx.js` (Word export in the D-005 format) and `tools/check-vault.js` (links, frontmatter, decisions, verified citations, read-only `Final/`).
- Added a versioned pre-commit hook in `.githooks/` that runs the check. Tested: it catches bad status, broken links, unverified citations, out-of-range years and staged `Final/` edits.

**Chapter I placeholders**
- Filled 6 of the 11 placeholders: school location, learning setting, survey grade levels, items per level (10), division range (divisors and quotients 1–10), and excluded topics.
- Based the division range on the DepEd MATATAG Mathematics curriculum guide and added [[Department of Education (n.d.) - MATATAG Mathematics Curriculum Guide]] to `Sources/` and the Bibliography.
- Recorded the range and level length as [[D-007 Division Range and Level Length]] and updated [[Game Spec]].

**Episodes and game rules**
- Settled [[D-008 Episodes, Difficulty and Scoring]]: four division-fact Episodes (Easy Facts, Middle Facts, Hard Facts, Fact Families), each with Easy, Medium and Hard Difficulties of five Levels (60 Levels). It supersedes the level structure in [[D-003 Gameplay Design]].
- Set the Difficulty table (3 or 4 bubbles; 15 s, 10 s and 7 s timers), Star pass rule (8, 9, 10 correct), unlocking, time-out, points with speed and streak bonuses, per-Level best saves, and game feel.
- Started the glossary [[CONTEXT]] and pointed to it from `AGENTS.md`.
- Rewrote [[Game Spec]] and Chapter I Purpose, Objectives and Scope to match. Only the data file format is still OPEN.

**Chapter II**
- Saved [[Chapter II Writing Rules]] (2015–2026 sources, 30+ sources, 10+ pages).
- Verified 38 sources by opening each one, recorded in [[Chapter II Source Matrix]]: 33 dated 2015–2026 and 5 undated product pages or reports.
- Built [[Related Projects Comparison]] with 6 apps, including the Philippine Mathplus apps.
- Drafted [[Chapter II Draft 2026-11-22]]: about 5,330 words; the body fills 20 Word pages. Anchor theory: retrieval practice.
- Started [[Open Questions]] with a Chapter II section.
- Saved [[Chapter II Draft 2026-11-22 v2]] with three related projects (Times Tables Rock Stars, XtraMath, Mathplus) and [[Related Projects Comparison 2026-11-22 v2]]. v2 cites 34 sources, 30 of them dated 2015–2026; the body fills 19 Word pages.
- Saved [[Chapter II Draft 2026-11-22 v3]]: 1–2 sentences per cited source, body about 3,130 words on pages 1–13 (10–15 page rule). Added the amendment to [[Chapter II Writing Rules]].
- Saved [[Chapter II Draft 2026-11-22 v4]]: only the outline's two sections, no subsection headings; body on pages 1–12.
- Tooling: the vault check reads `source_years` per note and accepts a `source-matrix` note; the Word export now builds tables and leaves APA brackets in the bibliography unhighlighted.

**Game repo** (`D:\LAMBERTO\divi-rush`, `dainty334/DiviRush`)
- Added a project guide and project settings in two commits on `main` (`98334ce`, `f49ba2e`). The settings give access to this vault and turn off co-author lines.

### Decided

- **Title:** DIVIRUSH: An Adaptive Quick-Tap Educational Game for Enhancing Grade 4 Learner's Division Fact Recall. The pre-proposal title *Division Duel* is superseded.
- **Language:** GDScript.
- **Gameplay:** quick-tap answers with a countdown timer, running score and saved best score/time, across 15 levels: Easy (1–5), Medium (6–10), Hard (11–15). Harder levels unlock by performance rules.
- **Chapter I:** no development tools listed in Scope; only topic-neutral survey items used as local evidence; APA 7; completion period November–December 2026.
- **Manuscript format:** US Letter, 1.5 in left margin, 1 in top/right/bottom, Times New Roman 12 pt, double-spaced.
- **Commits:** rules for both repos are in `AGENTS.md` under "Git commits".

### Open

- Chapters I and II are accepted for now. Both will be revised later after adviser review; use [[Chapter 1 - Introduction (Revised Draft)]] and [[Chapter II Draft 2026-11-22 v4]] as the current versions.

- Fill the 5 remaining placeholders in [[Chapter 1 - Introduction (Revised Draft)]]: dated observation, survey date, selection method, and local evidence for Problems 1 and 4.
- Survey conflict: [[Survey Tally (Final)]] asks about reading comprehension, so there is no local evidence yet for division difficulty.
- Tell the adviser that the 15-level, three-stage structure is now four Episodes with three Difficulties each.
- Tune the 15 s, 10 s and 7 s timers in the tryout with Grade 4 learners.
- Chapter II: confirm the anchor theory with the adviser, add the 6 screenshots, and work through [[Open Questions]]. Chapters III–IV are not started.
- Neither repo is pushed to GitHub yet.
