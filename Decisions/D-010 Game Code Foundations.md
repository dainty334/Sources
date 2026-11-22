---
id: D-010
title: "Game code foundations"
project: DIVIRUSH
type: decision
status: settled
decided: 2026-11-22
tags: [divirush, decision, game-code]
---

# D-010 Game code foundations

Settled by the researcher on 2026-11-22, before the first playable slice of the game was built. Terms follow [[CONTEXT]].

**Question:** How does the game code store items and saves, test its rules, and draw its text? Which items go into each Level, and how are the streak bonus and the best time counted?

**Decision:**

| Item | Choice | Reason |
|---|---|---|
| Item data file | Godot Resource (`.tres`), one item bank per Episode | Typed fields, editable in the Godot Inspector, no parsing code. New items are added to the file, not the code. |
| Save file | Godot `ConfigFile` at `user://save.cfg`: one `settings` section and one section per Level | Built into Godot and readable as text. It stays on the device (no cloud save). |
| Test framework | GUT (Godot Unit Test), in `addons/gut/` | Pure GDScript with a command-line runner, so the rule tests run headless. |
| Font | Fredoka (SIL Open Font Licence), with its licence file kept in the repo | Rounded and bold, matching the approved style sample ([[D-009 Art Style and Music]]). |
| Items per Level | Levels 1–4 each use one divisor of the Episode with its 10 facts; Level 5 is a mixed review of 10 facts from all the Episode's divisors | A clear step-by-step order a teacher can explain. Episode 1: Level 1 = ÷1, Level 2 = ÷2, Level 3 = ÷5, Level 4 = ÷10, Level 5 = mixed. |
| Streak bonus | The 4th correct answer in a row is the first to earn +5; every correct answer after it in the same run also earns +5 | Literal reading of "after three correct in a row" ([[D-008 Episodes, Difficulty and Scoring]]). |
| Best time | The shortest total time to finish all 10 items, kept only from plays that pass (at least one Star) | Fast wrong tapping cannot set a time record. |

**Working values (changeable without a new decision):**
- Level 5 of an Episode is a fixed list of 10 facts in the item bank, 2–3 facts from each divisor. The item order is shuffled each play.
- On a time-out the correct answer shows for 1.5 seconds before the next item.
- Easy wrong answers are at least 3 away from the correct answer, between 1 and 20, and all different.
- The streak badge appears from 3 correct in a row.

**Settles:** the last OPEN item in [[Game Spec]] (data file format).

**Applies to:** [[Game Spec]] (Items, Scoring and saving) and the game code in `D:\LAMBERTO\divi-rush`.
