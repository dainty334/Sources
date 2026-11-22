---
id: D-008
title: "Episodes, difficulty and scoring"
project: DIVIRUSH
type: decision
status: settled
decided: 2026-11-22
tags: [divirush, decision, game-design, chapter-1]
---

# D-008 Episodes, difficulty and scoring

Terms follow [[CONTEXT]] (Episode, Difficulty, Level, Star, Pass).

## Structure

Start-up menu → Main menu → Episode select → Difficulty select → Level select → Play. (Start-up menu and Main menu added by the researcher on 2026-11-22, replacing "Home".)

- **Start-up menu:** DiviRush title and a "Tap to Start" prompt; tapping goes to the Main menu.
- **Main menu:** Play (opens Episode select), How to Play (short rules screen), Settings (Music on/off, Sound effects on/off, Vibration on/off; see [[D-009 Art Style and Music]]), Exit (closes the app).

Four Episodes, each with three Difficulties (Easy, Medium, Hard) of five Levels: 15 Levels per Episode, 60 in total. Every Level has 10 items ([[D-007 Division Range and Level Length]]).

| Episode | Facts | Basis |
|---|---|---|
| 1 Easy Facts | ÷1, ÷2, ÷5, ÷10 | Project design: easy patterns (halves, fives, tens) |
| 2 Middle Facts | ÷3, ÷4 | Project design: the remaining smaller tables |
| 3 Hard Facts | ÷6, ÷7, ÷8, ÷9 | The tables the MATATAG Key Stage 1 standard names for Grade 3 ([[Department of Education (n.d.) - MATATAG Mathematics Curriculum Guide]], p. 16) |
| 4 Fact Families | All ÷1–÷10, plus missing-number items (56 ÷ ☐ = 7, ☐ ÷ 8 = 7) | Mixed review; missing-number format as in Grade 4 Q4 number sentences (p. 29) |

The Episode 1 and 2 grouping is the project's own design, not DepEd's. No official MATATAG Grade 2 or Grade 3 Mathematics guide was found online on 2026-11-22.

## Difficulty

The Episode sets which facts appear; the Difficulty sets how hard they are to answer.

| | Easy | Medium | Hard |
|---|---|---|---|
| Answer bubbles | 3 | 4 | 4 |
| Wrong answers | Far from the correct answer (56 ÷ 8 → 7, 2, 15) | Near (7, 6, 9, 8) | Near and look-alike, from neighbouring facts |
| Timer per item | 15 s | 10 s | 7 s |

Timer values are starting values, to be tuned in the tryout with Grade 4 learners and reported in Chapter III.

## Stars and unlocking

| Stars | Correct out of 10 | Result |
|---|---|---|
| 0 | 0–7 | Not passed; retry |
| 1 | 8 | Passed |
| 2 | 9 | Passed |
| 3 | 10 | Passed, perfect |

- At the start only Episode 1 → Easy → Level 1 is open.
- Passing a Level opens the next Level in the same Difficulty.
- Passing Easy Level 5 opens that Episode's Medium; passing Medium Level 5 opens its Hard.
- Passing an Episode's Easy Level 5 also opens the next Episode's Easy.
- Any open Level can be replayed.

## Items and time-out

- A time-out counts as wrong. The correct answer shows briefly, then the next item appears.

## Points

- 10 points for a correct answer, plus 1 point for each whole second left on the timer.
- +5 streak bonus for each correct answer after three correct in a row.
- 0 points for a wrong answer or time-out; points never go down.
- Stars count accuracy only; points reward speed and streaks.

## Saving

Each Level saves its best Stars, best score and best time on the device. The Level select screen shows each Level's best Stars.

## Game feel

- Bubbles pop when tapped: green with a sparkle for correct, red with a shake for wrong.
- Short sounds for correct, wrong, time-up and the Star reveal, with a mute button.
- A streak counter ("×3 Streak!") that grows with the streak.
- Stars fill in one by one at the end of a Level, with a "New best!" tag for a new record.
- The timer bar turns green → yellow → red as time runs out.
- Optional vibration on a wrong answer, where the device supports it.

None of these adds a gameplay mechanic; the game keeps one mechanic (tap the correct answer).

**Supersedes:** the "15 levels in three stages" structure in [[D-003 Gameplay Design]]. Settles the [[Game Spec]] OPEN items: unlock rule, what changes between levels, timer length, time-out behaviour, points per answer and best-score scope.

**Applies to:** [[Game Spec]], [[Chapter 1 - Introduction (Revised Draft)]] (Purpose, Objectives, Scope) and the game code.
