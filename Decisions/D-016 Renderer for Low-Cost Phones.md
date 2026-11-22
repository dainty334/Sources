---
id: D-016
title: "Renderer for low-cost phones"
project: DIVIRUSH
type: decision
status: open
raised: 2026-11-22
tags: [divirush, decision, game-code, android, revision]
---

# D-016 Renderer for low-cost phones

Raised on 2026-11-22 as a game revision, after a review of the game code. Terms follow [[CONTEXT]].

**Question:** The game is set to Godot's Mobile renderer, which needs Vulkan graphics. Many low-cost Android 10 phones have weak or faulty Vulkan support, so the game may fail to start or run slowly on the phones learners use. Godot also has a Compatibility renderer (OpenGL ES 3), made for simple 2D games and older phones. Which renderer should DiviRush use?

**Facts found:**
- `project.godot` sets `renderer/rendering_method="mobile"`.
- DiviRush is a 2D game made of Control nodes, sprites and tweens; it uses no 3D and no special graphics effects.
- The game is meant for Android 10–14 phones and tablets ([[Game Spec]] Platform).
- The first APK ([[D-014 Android Build Setup]]) has not yet been run on a phone.

**Options:**
- Switch to the Compatibility renderer now, for the widest range of phones.
- Keep the Mobile renderer, and switch only if the phone test shows a problem.
- Test both on the oldest phone available, then decide.

**Decision:** (fill when settled; set `status: settled` and add `decided:`)

**Reason:**

**Applies to:** [[Game Spec]] (Platform) and the game repo `D:\LAMBERTO\divi-rush` (`project.godot` through `tools/setup_project.gd`, `export_presets.cfg`).
