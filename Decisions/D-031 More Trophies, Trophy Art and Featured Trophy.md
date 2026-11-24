---
id: D-031
title: "More Trophies, Trophy art and Featured Trophy"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-24
decided: 2026-11-24
tags: [divirush, decision, game-code, art, revision]
---

# D-031 More Trophies, Trophy art and Featured Trophy

Raised on 2026-11-24 as a game revision. The researcher asked for:
- more achievements;
- different art for each one;
- an achievement for a perfect score or a full streak;
- a way to display one.

The game's achievements are its Trophies ([[D-023 Trophies and My Records]]), so the name stays "Trophies". Terms follow [[CONTEXT]].

**Question:** Which new Trophies should the game have, how should each one look, and how can a learner show one off?

**Facts found:**
- There are 12 Trophies ([[D-023 Trophies and My Records]]), dated since [[D-030 Profile, Nickname and New Bottom Bar]]. Every screen counts them from one list, and the Trophies grid already scrolls.
- All 12 share one gold cup picture. One not yet earned shows a lock instead.
- D-023's rule: Trophies reward progress, accuracy and practice, never speed, as Stars do.
- **Perfect score:** a Level's score adds 1 point per second left (`scoring.gd`). The highest score therefore depends on speed, so a "perfect score" Trophy must mean all answers right, not the most points.
- **Full streak:** the streak starts again in every Level, so a full streak there is 10 in a row. That is already "Perfect 10".
- **Saved facts:** the save holds each Level's best Stars and the count of correct answers. It does not yet hold:
  - which Levels were played but not passed;
  - how many different days the game was played;
  - a streak that carries from one Level to the next.
- **Naming:** [[CONTEXT]] avoids the word "badge" for a Trophy, so the Trophy a learner shows is called the **Featured Trophy**.

**Decision:** settled by the researcher on 2026-11-24, every recommended answer.

*14 new Trophies, 26 in all*, after the first 12, in this order:

| Trophy | Earned by | Picture |
|---|---|---|
| Easy Explorer | passing every Easy Level (20) | compass |
| Medium Master | passing every Medium Level (20) | silver rosette |
| Hard Master | passing every Hard Level (20) | gold shield |
| Episode Star | earning all 45 Stars in one Episode | star with a ring |
| Perfect Five | 10 of 10 in 5 Levels | medal "5" |
| Perfect Twenty | 10 of 10 in 20 Levels | medal "20" |
| Hard Perfect | 10 of 10 in a Hard Level | diamond |
| Missing Number | 10 of 10 in an Episode 4 Level | magnifier over ☐ |
| Hundred Right | 100 answers right | tick "100" |
| Five Hundred | 500 answers right | tick "500" |
| Try Again | passing a Level that was played before without passing | loop arrow |
| Three Days | playing on 3 different days | calendar |
| Super Streak | 30 answers right in a row, across Levels | chain of links |
| Perfect Run | 10 of 10 in all 5 Levels of one Difficulty of one Episode | ribbon with five ticks |

*Each Trophy's own picture*, in the flat cartoon style ([[D-009 Art Style and Music]]), with a coloured ring for its group:

| Group | Ring | Trophies and pictures |
|---|---|---|
| Progress | gold | First Star (gold star); Easy Facts, Middle Facts, Hard Facts, Fact Families (cup with 1, 2, 3, 4); Medium Ready (orange rosette); Hard Hero (shield); Star Collector (jar of stars); Division Champion (crown with ÷); Easy Explorer; Medium Master; Hard Master; Episode Star |
| Accuracy | blue | Perfect 10 (medal "10"); On a Roll (rolling ball); Perfect Five; Perfect Twenty; Hard Perfect; Missing Number; Super Streak; Perfect Run |
| Practice | green | Practice Pro (notebook); Hundred Right; Five Hundred; Try Again; Three Days |

*Looks and rules:*
- **Not yet earned:** the Trophy's own picture in grey, with a small lock in the corner, so the learner sees what they are working towards.
- **New saved facts**, kept only on the phone:
  - Try Again: which Levels were played but not passed.
  - Three Days: how many different days the game was played, and the last day.
  - Super Streak: the streak that carries from Level to Level, and the best one.
- **Goals already met:** a learner who already meets a new goal when this version first opens gets that Trophy at once, quietly, dated that day, as D-023 did.
- **Featured Trophy:**
  - In the Profile, the learner picks one earned Trophy to show, or None.
  - It shows big on the Profile, and small on the Main menu's Profile pill next to the Nickname.
  - It is saved with the Profile ([[D-030 Profile, Nickname and New Bottom Bar]]).
- **Unchanged:** everything else from D-023 and D-030. The Level end banner, the Trophy card with its date or "how far along", and the Records tab work the same, now with each Trophy's own picture.

**Working choices** (the developer's, may be tuned):
- **"How far along"** counts what the goal counts. Examples: "7 of 20 Levels passed" (Easy Explorer), the best Episode's "30 of 45 Stars" (Episode Star), "12 of 30 right in a row" (Super Streak), "3 of 5 Levels with 10 of 10" in the best Difficulty (Perfect Run), and "1 of 3 days" (Three Days).
- **Super Streak's streak** carries over to the next Level and across restarts. A wrong answer or a time-out ends it.
- **Starting from this version:** Try Again, Three Days and Super Streak start counting when this version is first opened, because older saves do not hold those facts. A day is the phone's own date.
- **Featured Trophy default:** None until the learner picks one. With None, or before any Trophy is earned, the Profile says "Earn a Trophy to show it here."
- **Pictures:** each picture is drawn in the art tool on one sheet. The grey look is the same picture tinted.

**Reason:**
- More goals give learners new targets after the first 12, and the higher ones (Perfect Twenty, Five Hundred, Hard Master, Perfect Run) last until late in the game.
- Super Streak and Perfect Run reward getting everything right without rewarding speed.
- Try Again rewards not giving up. Three Days rewards practice spread over days, which helps memory.
- A picture of its own makes each Trophy memorable. Showing it in grey before it is earned makes it a goal to aim for.
- A Featured Trophy lets the learner show pride in a goal reached, on their own phone only.

**Changes:**
- Adds to [[D-023 Trophies and My Records]]: 26 Trophies instead of 12. Each has its own picture, and those not yet earned show a grey picture instead of a lock.
- Adds a Featured Trophy to [[D-030 Profile, Nickname and New Bottom Bar]].

**Applies to:** [[Game Spec]] (Trophies, Profile) and the game repo `D:\LAMBERTO\divi-rush`:
- rules: `scripts/rules/trophies.gd`, `records.gd`, `profile.gd`, `save_store.gd`, `level_run.gd`
- autoload: `scripts/autoloads/save_manager.gd`
- screens: `trophies_screen.gd`, `profile_screen.gd`, `main_menu.gd`, `level_end.gd`
- art: `tools/build_art.gd`
