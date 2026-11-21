---
title: "DIVIRUSH Game Spec"
project: DIVIRUSH
type: spec
status: draft
updated: 2026-11-22
sources: ["[[Pre-Proposal - Division Duel (Final)]]", "[[Chapter 1 - Introduction (Unrevised)]]", "[[D-003 Gameplay Design]]"]
tags: [divirush, design, spec]
---

# DIVIRUSH Game Spec

The single source of truth for what the game does. The game code and the manuscript chapters both follow this note. Values marked **OPEN** are not decided yet; do not invent them in code or text. Raise them with the researcher instead.

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

## Core loop

1. The learner selects an unlocked level.
2. A division problem appears (for example, 56 ÷ 8) with 3–4 answer choices shown as bubbles: one correct answer plus 2–3 wrong answers.
3. A countdown timer runs for the problem.
4. The learner taps one answer before the timer ends.
5. The game shows visual feedback for a correct or incorrect tap, and the running score updates.
6. The next problem appears until the level ends.
7. At the end of the level, the game shows the score and saves the best score and time on the device.
8. If the performance meets the unlock rule, the next level unlocks. Any unlocked level can be replayed.

One main game screen is reused for every round (pre-proposal).

## Levels

| Stage | Levels |
|---|---|
| Easy | 1–5 |
| Medium | 6–10 |
| Hard | 11–15 |

- **Unlock rule:** OPEN. The score or accuracy needed to unlock the next level.
- **What changes between levels:** OPEN. For example, larger divisors, larger quotients, or a shorter timer.
- **Items per level:** OPEN.

## Problems

- Problems come from an expandable list, so new problems can be added without changing the game's code (pre-proposal).
- Each problem stores the dividend, divisor, correct answer and 2–3 wrong answers.
- **Division range:** OPEN. Which divisors, quotients and dividends count as "basic division facts".
- **Data file format:** OPEN. To be chosen when the game code starts.

## Timer

- Each problem has its own countdown timer (pre-proposal).
- **Timer length:** OPEN. Seconds per problem, and whether it changes by stage.
- **When time runs out:** OPEN. For example, counted as wrong and the next problem appears.

## Scoring and saving

- A running score shows during play (pre-proposal).
- The best score and time are saved on the device only. There is no cloud save (pre-proposal).
- **Points per answer:** OPEN.
- **Best score scope:** OPEN. Per level or overall.

## Look and controls

- Simple 2D bubble-style graphics (pre-proposal).
- One-tap controls (pre-proposal).

## Out of scope

No storyline, chapters or mini-games; no multiplayer or online play; no accounts, companion website or teacher/admin dashboard; no cloud save; no iOS or desktop builds; no word problems or other math operations. Source: pre-proposal limitations.

## Open items

| Item | Needed for |
|---|---|
| Unlock rule | Code, Chapter I Objective 3 |
| What changes between levels | Code, Chapter III |
| Items per level | Code, Chapter I Objective 2 |
| Division range | Code, Chapter I Scope |
| Data file format | Code |
| Timer length and time-out behaviour | Code |
| Points per answer, best score scope | Code |
