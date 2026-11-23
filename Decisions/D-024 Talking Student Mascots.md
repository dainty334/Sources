---
id: D-024
title: "Talking student mascots"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, revision]
---

# D-024 Talking student mascots

Raised on 2026-11-23 as a game revision: the researcher asked that the Main menu be rearranged to look neat, and that a student mascot that talks be added. Terms follow [[CONTEXT]].

**Question:** What should the mascot look like, what should it say, how should it talk, and where should it sit on the Main menu?

**Facts found:**
- The Main menu ([[D-022 Main Menu Home Dashboard]]) had a small floating ÷ logo, the "My progress" card, a large empty gap, then Play, the four tiles and Exit.
- The vault had no earlier decision about a mascot or a voice. A mascot that gives tips is not a storyline, which the pre-proposal rules out.
- Godot can read text aloud with the phone's own text-to-speech voice, but the voice and language depend on the phone, and some low-cost phones have none installed.

**Options:**
- Look: a Grade 4 student; the ÷ logo bubble as a student; an owl student.
- Lines: changing friendly lines; a greeting only; a fact of the day.
- Talking: a speech bubble with a moving mouth; the same plus the phone's voice.
- Layout: the mascot on top; the mascot beside the tiles.
- Student: a girl and a boy; a girl; a boy.
- Names: Divi and Rush; Filipino names; no names.

**Decision:** settled by the researcher on 2026-11-23:
- **Mascots:** two cheerful cartoon Filipino Grade 4 learners in school uniform (white top, blue skirt or shorts) with a backpack, in the game's flat style with thick outlines: **Ana**, a girl, and **Migo**, a boy. They take turns: one appears each time the Main menu opens. (Recommended look; the researcher chose Filipino names, and the developer took the option's example names, Ana and Migo, which can be changed.)
- **Lines:** the mascot greets the learner with its name, then shows short lines that change every few seconds, or at once when the mascot is tapped: encouragement and hints from the learner's progress (Stars earned, the next open Level to try, the next Trophy to aim for) and simple division tips (for example "Dividing is sharing equally!"). (Recommended.)
- **Talking:** the words are typed into a speech bubble letter by letter while the mascot's mouth opens and closes. There is no voice. (Recommended: it works offline on every phone, needs no new files, and is reading practice.)
- **Layout:** the mascot and its speech bubble sit at the top, in place of the logo, then the "My progress" card, Play, the 2 × 2 tiles and Exit, with even, tighter spacing and no big empty gap. (Recommended.)

**Reason:**
- Learners who look like the players, a girl and a boy, make the game friendlier, and taking turns gives every learner someone like them.
- Lines drawn from the learner's own progress point to a next step (a Level or a Trophy), which keeps the hints useful rather than decorative.
- A speech bubble works the same on every phone, unlike a phone's text-to-speech voice.

**Changes:** the small floating ÷ logo of [[D-022 Main Menu Home Dashboard]] is replaced by the mascot; the rest of D-022 stays.

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`scripts/screens/main_menu.gd`, new mascot art through `tools/build_art.gd`).
