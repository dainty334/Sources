---
id: D-022
title: "Main menu home dashboard"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, ui, revision]
---

# D-022 Main menu home dashboard

Raised on 2026-11-23 as a game revision: the researcher asked that the Main menu's look and background be improved, because they were the same as the Start-up menu's, that it lead to the new Trophies and My Records ([[D-023 Trophies and My Records]]), that the screen be clean, and that the title be removed from it. Terms follow [[CONTEXT]].

**Question:** How should the Main menu be laid out and look, now that it also leads to Trophies and My Records?

**Facts found:**
- After [[D-017 Main Menu Look]] and [[D-020 Music and Backgrounds by Area and Episode]], the Main menu had the same blue bubble sky as the Start-up menu, a big logo, the waving DIVIRUSH title, the tagline, a Star pill and four buttons in a list.
- Design guidance for children's apps found on the web (Google, "Designing engaging apps" for kids; Smashing Magazine, "Designing For Kids Is Not Child's Play", 2016) advises shallow, full-screen menus, a large and distinct Play button, and very little text.

**Options:**
- Layout: a home dashboard (progress card, big Play, a grid of icon tiles); a longer list of buttons.
- Background: a candy sky with floating numbers; a peach sunrise with clouds; keep the blue bubbles.

**Decision:** settled by the researcher on 2026-11-23, as recommended, plus the researcher's own request to remove the title:
- **Layout (home dashboard), top to bottom:** a small floating ÷ logo; a white "My progress" card with three counts (Stars earned of 180, Trophies earned of 12, Levels passed of 60); one big Play button that breathes, as in D-017; a 2 × 2 grid of icon tiles: How to Play, Trophies, My Records, Settings; a small Exit button at the bottom, which still asks first ([[D-021 Exit Confirmation]]).
- **No title:** the DIVIRUSH title and the "Quick-tap division!" tagline are removed from the Main menu; the Start-up menu still shows them. *Assumed* by the developer from the request "remove the Title": the small ÷ logo stays.
- **Background:** the Main menu gets its own "candy" sky, soft pink to lavender, with floating numbers 1–10 and ÷ signs; the Start-up, How to Play and Settings screens keep the blue bubble sky.

**Reason:**
- Play stays the biggest and first thing to tap, and every other part of the game is one tap away, as the guidance advises.
- The progress card shows the learner's Stars, Trophies and Levels at a glance, in numbers only.
- A sky of its own makes the Main menu clearly different from the Start-up menu, which was the researcher's complaint.

**Changes:** this replaces the big logo, waving title, tagline, Star pill and button list of [[D-017 Main Menu Look]]; D-017's straight buttons with drawn icons and its breathing Play button stay. It adds Trophies and My Records to the Main menu buttons of [[D-008 Episodes, Difficulty and Scoring]].

**Applies to:** [[Game Spec]] (Screens, Main menu) and the game repo `D:\LAMBERTO\divi-rush` (`scripts/screens/main_menu.gd`, `scripts/ui/sky_background.gd`, the icon sheet through `tools/build_art.gd`).
