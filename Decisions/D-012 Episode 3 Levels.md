---
id: D-012
title: "Episode 3 Levels"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-22
decided: 2026-11-22
tags: [divirush, decision, game-design, game-code]
---

# D-012 Episode 3 Levels

Settled by the researcher on 2026-11-22, before Episode 3 (Hard Facts) was built. Terms follow [[CONTEXT]].

**Question:** [[D-010 Game Code Foundations]] says Levels 1–4 each use one divisor of the Episode and Level 5 is a mixed review of 10 facts. For Episode 3 (÷6, ÷7, ÷8, ÷9): in what order do the four divisors come, how many facts of each divisor go into Level 5, and do the Level cards need their own labels?

**Options:**
- Level order: ÷6, ÷7, ÷8, ÷9 (counting order); ÷6, ÷9, ÷7, ÷8 (easier tables first); ÷9, ÷6, ÷8, ÷7.
- Level 5 mix (÷6 / ÷7 / ÷8 / ÷9): 2 / 3 / 3 / 2; 3 / 2 / 2 / 3; 2 / 3 / 2 / 3.
- Card labels: none; own labels as in Episode 2.

**Decision:**

| Item | Choice |
|---|---|
| Level order | **Counting order.** Level 1 = ÷6, Level 2 = ÷7, Level 3 = ÷8, Level 4 = ÷9, each with answers 1–10. |
| Level 5 mix | **2 / 3 / 3 / 2.** 2 ÷6 facts, 3 ÷7 facts, 3 ÷8 facts and 2 ÷9 facts, 10 in all, no fact repeated. |
| Card labels | **None.** Levels 1–4 show "÷6" to "÷9" and Level 5 shows "Mix", as in Episode 1. |

**Reason:**
- Counting order is the same rule as Episode 1 (÷1, ÷2, ÷5, ÷10) and Episode 2 (÷3, ÷4), so a teacher can explain it easily.
- ÷7 and ÷8 are the facts Grade 4 learners often find hardest, so Level 5 gives them one more fact each. The mix stays within the 2–3 facts per divisor of [[D-010 Game Code Foundations]].
- Every Level card is already clear without a label; Episode 2 needed labels only because two of its Levels were both mixed.

**Working values (changeable without a new decision):** which ÷6–÷9 facts go into Level 5 is picked at random with a fixed seed, so rebuilding the item banks gives the same Level. Every item gets its Easy, Medium and Hard wrong answers by the rules of [[D-010 Game Code Foundations]] and [[D-011 Medium and Hard Wrong Answers]].

**Applies to:** [[Game Spec]] (Items) and the game code in `D:\LAMBERTO\divi-rush` (`tools/build_item_banks.gd`, `resources/episodes/episode_3.tres`).
