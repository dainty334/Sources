---
title: "DIVIRUSH Game Spec"
project: DIVIRUSH
type: spec
status: draft
updated: 2026-11-22
sources: ["[[Pre-Proposal - Division Duel (Final)]]", "[[Chapter 1 - Introduction (Unrevised)]]", "[[D-003 Gameplay Design]]", "[[D-007 Division Range and Level Length]]", "[[D-008 Episodes, Difficulty and Scoring]]", "[[D-010 Game Code Foundations]]", "[[D-011 Medium and Hard Wrong Answers]]", "[[D-012 Episode 3 Levels]]", "[[D-013 Episode 4 Levels and Missing-Number Items]]"]
tags: [divirush, design, spec]
---

# DIVIRUSH Game Spec

The single source of truth for what the game does. The game code and the manuscript chapters both follow this note. Values marked **OPEN** are not decided yet; do not invent them in code or text. Raise them with the researcher instead. Terms (Episode, Difficulty, Level, Star, Pass) follow [[CONTEXT]].

## Identity

| Item | Value | Source |
|---|---|---|
| Title | DIVIRUSH: An Adaptive Quick-Tap Educational Game for Enhancing Grade 4 Learner's Division Fact Recall | [[D-001 Official Title]] |
| Users | Grade 4 learners of Baluan Elementary School | Chapter 1 |
| Skill | Basic division fact recall | Chapter 1, pre-proposal |
| Players | Single-player | Pre-proposal |

## Platform

| Item | Value | Source |
|---|---|---|
| Engine | Godot 4.7, Compatibility renderer (OpenGL ES 3), for low-cost phones | Pre-proposal; renderer: [[D-016 Renderer for Low-Cost Phones]] |
| Language | GDScript | [[D-002 Programming Language]] |
| Output | Android APK (build setup: [[D-014 Android Build Setup]]) | Pre-proposal |
| Devices | Android phones and tablets, Android 10–14 | Pre-proposal |
| Minimum hardware | 2 GB RAM, 150 MB free storage | Pre-proposal |
| Network | Fully offline once installed | Pre-proposal |
| Orientation | Portrait only, designed at 1080 × 1920 | [[D-009 Art Style and Music]] |

## Screens

Start-up menu → Main menu → Episode select → Difficulty select → Level select → Play → Level end. One main game screen is reused for every Level (pre-proposal).

- **Start-up menu:** the first screen when the app opens. It shows the DiviRush title and a "Tap to Start" prompt; tapping goes to the Main menu.
- **Main menu:** four buttons ([[D-008 Episodes, Difficulty and Scoring]]):
  - **Play:** opens Episode select.
  - **How to Play:** a short screen explaining the rules: tap the correct bubble before the timer ends; 8 of 10 correct earns a Star and opens the next Level.
  - **Settings:** Music on/off, Sound effects on/off, and Vibration on/off.
  - **Exit:** closes the app.
- **Main menu look** ([[D-017 Main Menu Look]]): a big floating logo with a twinkling sparkle, the DIVIRUSH title with letters that bounce in and wave, the "Quick-tap division!" tagline, and a white pill with the learner's total Stars (earned / 180). The four buttons stand straight and lined up, each with a drawn icon (play arrow, question mark, gear, door); only Play breathes gently.

## Core loop

1. The learner picks an open Episode, Difficulty and Level.
2. An item appears (for example, 56 ÷ 8) with answer bubbles: one correct answer and the rest wrong.
3. A countdown timer runs for the item.
4. The learner taps one bubble before the timer ends.
5. The game shows feedback at once, and the running score updates. A time-out counts as wrong and briefly shows the correct answer.
6. The next item appears, until 10 items are done.
7. The Level end screen shows the Stars, score and time, and saves the best of each on the device.
8. Passing the Level (at least one Star) opens the next one. Any open Level can be replayed.

If the learner leaves the app during a Level (a call, the Home button), the Level pauses and the timer keeps its time. On return a "Paused" card covers the item, with three choices: Resume (the item comes back with its time left), Restart (the Level starts again from item 1) and Levels (back to Level select). Restart and Levels save nothing from the stopped play. There is no Pause button ([[D-015 Pause When the App Leaves the Screen]]).

## Episodes

Four Episodes, each with three Difficulties (Easy, Medium, Hard) of five Levels: 15 Levels per Episode, 60 in total ([[D-008 Episodes, Difficulty and Scoring]]).

