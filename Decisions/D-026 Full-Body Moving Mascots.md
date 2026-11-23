---
id: D-026
title: "Full-body moving mascots"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, art, revision]
---

# D-026 Full-body moving mascots

Raised on 2026-11-23 as a game revision: the researcher asked for the mascot to be shown full body, and moving if possible. Terms follow [[CONTEXT]].

**Question:** What should Ana and Migo look like from head to toe, how should they move, and how does the Main menu make room for them?

**Facts found:**
- Since [[D-024 Talking Student Mascots]], Ana and Migo are drawn from the head to the chest only (a white school top with backpack straps), in one picture 300 × 340 pixels, with two frames: smiling and talking.
- Since [[D-025 Main Menu Play-First Layout]], the whole picture floats up and down, and the mouth moves only while a line is being typed after a tap.

**Decision:** settled by the researcher on 2026-11-23, all four recommended answers:
- **Outfit:** a school uniform below the white top. Ana wears a navy blue skirt, Migo navy blue shorts; both wear white socks and black school shoes.
- **When nobody taps:** the mascot breathes and sways: the body rises a little and tilts gently from side to side. This replaces the plain float.
- **When tapped:** one arm waves hello while the line is typed, then drops back to the side. The mouth still moves as before.
- **Size:** the mascot grows from 340 to about 520 pixels tall, so the face stays the same size; the empty gaps above and below it on the Main menu shrink. The speech bubble stays above the mascot.

**Working choices** (the developer's, may be tuned): the mascot is drawn as separate parts (body and legs, head, each arm) and moved in code, so the motion is smooth and the picture files stay small, instead of many whole-body frames; the head keeps the two mouth frames; the backpack straps, collar, ribbon and patch stay; blinking and arm swinging when idle are not added.

**Reason:**
- A whole child in a school uniform reads clearly as a fellow Grade 4 learner.
- Gentle movement shows the mascot is alive and can be tapped, without pulling the eye away from Play.
- A wave on the tap answers the learner's touch right away.

**Changes:** this replaces the head-and-chest picture and the plain float of [[D-024 Talking Student Mascots]] and [[D-025 Main Menu Play-First Layout]]. The names, the turns, the lines, the bubble that shows only on a tap, and the rest of the Main menu stay.

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`tools/build_art.gd`, `scripts/ui/sprite_sheet.gd`, `scripts/ui/mascot.gd`, `scripts/screens/main_menu.gd`).
