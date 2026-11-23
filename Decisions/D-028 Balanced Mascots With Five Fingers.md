---
id: D-028
title: "Balanced mascots with five fingers"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, art, revision]
---

# D-028 Balanced mascots with five fingers

Raised on 2026-11-23 as a game revision: the researcher asked whether the mascot could have five fingers, and for the legs, body and head to be balanced for both characters. Terms follow [[CONTEXT]].

**Question:** How should Ana and Migo's head, body and legs be balanced, and how should their five-finger hands look?

**Facts found:**
- Since [[D-027 Bigger Mascots With More Moves]], the mascot is about 780 pixels tall, but the head is almost as tall as the body and the legs are short: about 2.8 heads tall in all, so it looks top-heavy.
- The hands are plain round balls with no fingers.

**Decision:** settled by the researcher on 2026-11-23, all three recommended answers:
- **Balance:** a cartoon kid about 3.5 heads tall. The head is about 15% smaller, the body longer and the legs clearly longer. The total height stays about 780 pixels.
- **Hands:** five fingers. Hands at the sides show five fingers held loosely together; the waving hand opens wide with all five fingers spread.
- **Builds:** Ana and Migo share the same height and build; only hair, outfit and details differ.

**Working choices** (the developer's, may be tuned): the open waving hand is its own picture, shown only while the arm waves; the face, the speech bubble's place, the shoulders and the arm turning points move to fit the new body.

**Reason:**
- A less top-heavy body reads as a real Grade 4 classmate while staying cute and friendly.
- Five fingers look complete, and an open hand makes the wave clear.

**Changes:** this changes the drawing of [[D-027 Bigger Mascots With More Moves]] (proportions and hands). The size, outfit, backpack, moves, turns and lines stay.

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`tools/build_art.gd`, `scripts/ui/sprite_sheet.gd`, `scripts/ui/mascot.gd`).
