---
id: D-023
title: "Trophies and My Records"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, revision]
---

# D-023 Trophies and My Records

Raised on 2026-11-23 as a game revision: the researcher asked whether the game could have achievements and learner stats, built into the Main menu ([[D-022 Main Menu Home Dashboard]]). Terms follow [[CONTEXT]].

**Question:** What rewards and records should the game keep for the learner, what should they be called, and how should they show?

**Facts found:**
- The manuscript uses "achievement" for learning achievement, the outcome the study measures, and Chapter 1 says the game's scores, Levels and best times "record gameplay only" and are not a measure of the learner's mathematics achievement. [[CONTEXT]] already avoids "badge" for Stars.
- Chapter II explains that DiviRush awards Stars for correct answers only, because speed-based rewards may raise attempts without raising accuracy.
- Research on digital badges in learning (Abramovich, Schunn and Higashi) found that badges can help engagement but that learners may chase badges instead of learning, so badges work best when tied to mastery and progress. Microsoft Reading Coach pairs its badges with a progress page (sessions, accuracy, time).
- The game already saves each Level's best Stars, score and time ([[D-010 Game Code Foundations]]); it does not yet count plays, answers, streaks or time played.
- The out-of-scope list forbids accounts and a teacher or admin dashboard; records kept on the learner's own device for the learner are neither.

**Options:**
- Name: Trophies; Stickers; Achievements.
- Records: My Records (Stars and Levels plus a few new counts); the same plus "tricky facts"; only the data already saved.
- Trophy set: 12 for progress, accuracy and practice; 6 simpler; 12 for finishing each Episode and Difficulty.
- When earned: a banner on the Level end screen; only on the Trophies screen.
- Locked look: grey with the goal; hidden as "?".

**Decision:** settled by the researcher on 2026-11-23, all as recommended.

**Trophies** (the rewards are called Trophies, never achievements or badges). Twelve, for progress, accuracy and practice; none for speed:

| Trophy | Earned by |
|---|---|
| First Star | earning the first Star |
| Perfect 10 | 10 of 10 correct in a Level |
| On a Roll | 5 correct in a row |
| Easy Facts | passing Episode 1 Easy Level 5 |
| Middle Facts | passing Episode 2 Easy Level 5 |
| Hard Facts | passing Episode 3 Easy Level 5 |
| Fact Families | passing Episode 4 Easy Level 5 |
| Medium Ready | passing any Medium Level |
| Hard Hero | passing any Hard Level |
| Star Collector | earning 50 Stars |
| Practice Pro | playing 25 Levels |
| Division Champion | earning all 180 Stars |

- A Trophy is earned once and kept. When a play earns one or more, a gold "Trophy earned!" banner with each Trophy's name shows on the Level end screen after the Stars, with the Star sound.
- The **Trophies** screen shows all twelve: earned ones in colour; ones not yet earned in grey with a lock and their goal written under them (for example "Earn 50 Stars").

**My Records** (game records, not grades): Stars earned of 180 and Levels passed of 60, Stars for each Episode as a bar, and four new counts the game starts saving: Levels played, correct answers, best streak (most correct in a row) and time played. No percentages or grades are shown.

**Working choices** (the developer's): the new counts and the earned Trophies are saved in the same `user://save.cfg` file as the bests ([[D-010 Game Code Foundations]]); time played adds up the time spent in Levels; counts start at 0 when this version is first opened, while Trophies that depend on bests already saved (Stars, passes) are given at once.

**Reason:**
- "Trophy" is clear to children, different from a Star, and does not clash with "learning achievement" in the manuscript.
- Trophies for accuracy, progress and practice follow the same rule as Stars (no reward for speed) and the badge research (reward mastery and progress).
- Showing the goal of each locked Trophy gives the learner something to aim for.
- Plain counts and bars keep My Records a record of play, as Chapter 1 says, not a grade.

**Applies to:** [[Game Spec]] (Screens; Scoring and saving), [[CONTEXT]] (new terms Trophy and My Records), and the game repo `D:\LAMBERTO\divi-rush` (save data, Level end, two new screens).
