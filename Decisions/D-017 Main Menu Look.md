---
id: D-017
title: "Main menu look"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, revision]
---

# D-017 Main menu look

Raised on 2026-11-23 as a game revision: the researcher asked that the Main menu be made more exciting and visually aligned. Terms follow [[CONTEXT]].

**Question:** How should the Main menu look and move, so it is more exciting and its parts line up?

**Facts found:**
- Each of the four Main menu buttons rocks on its own timer, so at any moment they lean different ways. In screenshot `02_main_menu` Play and How to Play are tilted while Settings and Exit are straight. The other menu screens (Settings, Episode select, Level end) have straight buttons.
- The Main menu logo is 260 px and rocks 6°; on the Start-up menu the same logo is 440 px and the title is bigger (140 against 110). The "Quick-tap division!" tagline shows only on the Start-up menu.
- The space above the logo, above the buttons and below the buttons is shared 0.6 : 0.6 : 1.0, so a wide empty band is left at the bottom of the screen.
- The Settings rows show drawn icons (music note, speaker, phone); the Main menu buttons show text only. The icon sheet has no play, help, settings or exit icon.
- The game already counts the Stars earned in each Episode and Difficulty, so a total can be shown without new saving.
- [[D-009 Art Style and Music]] asks for screens that move (floating bubbles, bouncing buttons, animated stars), so the rocking cannot simply be removed without other movement in its place.

**Options:**
- Buttons: stand straight with only Play breathing; rock all four together; keep as now.
- Top area: a big lively logo and title; a bigger logo only; keep as now.
- Icons: an icon on every button; on Play only; none.
- Star total under the title: yes; no.

**Decision:** settled by the researcher on 2026-11-23, all as recommended:
- **Buttons:** all four stand straight and lined up, at the same width. Only Play moves on its own: it grows and shrinks gently, like "Tap to Start", so the eye goes to it. Every button still squashes and springs back when tapped.
- **Top area:** a bigger logo that floats gently up and down, with a sparkle that twinkles on it now and then. The DIVIRUSH letters bounce in one by one when the menu opens, then wave. The "Quick-tap division!" tagline comes back under the title.
- **Icons:** a drawn icon on the left of each button: a play arrow (Play), a question mark (How to Play), a gear (Settings) and a door (Exit), in the same flat cartoon style as the other icons.
- **Star total:** a white pill under the tagline shows a gold Star and the learner's total, for example "5 / 180" (4 Episodes × 3 Difficulties × 5 Levels × 3 Stars).
- The space is shared again so the logo, title and buttons fill the screen evenly, with no empty band at the bottom.

**Reason:**
- Buttons that stand straight line up with each other and with the other menu screens; one breathing Play button keeps the screen moving (D-009) and shows the learner where to start.
- The Main menu is the screen learners see most often between plays, so a lively top area makes it feel less plain without adding anything to read.
- Icons help young readers find a button by its picture, and match the Settings rows.
- The Star total gives the learner a goal each time the menu opens. It adds nothing to the four buttons listed in [[D-008 Episodes, Difficulty and Scoring]].

**Working values** (the developer's, may be tuned): logo 380 px floating 16 px up and down every 2.4 s; a sparkle about every 3 s; title letters 0.06 s apart, each rising 10 px in the wave; Play growing 6% every 1.2 s.

**Applies to:** [[Game Spec]] (Screens, Look, sound and controls) and the game repo `D:\LAMBERTO\divi-rush` (`scripts/screens/main_menu.gd`, `scripts/ui/ui_kit.gd`, the icon sheet through `tools/build_art.gd`).
