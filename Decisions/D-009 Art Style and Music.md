---
id: D-009
title: "Art style and music"
project: DIVIRUSH
type: decision
status: settled
decided: 2026-11-22
tags: [divirush, decision, game-design, art, audio]
---

# D-009 Art style and music

**Decision:**
- **Art style:** flat cartoon. Bright colours, rounded shapes, thick dark outlines, big readable numbers. Drawn as SVG and exported as PNG sprite sheets on a fixed grid (frame size in the file name, for example `bubble_64x64_6f.png`), so the researcher can edit them in Piskel or Clip Studio Paint EX.
- **Music:** the game has background music, not only sound effects.
- **Feel:** the researcher asked that the game not be boring. Screens should move: floating bubbles in the background, bouncing buttons, animated stars, and lively music.

- **Orientation:** portrait only, designed at 1080 × 1920. DiviRush is a single-screen quick-tap game held in one hand; landscape suits side-scrolling, story or map-based games, which DiviRush is not.
- **Music tracks:** three: a calm loop for the menus, a faster loop during play, and a short win jingle on the Level end screen.
- **Settings switches:** Music on/off and Sound effects on/off are separate, plus Vibration on/off.
- **Music source:** original chiptune-style tracks composed in code, so there are no licence issues. They can later be replaced by CC0 music or the researcher's own tracks without code changes.
  - **Changed on 2026-11-23 by [[D-018 Background Music]]:** the three music tracks are now free CC0 recordings (heartade's "Home" and "Picnic", and a Kenney jingle), because the code-made music sounded robotic. The sound effects are still composed in code.
- **Sample:** ![[game-spec-img01.svg]] (Play screen, approved style direction pending the researcher's feedback).

**Applies to:** [[Game Spec]] (Look, sound and controls) and all game assets.
