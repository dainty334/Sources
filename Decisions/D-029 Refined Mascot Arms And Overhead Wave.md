---
id: D-029
title: "Refined mascot arms and overhead wave"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-24
decided: 2026-11-24
tags: [divirush, decision, game-code, art, revision]
---

# D-029 Refined mascot arms and overhead wave

Raised on 2026-11-24 as a game revision: the researcher asked for the mascot art to be fixed further, after [[D-028 Balanced Mascots With Five Fingers]]. Terms follow [[CONTEXT]].

**Question:** How should Ana and Migo's arms, hands and uniforms be drawn, and how should the wave look?

**Facts found:**
- Since D-028, the arms are straight tubes and the five fingers are small next to them.
- While waving, the whole straight arm turned about 140 degrees at the shoulder, so the wave looked stiff.

**Decision:** settled on 2026-11-24 with the art fix the researcher asked for (game commit `d4f721d`):
- **Arms and hands:** each arm is one smooth outline from the sleeve around a five-finger hand. The arm tapers slightly towards the wrist. A resting hand is drawn from the side, with the fingers loosely together.
- **Uniforms:** the top, sleeves, straps and collar were redrawn to sit cleanly on the balanced body.
- **Overhead wave:** on a tap, the right arm lifts above the head (about 147 degrees). The elbow bends and the forearm swings from the elbow three times, while the shoulder stays still. Then the arm lowers and straightens back to its idle swing. A white sleeve is drawn between the shirt and the moving arm, so no gap shows.

**Working choices** (the developer's, may be tuned):
- The bent arm uses a shared sheet of 19 pictures, `mascot_wave_210x330_19f`, from a straight elbow to a fully bent one. Ana and Migo share it, because their skin and sleeves are the same.
- The shoulder turning points moved to where the sleeve meets the shirt: (76, 204) and (224, 204) in the art plan.
- The raise takes 0.35 seconds and the lowering 0.38 seconds.

**Reason:**
- Shaped arms and bigger, clearer hands read as a real Grade 4 classmate on a phone screen.
- Waving from the elbow with the hand above the head is how children wave hello, so it is friendlier and easier to see.

**Changes:** this changes the drawing and the wave of [[D-028 Balanced Mascots With Five Fingers]]. The height, the balance, the five fingers, the outfits and the other moves stay.

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`tools/build_art.gd`, `scripts/ui/sprite_sheet.gd`, `scripts/ui/mascot.gd`).
