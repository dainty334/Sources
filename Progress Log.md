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

- Fill the 11 placeholders in [[Chapter 1 - Introduction (Revised Draft)]]: city/province, learning setting, dated observation, survey date/grades/selection, local evidence for Problems 1 and 4, division range, excluded topics, items per level.
- Survey conflict: [[Survey Tally (Final)]] asks about reading comprehension, so there is no local evidence yet for division difficulty.
- Set the level unlock rules (score or accuracy needed).
- Chapters II–IV are not started.
- Neither repo is pushed to GitHub yet.
