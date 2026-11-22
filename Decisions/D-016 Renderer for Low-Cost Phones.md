---
id: D-016
title: "Renderer for low-cost phones"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-22
decided: 2026-11-22
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

**Decision:** settled by the researcher on 2026-11-22: **switch to the Compatibility renderer now** (OpenGL ES 3).

**Reason:**
- Compatibility is Godot's renderer for simple 2D games and older phones, so it runs on the widest range of low-cost Android 10 phones.
- DiviRush uses no 3D and no graphics effects that need the Mobile renderer, so the look should not change; the screenshots are taken again after the switch to check this.
- The switch is one project setting, so it can be undone if the phone test shows a reason.

**Applies to:** [[Game Spec]] (Platform) and the game repo `D:\LAMBERTO\divi-rush` (`project.godot` through `tools/setup_project.gd`, `export_presets.cfg`).
