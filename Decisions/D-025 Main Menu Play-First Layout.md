---
id: D-025
title: "Main menu play-first layout"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, revision]
---

# D-025 Main menu play-first layout

Raised on 2026-11-23 as a game revision: the researcher asked for the Main menu to be cleaned up and improved, and for draft arrangements to choose from; then, to make it cleaner still, that the mascot's speech bubble show only when the mascot is tapped. Terms follow [[CONTEXT]].

**Question:** Which clean arrangement should the Main menu use, and when should the mascot talk?

**Facts found:**
- After [[D-022 Main Menu Home Dashboard]] and [[D-024 Talking Student Mascots]], the Main menu stacked eight separate boxes with thick outlines (the mascot's speech bubble, the progress card, Play, four tiles and Exit), all equally strong, so nothing stood out except by size. The speech bubble was always showing, with a new line every few seconds.
- Three drafts were drawn as phone mockups: **A**, one hero card (mascot, bubble and counts in one card; Play; the 2 × 2 tiles; Exit as a text link); **B**, play first with a bottom bar (count pills and an Exit door along the top; the mascot in the middle with its bubble above; one huge Play; the four other choices as icons in one bar at the bottom); **C**, center stage (counts in a strip; a big mascot in the middle; Play under it; four round icon buttons; Exit as a text link).

**Decision:** settled by the researcher on 2026-11-23: **B, play first with a bottom bar** (recommended), and **the mascot talks only when tapped** (the researcher's own request). Top to bottom:
- **Top row:** three small white pills with the learner's counts (Stars, Trophies, Levels passed), and a small pink door button at the right for Exit, which still asks first ([[D-021 Exit Confirmation]]).
- **Middle:** the mascot, Ana or Migo, bigger and centred. The speech bubble above them is hidden. Tapping the mascot shows the next line (the greeting first), typed in with the mouth moving; a few seconds after the line is finished, the bubble fades away. Tapping again shows the next line.
- **Play:** one huge green Play button that breathes, as before.
- **Bottom bar:** one white bar with four icon buttons and their names: How to Play, Trophies, My Records, Settings.

**Working choices** (the developer's, may be tuned): the pills show "earned/total" as before; the bottom bar's buttons use the existing icons and a smaller text size so all four names fit; the mascot floats gently up and down, so learners can see it is alive and tappable; the bubble stays 3 seconds after a line is finished; the candy sky of D-022 stays.

**Reason:**
- Fewer boxes and one clear main action: Play is the only big button, as children's app guidance advises.
- The less-used choices sit together in one bar, a pattern learners know from mobile games, and Exit moves to a small corner button, so it is harder to tap by mistake.
- A bubble that shows only on a tap keeps the screen quiet until the learner wants the mascot to talk.

**Changes:** this replaces the arrangement of [[D-022 Main Menu Home Dashboard]] (progress card, 2 × 2 tiles, Exit button at the bottom), and from [[D-024 Talking Student Mascots]] the mascot's place at the top and its lines changing by themselves every few seconds. The candy sky, the counts, the mascots, their turns and their lines stay.

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`scripts/screens/main_menu.gd`, `scripts/ui/mascot.gd`).
