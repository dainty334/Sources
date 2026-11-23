---
id: D-027
title: "Bigger mascots with more moves"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, art, revision]
---

# D-027 Bigger mascots with more moves

Raised on 2026-11-23 as a game revision: the researcher asked for more animation for the mascot, and for its art to be fixed because it was too small. Terms follow [[CONTEXT]].

**Question:** How big should Ana and Migo be, what should change in their drawing, and which extra moves should they get?

**Facts found:**
- Since [[D-026 Full-Body Moving Mascots]], the mascot is 520 pixels tall on a 1080 × 1920 screen, under a 190-pixel space kept empty for the speech bubble, with empty sky above it and a gap above Play.
- Its arms and legs are thin next to its big head, and it only breathes, sways, waves on a tap and moves its mouth while talking.

**Decision:** settled by the researcher on 2026-11-23:
- **Size:** about 1.5 times bigger, about 780 pixels tall, filling the middle of the Main menu (recommended). The speech bubble no longer keeps its own empty space: when the mascot is tapped, it floats over the sky above the head.
- **Drawing:** a chunkier body, with thicker arms and legs and a wider top (recommended); a pink backpack peeking out behind the shoulders, matching the straps; more face detail: a shine on the hair, and eyebrows that lift while talking.
- **More moves:** blinking every few seconds (recommended); nodding and tilting the head a little while talking; the arms swinging a little at the sides when idle. Breathing, swaying, the wave on a tap and the moving mouth stay.
- **Special moment:** the mascot drops in with a little bounce when the Main menu opens (recommended). No hop on a tap and no cheer when Play is tapped.

**Working choices** (the developer's, may be tuned): the mascot is drawn at its new size, so it stays sharp; the head is split into layers (the face, the eyes open or closed, the eyebrows, the mouth closed or open), so the eyes can blink and the eyebrows can lift on their own; blinks come at random every 2 to 5 seconds; the waving arm stops its idle swing while it waves.

**Reason:**
- A bigger, sturdier mascot is easier for Grade 4 learners to see and reads as a friendly classmate, not a small sticker.
- Small, frequent moves such as blinking and arm swings make the mascot feel alive without pulling the eye away from Play.

**Changes:** this replaces the size and the 190-pixel bubble space of [[D-026 Full-Body Moving Mascots]], and adds to its drawing and moves. The outfit, the turns, the lines and the bubble that shows only on a tap stay.

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`tools/build_art.gd`, `scripts/ui/sprite_sheet.gd`, `scripts/ui/mascot.gd`, `scripts/screens/main_menu.gd`).
