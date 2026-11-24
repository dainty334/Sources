---
id: D-031
title: "Twelve more Trophies"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-24
decided: 2026-11-24
tags: [divirush, decision, game-code, revision]
---

# D-031 Twelve more Trophies

Raised on 2026-11-24 as a game revision: the researcher asked for more achievements. The game's achievements are its Trophies ([[D-023 Trophies and My Records]]), so this adds Trophies; the name stays "Trophies". Terms follow [[CONTEXT]].

**Question:** Which new Trophies should the game have, and how should they be earned and shown?

**Facts found:**
- There are 12 Trophies ([[D-023 Trophies and My Records]]), dated since [[D-030 Profile, Nickname and New Bottom Bar]]. Every screen counts them from one list, and the Trophies grid already scrolls.
- D-023's rule: Trophies reward progress, accuracy and practice, never speed, as Stars do.
- The save already holds each Level's best Stars and the count of correct answers. It does not yet hold which Levels were played but not passed, or how many different days the game was played.

**Decision:** settled by the researcher on 2026-11-24, all four recommended answers.

*The set:* 12 new Trophies, 24 in all.

| Trophy | Earned by |
|---|---|
| Easy Explorer | passing every Easy Level (20) |
| Medium Master | passing every Medium Level (20) |
| Hard Master | passing every Hard Level (20) |
| Episode Star | earning all 45 Stars in one Episode |
| Perfect Five | 10 of 10 in 5 Levels |
| Perfect Twenty | 10 of 10 in 20 Levels |
| Hard Perfect | 10 of 10 in a Hard Level |
| Missing Number | 10 of 10 in an Episode 4 Level |
| Hundred Right | 100 answers right |
| Five Hundred | 500 answers right |
| Try Again | passing a Level that was played before without passing |
| Three Days | playing on 3 different days |

*The rules:*
- **New saved facts:** for Try Again, which Levels were played but not passed; for Three Days, how many different days the game was played and the last day. Both are kept only on the phone.
- **Order:** the new Trophies come after the first 12 on the Trophies screen, in the order above. The first 12 keep their places.
- **Goals already met:** a learner who already meets a new goal when this version first opens gets that Trophy at once, quietly, dated that day, as D-023 did.
- **Unchanged:** everything else from D-023 and D-030. The Level end banner, the grey card with its goal, and the Trophy card with its date or "how far along" all work the same for the new Trophies.

**Working choices** (the developer's, may be tuned):
- "How far along" counts what the goal counts. For example, "7 of 20 Levels passed" for Easy Explorer, the best Episode's Stars for Episode Star ("30 of 45 Stars"), and "1 of 3 days" for Three Days.
- Try Again and Three Days start counting when this version is first opened, because older saves do not hold those facts.
- A day is the phone's own date.

**Reason:**
- Twelve more goals give learners new targets after the first 12, and the higher ones (Perfect Twenty, Five Hundred, Hard Master) last until late in the game.
- Try Again rewards not giving up after a failed Level. Three Days rewards practice spread over several days, which helps memory. Neither rewards speed.

**Changes:** this adds to [[D-023 Trophies and My Records]]: 24 Trophies instead of 12. The name, the rules and the look stay.

**Applies to:** [[Game Spec]] (Trophies) and the game repo `D:\LAMBERTO\divi-rush` (`scripts/rules/trophies.gd`, `records.gd`, `save_store.gd`, `scripts/autoloads/save_manager.gd`).
