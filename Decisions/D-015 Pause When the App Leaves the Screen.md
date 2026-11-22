---
id: D-015
title: "Pause when the app leaves the screen"
project: DIVIRUSH
type: decision
status: open
raised: 2026-11-22
tags: [divirush, decision, game-design, game-code, revision]
---

# D-015 Pause when the app leaves the screen

Raised on 2026-11-22 as a game revision, after a review of the game code. Terms follow [[CONTEXT]].

**Question:** On the Play screen, the item timer counts down every frame and does not stop when the learner leaves the app (a phone call, the Home button, another app). A learner may come back to a timed-out item that they never had a fair chance to answer. Should the game pause the Level when the app leaves the screen, and what should the learner see when they come back?

**Facts found:**
- The timer runs in `scripts/screens/play_screen.gd` (`_process`), with no pause.
- Saving is already safe: `scripts/autoloads/save_manager.gd` saves when Android sends the app to the background.
- The Android Back button already goes to the previous screen (`scripts/ui/screen_base.gd`).
- The unfair time-out has not yet been seen on a real phone; the phone test should check it.

**Options:**
- Pause on leaving, and show a "Paused" card with a button to go on; the timer keeps the time it had.
- Pause on leaving, and restart the item with full time when the learner comes back.
- Add a Pause button on the Play screen as well, so a learner can stop on purpose.
- No change: leaving the app may cost an item.

**Decision:** (fill when settled; set `status: settled` and add `decided:`)

**Reason:**

**Applies to:** [[Game Spec]] (How a Level plays) and the game code in `D:\LAMBERTO\divi-rush` (`scripts/screens/play_screen.gd`).
