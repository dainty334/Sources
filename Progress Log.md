---
title: "DIVIRUSH Progress Log"
project: DIVIRUSH
status: reference
tags: [divirush, log]
---

# DIVIRUSH Progress Log

Newest entry first. Each entry records what was done, what was decided, and what is still open.

## 2026-11-22 (game code: Episode 3)

### Done

- Episode 3 (Hard Facts: ÷6, ÷7, ÷8, ÷9) → Easy, Medium and Hard → Levels 1–5 can now be played in the game repo. It opens after Episode 2 Easy Level 5 is passed, as set in [[D-008 Episodes, Difficulty and Scoring]], and no longer shows "Coming soon".
- Its Levels follow [[D-012 Episode 3 Levels]]: Level 1 = ÷6, Level 2 = ÷7, Level 3 = ÷8, Level 4 = ÷9, each with answers 1–10; Level 5 = mixed review of 2 ÷6, 3 ÷7, 3 ÷8 and 2 ÷9 facts. Every item has its Easy, Medium and Hard wrong answers by the [[D-010 Game Code Foundations]] and [[D-011 Medium and Hard Wrong Answers]] rules. The largest dividend is 90.
- The Level cards show "÷6" to "÷9" and "Mix" with no labels of their own. The Episode 1 and 2 item banks did not change.
- Tests: 6 new automatic tests for the Episode 3 item bank (77 in all, all passing headless).
- New screenshots in the game repo `docs/screenshots/`: 21 Episode select with Episode 3 open, 22 Episode 3 Level select, 23 Episode 3 Play on Hard (72 ÷ 8 with 9, 8, 10 and 7).

### Decided

- [[D-012 Episode 3 Levels]]: Levels 1–4 use ÷6, ÷7, ÷8, ÷9 in counting order; Level 5 mixes 2 ÷6, 3 ÷7, 3 ÷8 and 2 ÷9 facts, giving more practice to ÷7 and ÷8; the Level cards need no labels of their own.

### Open

- Episode 4 (Fact Families) is next: its Level plan, which number is hidden (divisor or dividend), the wrong-answer range for hidden dividends up to 100, and how the ☐ shows on the item card.
- Not every Episode 3 Level has been played by hand yet; it was checked through automatic tests of every item and screenshots.
- Still open from before: the gold Stars are hard to see on the yellow Level cards (seen again in screenshot 22); tune the 15 s, 10 s and 7 s timers in the tryout; test on an Android phone.

## 2026-11-22 (game code: Episode 2)

### Done

- Episode 2 (Middle Facts: ÷3, ÷4) → Easy, Medium and Hard → Levels 1–5 can now be played in the game repo. It opens after Episode 1 Easy Level 5 is passed, as set in [[D-008 Episodes, Difficulty and Scoring]], and no longer shows "Coming soon".
- Its Levels follow [[D-011 Medium and Hard Wrong Answers]]: Level 1 = ÷3, Level 2 = ÷4, Level 3 = both with answers 1–5, Level 4 = both with answers 6–10, Level 5 = mixed review of 5 ÷3 and 5 ÷4 facts. Every item has its Easy, Medium and Hard wrong answers by the [[D-010 Game Code Foundations]] and D-011 rules.
- Level cards can now carry their own label. Episode 2 Levels 3 and 4 show "Mix 1–5" and "Mix 6–10", so they are not confused with the Level 5 "Mix". Episode 1 is unchanged.
- Tests: 6 new automatic tests for the Episode 2 item bank (71 in all, all passing headless).
- New screenshots in the game repo `docs/screenshots/`: 18 Episode select with Episode 2 open, 19 Episode 2 Level select, 20 Episode 2 Play (Level 3).

### Decided

- Working value: the card labels "Mix 1–5" and "Mix 6–10" for Episode 2 Levels 3 and 4. They can be reworded without a new decision.

### Open

- Episode 4 Level plan, and the wrong-answer range for items that hide the dividend.
- Not every Episode 2 Level has been played by hand yet.

## 2026-11-22 (game code: Medium and Hard for Episode 1)

### Done

