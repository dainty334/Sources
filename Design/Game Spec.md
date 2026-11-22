---
title: "DIVIRUSH Game Spec"
project: DIVIRUSH
type: spec
status: draft
updated: 2026-11-22
sources: ["[[Pre-Proposal - Division Duel (Final)]]", "[[Chapter 1 - Introduction (Unrevised)]]", "[[D-003 Gameplay Design]]", "[[D-007 Division Range and Level Length]]", "[[D-008 Episodes, Difficulty and Scoring]]"]
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
| Engine | Godot 4.7, Mobile renderer | Pre-proposal |
| Language | GDScript | [[D-002 Programming Language]] |
| Output | Android APK | Pre-proposal |
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

## Core loop

1. The learner picks an open Episode, Difficulty and Level.
2. An item appears (for example, 56 ÷ 8) with answer bubbles: one correct answer and the rest wrong.
3. A countdown timer runs for the item.
4. The learner taps one bubble before the timer ends.
5. The game shows feedback at once, and the running score updates. A time-out counts as wrong and briefly shows the correct answer.
6. The next item appears, until 10 items are done.
7. The Level end screen shows the Stars, score and time, and saves the best of each on the device.
8. Passing the Level (at least one Star) opens the next one. Any open Level can be replayed.

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
- **Data file format:** OPEN. To be chosen when the game code starts.

## Scoring and saving

- 10 points per correct answer, plus 1 point for each whole second left on the timer.
- +5 streak bonus for each correct answer after three correct in a row.
- 0 points for a wrong answer or time-out; points never go down.
- Stars count accuracy only.
- Each Level saves its best Stars, best score and best time on the device only. There is no cloud save (pre-proposal).

## Look, sound and controls

- Simple 2D bubble-style graphics; one-tap controls (pre-proposal).
- **Art style:** flat cartoon: bright colours, rounded shapes, thick dark outlines, big readable numbers ([[D-009 Art Style and Music]]). Assets are SVG plus PNG sprite sheets on a fixed grid, editable in Piskel or Clip Studio Paint EX.
- **Music:** three original chiptune-style tracks composed in code ([[D-009 Art Style and Music]]): a calm loop for the menus, a faster loop during play, and a short win jingle on the Level end screen. Music has its own on/off switch in Settings.
- **Lively screens:** floating background bubbles, bouncing buttons and animated stars, so the game is not boring.
- Bubbles pop when tapped: green with a sparkle for correct, red with a shake for wrong.
- The timer bar turns green → yellow → red.
- A streak counter ("×3 Streak!").
- Stars fill in one by one at Level end, with a "New best!" tag.
- Sound effects for correct, wrong, time-up and the Star reveal; they have their own on/off switch in Settings.
- Vibration on a wrong answer, where the device supports it; it can be turned off in Settings.

## Out of scope

No storyline, chapters or mini-games; no multiplayer or online play; no accounts, companion website or teacher/admin dashboard; no cloud save; no iOS or desktop builds; no word problems or other math operations. Source: pre-proposal limitations. Also out: division with remainders, long division, fractions and decimals ([[D-007 Division Range and Level Length]]).

## Open items

| Item | Needed for |
|---|---|
| Data file format | Code |
