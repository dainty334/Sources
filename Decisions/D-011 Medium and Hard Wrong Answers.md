---
id: D-011
title: "Medium and Hard wrong answers"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-22
decided: 2026-11-22
tags: [divirush, decision, game-design, game-code]
---

# D-011 Medium and Hard wrong answers

Settled by the researcher on 2026-11-22, before Medium and Hard of Episode 1 were built. Terms follow [[CONTEXT]].

**Question:** [[D-008 Episodes, Difficulty and Scoring]] says Medium wrong answers are "near" and Hard wrong answers are "near and look-alike, from neighbouring facts". Which numbers exactly? What fills the gap when a fact has too few of them? And what do the five Levels of Episode 2 hold, since it has only two divisors?

**Options:**
- Medium: closest first inside 1–20; closest first inside 1–10; any 3 within ±3.
- Hard: fact family + next facts; dividend digits + next facts; fact family + one digit + next fact.
- Fallback: next nearest unused number; the item's Medium answers; one far answer.
- Episode 2: tables, then halves, then mix; tables, then three mixed reviews.

**Decision:**

| Item | Choice | Examples |
|---|---|---|
| Medium wrong answers (3 per item) | **Closest first.** Take the numbers 1 away from the answer, then 2 away, then 3 away, until there are 3. When a step has more numbers than places left, pick among them at random. All are inside 1–20 (the Easy range in [[D-010 Game Code Foundations]]), all different, never the answer. | 35 ÷ 5 = 7 → 6, 8, and 5 or 9. 10 ÷ 10 = 1 → 2, 3, 4. 100 ÷ 10 = 10 → 9, 11, and 8 or 12. |
| Hard wrong answers (3 per item) | **Fact family + next facts.** First the answer of the swapped fact in the same fact family (for a missing quotient, the divisor: 35 ÷ 7 = 5). Then the answers of the facts just before and after in the same table (answer −1 and +1). Same range and rules as Medium. | 35 ÷ 5 = 7 → 5, 6, 8. 14 ÷ 2 = 7 → 2, 6, 8. 70 ÷ 10 = 7 → 10, 6, 8. 7 ÷ 1 = 7 → 1, 6, 8. |
| Too few wrong answers | **Next nearest unused number.** Fill the missing places with the nearest numbers not used yet (2 away, then 3 away, …), inside 1–20. Every Medium and Hard item still has 3 wrong answers. | 56 ÷ 8 = 7 (Hard): 8 is both the divisor and 7 + 1 → 8, 6, and 5 or 9. 25 ÷ 5 = 5 (Hard): the divisor is the answer → 4, 6, and 3 or 7. 2 ÷ 2 = 1 (Hard) → 2, 3, 4. |
| Episode 2 Levels | **Tables, then halves, then mix.** Level 1 = ÷3 (answers 1–10); Level 2 = ÷4 (answers 1–10); Level 3 = ÷3 and ÷4 with answers 1–5; Level 4 = ÷3 and ÷4 with answers 6–10; Level 5 = mixed review of 5 ÷3 and 5 ÷4 facts. | Every Episode 2 fact appears in at least two Levels. |

**Reason:**
- Closest first matches the D-008 example (56 ÷ 8 = 7 → 6, 9, 8). The 1–20 range lets answer 10 also get 11, so the biggest bubble is not always the right one.
- The fact family answer is a real mistake learners make (mixing up divisor and quotient), and the next facts are the neighbouring facts in the same table. The rule works for every fact in every Episode, unlike digit look-alikes, which many Episode 1 facts (7 ÷ 1, 70 ÷ 10) do not have.
- The nearest-unused fallback keeps Medium and Hard items hard instead of slipping in an easy far answer.
- The Episode 2 plan keeps the step-by-step order of Episode 1 (one table at a time, then mixed).

**Working values (changeable without a new decision):** the item bank tool picks the random choices with a fixed seed, so rebuilding the item banks gives the same wrong answers.

**Still open:** the wrong-answer range for Episode 4 missing-number items that hide the dividend (up to 100), and Episode 4's Level plan. Both settled later in [[D-013 Episode 4 Levels and Missing-Number Items]].

**Applies to:** [[Game Spec]] (Difficulty, Items) and the game code in `D:\LAMBERTO\divi-rush` (`WrongAnswers`, `tools/build_item_banks.gd`).
