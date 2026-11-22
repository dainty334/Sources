---
id: D-002
title: "Programming language"
project: DIVIRUSH
type: decision
status: settled
decided: 2026-11-22
tags: [divirush, decision]
---

# D-002 Programming language

**Decision:** The game is written in **GDScript** on Godot 4.7 (Mobile renderer).

**Replaces:** the C# mention in [[Chapter 1 - Introduction (Unrevised)]].

**Reason:** Matches the software specification in [[Pre-Proposal - Division Duel (Final)]].

**Applies to:** all code in the game repo `D:\LAMBERTO\divi-rush`, and Chapter III when it describes the technologies.

**Update 2026-11-22, code comments:** the researcher asked that every line of game code carry a comment, in basic English, so the code is easy to understand. Each function also starts with a comment saying what it is for. Files Godot generates (`.tscn`, `.tres`, `.import`, `project.godot`) are left as generated. The rule is in the game repo's project guide.