- Episode 1 (Easy Facts) → Medium → Levels 1–5 and → Hard → Levels 1–5 can now be played in the game repo (`D:\LAMBERTO\divi-rush`). They follow the unlock rules in [[D-008 Episodes, Difficulty and Scoring]]: passing Easy Level 5 opens Medium, passing Medium Level 5 opens Hard. Medium and Hard no longer show "Coming soon".
- Medium shows 4 bubbles and a 10 s timer; Hard shows 4 bubbles and a 7 s timer. The same 5 Levels and facts as Easy are used; only the bubbles, wrong answers and timer change.
- Every Episode 1 item now stores 3 Medium and 3 Hard wrong answers, made by the rules in [[D-011 Medium and Hard Wrong Answers]]. The Easy wrong answers and the Level 5 mix did not change.
- Play screen: the 4 bubbles of Medium and Hard overlapped; they now sit in an even 2 × 2 square with a gap between them.
- Tests: 21 new automatic tests (65 in all, all passing headless) for the Medium and Hard wrong-answer rules, the Episode 1 item bank, Medium and Hard play (4 choices, 10 s and 7 s, time-out counts as wrong), unlocking, and saving each Difficulty's bests on its own.
- New screenshots for Chapter III in the game repo `docs/screenshots/`: 13 Difficulty select with Medium open, 14 Medium Level select, 15 Medium Play, 16 Hard Level select, 17 Hard Play.

### Decided

- [[D-011 Medium and Hard Wrong Answers]]: Medium wrong answers are the closest numbers first (1 away, then 2, then 3) inside 1–20. Hard wrong answers are the fact family answer (the divisor) and then answer −1 and +1. When too few exist, the nearest unused numbers fill the gap. Episode 2's Levels are ÷3; ÷4; both with answers 1–5; both with answers 6–10; and a mixed review of 5 ÷3 and 5 ÷4 facts.

### Open

- Episode 4 (Fact Families) Level plan, and the wrong-answer range for its missing-number items that hide the dividend (up to 100).
- On the Level select screen the earned gold Stars are hard to see on the yellow Level cards (seen in the Easy, Medium and Hard screenshots). A design check is needed.
- The Medium and Hard screens were checked through screenshots and automatic tests of every item; not every one of the 10 new Levels has been played by hand yet.
- Still open from before: tune the 15 s, 10 s and 7 s timers in the tryout; test on an Android phone; the package name and app version are working values.

## 2026-11-22 (game code: first playable slice)

### Done

- Built the first playable slice of the game in the game repo (`D:\LAMBERTO\divi-rush`, Godot 4.7.2): Start-up menu → Main menu → Episode select → Difficulty select → Level select → Play → Level end. Episode 1 (Easy Facts) → Easy → Levels 1–5 can be played; Episodes 2–4, Medium and Hard show with a lock and follow the unlock rules in [[D-008 Episodes, Difficulty and Scoring]].
- Main menu: Play, How to Play (short rules screen), Settings (Music, Sound effects and Vibration on/off, saved), Exit.
- Play screen as in the approved style sample: top bar, 10 progress dots, timer bar (green → yellow → red), streak badge, item card and 3 answer bubbles on Easy. Bubbles pop green with a sparkle when correct and turn red and shake when wrong; a time-out shows the correct answer.
- Level end: Stars fill one by one, with a "New best!" tag; each Level's best Stars, score and time are saved on the device.
- Game rules (points, streak bonus, Stars, Pass, unlocking, time-out, saving) are plain GDScript classes with 44 automatic tests (GUT); all pass headless.
- Art: flat cartoon SVG drawings with matching PNG sprite sheets on a fixed grid (frame size in the file name), editable in Piskel or Clip Studio Paint EX. Font: Fredoka (OFL).
- Music: three original chiptune tracks (menu loop, play loop, win jingle) and six sound effects, composed in code, on separate Music and SFX audio buses.
- Android export preset (portrait, vibration permission) added.
- Screenshots of every screen for Chapter III: game repo `docs/screenshots/` (01 Start-up menu to 12 Level end).

### Decided

- [[D-010 Game Code Foundations]]: item banks as Godot Resource (`.tres`) files; save file `user://save.cfg` (ConfigFile); GUT for tests; Fredoka font; Levels 1–4 use one divisor each and Level 5 is mixed; the streak bonus starts on the 4th correct answer in a row; best time comes only from passed plays. This settled the last OPEN item in [[Game Spec]].

### Open

- Medium and Hard wrong answers: [[D-008 Episodes, Difficulty and Scoring]] says "near" and "near and look-alike"; the exact rule (how near, which look-alikes) is not yet set.
- Episode 2 has only two divisors (÷3, ÷4), so "Levels 1–4 each use one divisor" ([[D-010 Game Code Foundations]]) does not fit it; its Level contents need a decision. Episode 3 fits the pattern; Episode 4 (Fact Families) also needs its own Level plan.
- The Android package name (`com.divirush.game`) and app version are working values.
- The game has been run on a PC only; it still needs a test on an Android phone (vibration, notch margins, sound).

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