| Episode | Facts |
|---|---|
| 1 Easy Facts | ÷1, ÷2, ÷5, ÷10 |
| 2 Middle Facts | ÷3, ÷4 |
| 3 Hard Facts | ÷6, ÷7, ÷8, ÷9 |
| 4 Fact Families | All ÷1–÷10, plus missing-number items (56 ÷ ☐ = 7, ☐ ÷ 8 = 7) |

## Difficulty

| | Easy | Medium | Hard |
|---|---|---|---|
| Answer bubbles | 3 | 4 | 4 |
| Wrong answers | Far from the correct answer | Near | Near and look-alike, from neighbouring facts |
| Timer per item | 15 s | 10 s | 7 s |

Timer values are starting values, to be tuned in the tryout.

Wrong-answer rules ([[D-010 Game Code Foundations]], [[D-011 Medium and Hard Wrong Answers]]). All wrong answers are inside 1–20, all different, and never the correct answer.

- **Easy (2 wrong answers):** at least 3 away from the correct answer.
- **Medium (3 wrong answers):** closest first: the numbers 1 away, then 2 away, then 3 away, picked at random when a step has more numbers than places left. Example: 35 ÷ 5 = 7 → 6, 8, and 5 or 9.
- **Hard (3 wrong answers):** first the answer of the swapped fact in the same fact family (35 ÷ 7 = 5, so the divisor), then answer −1 and +1 (the facts just before and after in the same table). Example: 35 ÷ 5 = 7 → 5, 6, 8.
- **Too few:** when a fact has too few such numbers (25 ÷ 5 = 5, answer 1), the nearest unused numbers fill the missing places, so every item still has its wrong answers.

Missing-number items in Episode 4 ([[D-013 Episode 4 Levels and Missing-Number Items]]):

- **Hidden divisor** (56 ÷ ☐ = 7, answer 8): the same rules as above, inside 1–20; the fact-family partner is the quotient. Example: Hard → 7, 9, and 6 or 10.
- **Hidden dividend** (☐ ÷ 8 = 7, answer 56): wrong answers are multiples of the divisor, inside 1–100, all different, never the answer. Easy (2): at least 3 multiples away. Medium (3): nearest multiples first (48, 64, and 40 or 72). Hard (3): the neighbouring facts (divisor − 1) × quotient and (divisor + 1) × quotient, then divisor × (quotient − 1) or divisor × (quotient + 1) (49, 63, and 48 or 64). Too few: the next nearest unused multiples of the divisor fill the places (☐ ÷ 10 = 10 → 90, 80, 70).

## Stars and unlocking

| Stars | Correct out of 10 |
|---|---|
| 0 (not passed) | 0–7 |
| 1 | 8 |
| 2 | 9 |
| 3 | 10 |

- At the start only Episode 1 → Easy → Level 1 is open.
- Passing a Level opens the next Level in the same Difficulty.
- Passing Easy Level 5 opens that Episode's Medium; passing Medium Level 5 opens its Hard.
- Passing an Episode's Easy Level 5 also opens the next Episode's Easy.

## Items

- Items come from an expandable list, so new items can be added without changing the game's code (pre-proposal).
- Each item stores the dividend, divisor, correct answer and its wrong answers, and which number is hidden (the quotient, or the divisor or dividend in Episode 4).
- **Division range:** divisors 1–10 and quotients 1–10; every dividend is 100 or less and divides evenly ([[D-007 Division Range and Level Length]]).
- **Items per Level:** 10.
- **Items in each Level:** Levels 1–4 each use one divisor of the Episode with its 10 facts; Level 5 is a mixed review of 10 facts from all the Episode's divisors. Episode 1: Level 1 = ÷1, Level 2 = ÷2, Level 3 = ÷5, Level 4 = ÷10, Level 5 = mixed ([[D-010 Game Code Foundations]]). Episode 2 has only two divisors, so it uses: Level 1 = ÷3, Level 2 = ÷4, Level 3 = ÷3 and ÷4 with answers 1–5, Level 4 = ÷3 and ÷4 with answers 6–10, Level 5 = mixed review of 5 ÷3 and 5 ÷4 facts ([[D-011 Medium and Hard Wrong Answers]]). Episode 3: Level 1 = ÷6, Level 2 = ÷7, Level 3 = ÷8, Level 4 = ÷9, Level 5 = mixed review of 2 ÷6, 3 ÷7, 3 ÷8 and 2 ÷9 facts ([[D-012 Episode 3 Levels]]). Episode 4 hides one kind of number per Level, each Level with one fact from every table ÷1–÷10 and no fact repeated across its Levels: Level 1 = missing quotient, Level 2 = missing divisor, Level 3 = missing dividend, Level 4 = 5 missing divisor and 5 missing dividend, Level 5 = 2 missing quotient, 4 missing divisor and 4 missing dividend ([[D-013 Episode 4 Levels and Missing-Number Items]]). The item order is shuffled each play.
- **Data file format:** Godot Resource (`.tres`), one item bank per Episode ([[D-010 Game Code Foundations]]).

