---
id: D-013
title: "Episode 4 Levels and missing-number items"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-22
decided: 2026-11-22
tags: [divirush, decision, game-design, game-code]
---

# D-013 Episode 4 Levels and missing-number items

Settled by the researcher on 2026-11-22, before Episode 4 (Fact Families) was built. Terms follow [[CONTEXT]].

**Question:** [[D-008 Episodes, Difficulty and Scoring]] sets Episode 4 as all ÷1–÷10 facts plus missing-number items (56 ÷ ☐ = 7, ☐ ÷ 8 = 7). [[D-011 Medium and Hard Wrong Answers]] left open the Episode 4 Level plan and the wrong answers for items that hide the dividend (up to 100). What is in each Level, which facts go in, and what are the wrong answers when the divisor or the dividend is hidden?

**Options:**
- Level plan: one hidden kind per Level, then mixed; by table groups (Episode 1, 2, 3 facts), each with all three kinds; two Levels per kind, then mixed.
- Facts per Level: one fact from each table ÷1–÷10; more facts from the hard tables ÷6–÷9; fully random.
- Hidden dividend: multiples of the divisor; number line (±1 to ±3, digit swaps); multiples for Easy and Medium with digit swaps for Hard.
- Hidden divisor: the D-011 rules with range 1–20; the D-011 rules with range 1–10.
- Mixed Levels: Level 4 = 5 / 5 with Level 5 = 2 / 4 / 4 or 4 / 3 / 3.
- Repeats: no fact repeated across the Episode's Levels; the same 10 facts in every Level.

**Decision:**

| Item | Choice | Examples |
|---|---|---|
| Level plan | **One hidden kind per Level, then mixed.** Level 1 = missing quotient (review of all tables); Level 2 = missing divisor; Level 3 = missing dividend; Level 4 = missing divisor and missing dividend mixed; Level 5 = all three kinds mixed. | L1: 56 ÷ 8 = ?. L2: 56 ÷ ☐ = 7. L3: ☐ ÷ 8 = 7. |
| Facts per Level | **One fact from each table ÷1–÷10**, 10 items per Level. | Every Level reviews every table once. |
| Mixed Levels | **Level 4 = 5 missing divisor + 5 missing dividend. Level 5 = 2 missing quotient + 4 missing divisor + 4 missing dividend.** | Level 5 leans on the two new kinds. |
| Repeats | **No fact repeats across the five Episode 4 Levels** (50 of the 100 facts in all). | Learners cannot carry a memorised answer from one Level to the next. |
| Hidden divisor wrong answers | **The D-011 rules as they are**, range 1–20. The fact-family partner is the quotient. Easy: 2 answers at least 3 away. Medium: nearest first. Hard: the quotient, then answer −1 and +1, with the D-011 nearest-unused fallback. | 56 ÷ ☐ = 7 (answer 8): Medium → 7, 9, and 6 or 10. Hard → 7 (partner), 9, and 6 or 10 (7 is both the partner and 8 − 1). |
| Hidden dividend wrong answers | **Multiples of the divisor**, all inside 1–100, all different, never the answer. Easy (2): multiples of the divisor at least 3 multiples away. Medium (3): nearest multiples first (1 multiple away, then 2, …). Hard (3): answers of the neighbouring facts: (divisor − 1) × quotient and (divisor + 1) × quotient, then divisor × (quotient − 1) or divisor × (quotient + 1). | ☐ ÷ 8 = 7 (answer 56): Easy → 2 of 8–32 or 80–96 (for example 32, 80). Medium → 48, 64, and 40 or 72. Hard → 49 (7 × 7), 63 (9 × 7), and 48 or 64. |
| Too few (hidden dividend) | **Next nearest unused multiple of the divisor**, inside 1–100, after any unused neighbouring-fact answer. Every item still has its wrong answers. | ☐ ÷ 1 = 7 (Hard): 0 × 7 is out of range → 14, 6, 8. ☐ ÷ 10 = 10 (Hard): 110 is out and 10 × 9 = 90 repeats → 90, 80, 70. |

**Reason:**
- One new kind per Level keeps the step-by-step order of Episodes 1–3, and Level 1 reviews every table before anything is hidden in a new place.
- One fact per table keeps every table in every Level, so Episode 4 really is a review of all of ÷1–÷10.
- With no repeats, a learner must recall each fact, not remember an answer from an earlier Level.
- A hidden divisor is a number from 1 to 10, the same as a quotient, so the D-011 rules fit without change.
- Multiples of the divisor are the numbers a learner who knows the table might confuse; a non-multiple such as 55 can be ruled out without recalling the fact. The neighbouring facts (7 × 7, 9 × 7) are the Hard look-alikes, as in D-011.

**Working values (changeable without a new decision):**
- Which facts go into each Level, and which hidden kind each Level 4 and Level 5 item gets, are picked at random with a fixed seed, so rebuilding the item banks gives the same Levels.
- Level card labels: Level 1 "÷ ?", Level 2 "÷ ☐", Level 3 "☐ ÷", Level 4 "Mix ☐", Level 5 "Mix". The ☐ is drawn as a thick rounded box in the text colour on the cards and the item card, since Fredoka has no ☐ sign; reword freely.

**Applies to:** [[Game Spec]] (Items, Difficulty) and the game code in `D:\LAMBERTO\divi-rush` (`WrongAnswers`, `tools/build_item_banks.gd`, `resources/episodes/episode_4.tres`).
