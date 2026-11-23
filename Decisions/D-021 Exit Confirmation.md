---
id: D-021
title: "Exit confirmation"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, revision]
---

# D-021 Exit confirmation

Raised on 2026-11-23 as a game revision: the researcher asked that Exit ask for confirmation before the game closes. Terms follow [[CONTEXT]].

**Question:** How should the game check that the learner really wants to close it?

**Facts found:**
- The Main menu's Exit button closed the game at once ([[D-008 Episodes, Difficulty and Scoring]] lists Exit as "closes the app").
- Android Back on the Start-up menu also closed the game at once.
- A young learner can tap Exit by mistake; the game saves on closing, so nothing is lost, but the learner has to open the game again.
- The "Paused" card ([[D-015 Pause When the App Leaves the Screen]]) already shows the look for a card with choices over a screen.

**Options:** a card asking "Leave DiviRush?" with Stay and Exit; tap Exit twice within 2 seconds.

**Decision:** settled by the researcher on 2026-11-23, as recommended: **a card** like the Paused card, saying "Leave DiviRush?", with a big green **Stay** button and a pink **Exit** button. Stay closes the card; Exit saves and closes the game. Android Back on the Start-up menu shows the same card, and Android Back while the card is open is the same as Stay.

**Reason:**
- The safe choice (Stay) is the biggest button, so a second mistaken tap keeps the learner in the game.
- It reuses the look of the Paused card, so it looks like the rest of the game.

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`scripts/screens/main_menu.gd`, `scripts/screens/start_screen.gd`).