## Scoring and saving

- 10 points per correct answer, plus 1 point for each whole second left on the timer.
- +5 streak bonus for each correct answer after three correct in a row: the 4th correct answer in a row is the first to earn it ([[D-010 Game Code Foundations]]).
- 0 points for a wrong answer or time-out; points never go down.
- Stars count accuracy only.
- Each Level saves its best Stars, best score and best time on the device only. There is no cloud save (pre-proposal).
- **Best time:** the shortest total time to finish all 10 items, kept only from plays that pass ([[D-010 Game Code Foundations]]).
- **Save file:** Godot `ConfigFile` at `user://save.cfg`, holding the Settings switches and each Level's bests ([[D-010 Game Code Foundations]]).

## Look, sound and controls

- Simple 2D bubble-style graphics; one-tap controls (pre-proposal).
- **Art style:** flat cartoon: bright colours, rounded shapes, thick dark outlines, big readable numbers ([[D-009 Art Style and Music]]). Assets are SVG plus PNG sprite sheets on a fixed grid, editable in Piskel or Clip Studio Paint EX.
- **Music:** three free CC0 recordings ([[D-018 Background Music]]): a calm loop for the menus ("Home": piano, flute and strings) and a livelier loop during play ("Picnic": saxophone, vibraphone and strings), both by heartade, and a short saxophone win jingle by Kenney on the Level end screen. Music has its own on/off switch in Settings.
- **Lively screens:** floating background bubbles, bouncing buttons and animated stars, so the game is not boring.
- Bubbles pop when tapped: green with a sparkle for correct, red with a shake for wrong.
- The timer bar turns green → yellow → red.
- A streak counter ("×3 Streak!").
- Stars fill in one by one at Level end, with a "New best!" tag.
- Sound effects for the button tap, correct, wrong, time-up, the Star reveal and the bubble pop: recorded CC0 sounds from Kenney's Interface Sounds ([[D-019 Sound Effects]]); they have their own on/off switch in Settings.
- Vibration on a wrong answer, where the device supports it; it can be turned off in Settings.

## Out of scope

No storyline, chapters or mini-games; no multiplayer or online play; no accounts, companion website or teacher/admin dashboard; no cloud save; no iOS or desktop builds; no word problems or other math operations. Source: pre-proposal limitations. Also out: division with remainders, long division, fractions and decimals ([[D-007 Division Range and Level Length]]).

## Open items

- Timer values are still to be tuned in the tryout.
- Revisions settled and built on 2026-11-22: a Level pauses when the app leaves the screen, with a "Paused" card and the time kept ([[D-015 Pause When the App Leaves the Screen]]); the game uses the Compatibility renderer ([[D-016 Renderer for Low-Cost Phones]]).
- Revision settled and built on 2026-11-23: a livelier, lined-up Main menu ([[D-017 Main Menu Look]]).
- Revision settled and built on 2026-11-23: CC0 recorded music in place of the code-made music ([[D-018 Background Music]]). The researcher should listen to the win jingle and may pick another Kenney tune.
- Revision settled and built on 2026-11-23: recorded CC0 sound effects in place of the code-made beeps ([[D-019 Sound Effects]]). The researcher should listen and may swap any of the six.

The data file format was settled in [[D-010 Game Code Foundations]], the Medium and Hard wrong answers and the Episode 2 Levels in [[D-011 Medium and Hard Wrong Answers]], the Episode 3 Levels in [[D-012 Episode 3 Levels]], and the Episode 4 Levels and missing-number wrong answers in [[D-013 Episode 4 Levels and Missing-Number Items]], on 2026-11-22.
