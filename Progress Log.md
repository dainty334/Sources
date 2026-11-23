---
title: "DIVIRUSH Progress Log"
project: DIVIRUSH
status: reference
tags: [divirush, log]
---

# DIVIRUSH Progress Log

Newest entry first. Each entry records what was done, what was decided, and what is still open.

## 2026-11-23 (Main menu play-first layout raised)

### Done

- The researcher asked for a cleaner Main menu and for drafts. Three arrangements were drawn as phone mockups: A (one hero card), B (play first with a bottom bar) and C (center stage).

### Decided

- [[D-025 Main Menu Play-First Layout]]: B. Count pills and an Exit door along the top, the mascot in the middle with its bubble above, one huge Play, and How to Play, Trophies, My Records and Settings in one bottom bar. At the researcher's request, the mascot's bubble shows only when the mascot is tapped, then fades away.

### Open

- Built D-025 the same day: count pills and a small pink Exit at the top, the mascot floating in the middle with its bubble hidden until tapped, one huge Play, and a white bottom bar with How to Play, Trophies, My Records and Settings. 152 automatic tests pass; the APK was rebuilt.
- The Main menu screenshots (02, 29, 32) could not be taken again: the computer screen was locked or asleep, so the tool saved the same frame many times. They were put back as they were; take them again with the screen on.

## 2026-11-23 (talking mascots raised)

### Done

- Pushed both repos at the researcher's OK. The researcher asked for a neater Main menu and a talking student mascot.

### Decided

- [[D-024 Talking Student Mascots]]: Ana and Migo, Filipino Grade 4 learners in school uniform, take turns at the top of the Main menu; their words are typed into a speech bubble with a moving mouth (no voice): a greeting, hints from the learner's progress, and division tips. The Main menu is spaced evenly with no big gap.

### Built later the same day

- D-024: Ana and Migo were drawn with the art tool (two frames each: smiling and talking) and take turns at the top of the Main menu, typing their lines into a speech bubble while their mouths move; tapping shows the next line. The Main menu is now one centred block with even gaps, and the old logo and its sparkle are gone.
- At the researcher's request, Migo's talking mouth was redrawn plain dark, with no red or pink, because the first drawing looked like lipstick.
- Tests: 5 new automatic tests (152 in all, all passing headless). Screenshots 02 and 29 taken again, and 32 (Migo) added. The APK was rebuilt.

### Open

- The names Ana and Migo were taken from the option's example; the researcher may change them.

## 2026-11-23 (Main menu dashboard, Trophies and My Records raised)

### Done

- Pushed both repos at the researcher's OK.
- The researcher asked for a better Main menu look and background (it matched the Start-up menu), achievements and learner stats built into it, a clean look, and no title on the Main menu. Checked the vault: "achievement" in the manuscript means learning achievement, and Chapter 1 says game records are not a measure of it, so the rewards are called Trophies. Searched the web for design guidance on children's menus and on badges in learning.

### Decided

- [[D-022 Main Menu Home Dashboard]]: a home dashboard on its own candy sky, with no title.
- [[D-023 Trophies and My Records]]: twelve Trophies for progress, accuracy and practice (none for speed), a banner on Level end, and a My Records screen of game records; new terms Trophy and My Records added to [[CONTEXT]].

### Built later the same day

- D-022: the Main menu is now a home dashboard on its own candy sky (pink to lavender, floating numbers 1–10 and ÷ signs), with no title: a small floating logo, a "My progress" card, a big breathing Play button, four icon tiles (How to Play, Trophies, My Records, Settings) and a small Exit. Two new icons were drawn (a Trophy and a bar chart).
- D-023: the twelve Trophies, a "Trophy earned!" banner on Level end, a Trophies screen and a My Records screen. Each play now saves Levels played, correct answers, best streak and time played in `user://save.cfg` (save layout version 2; older saves still load). Trophies already earned by saved bests are given quietly when the game starts.
- Tests: 12 new automatic tests (147 in all, all passing headless). New screenshots 30 (Trophies) and 31 (My Records); 02, 12 and 29 taken again. The APK was rebuilt.

### Open

- *Assumed*: "remove the Title" keeps the small ÷ logo on the Main menu; the researcher may ask to remove it too.
- Try the Trophies and My Records on a phone.

## 2026-11-23 (game code: music, backgrounds and Exit revisions)

### Done

- Pushed both repos (game and vault) at the researcher's OK, so the next work starts a fresh update.
- The researcher asked for different music and design on the Main menu, the level selection and the gameplay, so the game does not repeat, and for a confirmation before Exit. Checked more CC0 music on OpenGameArt.org and downloaded, with the researcher's OK, "Happy Clappy Loop", "Happy Vibes", "Cozy Puzzle In-Game 2" and "Children's Game Music 4 – Activity".

### Decided

- [[D-020 Music and Backgrounds by Area and Episode]]: one track for the Main menu area, one for the selection screens, and one for each Episode during play; the Main menu area keeps its sky, the selection screens get their own, and each Episode gets its own world (day, meadow, sunset, night).
- [[D-021 Exit Confirmation]]: a "Leave DiviRush?" card with Stay and Exit, also for Android Back on the Start-up menu.

- Built D-020: six music loops (made by `tools/convert_audio.sh`, all at the same loudness) and a new `SkyBackground` with six looks, replacing the one bubble sky. Built D-021: a "Leave DiviRush?" card on Exit and on Android Back from the Start-up menu; the "Paused" card now shares its look.
- Tests: 13 new automatic tests (135 in all, all passing headless). The APK was rebuilt (64.8 MB).

### Open

- Listen to the new music and look at the new skies on a phone.

### Later the same day

- The first screenshot runs failed because the computer screen was locked or asleep (the tool saved the same frame many times); those pictures were put back. With the screen on, screenshots 05–28 were taken again with the new skies, and `29_exit_confirm` shows the "Leave DiviRush?" card.

## 2026-11-23 (game code: sound effects revision)

### Done

- The researcher found the click sound robotic in the menus and in a Level. All six sound effects came from the same square-wave code, so all six were replaced.
- Downloaded, with the researcher's OK, Kenney's "Interface Sounds" (CC0, 834.5 KB) and picked one sound for each: tap `select_002`, correct `confirmation_001`, wrong `error_006`, time-up `minimize_006`, Star `glass_001`, pop `drop_002`. The file names in the game stayed the same, so no game code changed.
- `tools/convert_music.sh` became `tools/convert_audio.sh` and now also makes the sound effects (loudness set, peaks limited). `tools/build_audio.gd` was removed: nothing in the game is composed in code any more.
- Tests: 3 new automatic tests (122 in all, all passing headless). The APK was rebuilt.
- Every candidate sound is in the game folder's `build/listen/sfx/` for listening (not part of the game; `build/` is ignored by Git and, through a `.gdignore` file, by Godot).

### Decided

- [[D-019 Sound Effects]]: all six sound effects from Kenney's Interface Sounds; [[D-009 Art Style and Music]] and [[D-018 Background Music]] note the change.

### Open

- Listen to the six sounds in the game and swap any that do not fit (one line each in the tool).
- Credit Kenney's Interface Sounds in the manuscript, with the music credits.

## 2026-11-23 (game code: background music revision)

### Done

- The researcher found the code-made music robotic and asked for better music from the web. Checked free CC0 music on OpenGameArt.org and kenney.nl and confirmed each licence on its page.
- Downloaded, with the researcher's OK, heartade's "Children's Game Music 3 – Home" and "1 – Picnic" and Kenney's "Music Jingles" (CC0). New tool `tools/convert_music.sh` turns them into the game's three OGG files (2.2 MB in all), with smooth loop joins.
- The game now plays "Home" on the menus, "Picnic" during play and a saxophone jingle on a passed Level. The music part of `tools/build_audio.gd` and the old WAV music were removed; the sound effects are unchanged (only the pop's tiny noise burst was made again).
- Tests: 3 new automatic tests (119 in all, all passing headless). The APK was rebuilt.

### Decided

- [[D-018 Background Music]]: menu "Home" and play "Picnic" by heartade, win jingle Kenney saxophone tune 02; [[D-009 Art Style and Music]] notes the change.

### Open

- Listen to the new music on a phone, especially the loop joins and the win jingle (another Kenney tune can be picked in one line of the tool).
- Credit heartade and Kenney in the manuscript (CC0 does not require it, but it is good practice).

## 2026-11-23 (game code: Main menu revision)

### Done

- Checked the Main menu against the other screens at the researcher's request ("make it more exciting and visually align"). Found: the four buttons rock on separate timers and look crooked; the logo is smaller than on the Start-up menu and the tagline is missing; a wide empty band is left at the bottom; the buttons have no icons while the Settings rows do.
- Built [[D-017 Main Menu Look]]: four new icons were drawn with the art tool (play arrow, question mark, gear, door); the Main menu now has a floating logo with a sparkle every 3 s, a title whose letters bounce in and wave, the tagline, a total-Stars pill, and four straight buttons with icons where only Play breathes.
- Tests: 8 new automatic tests (116 in all, all passing headless). Screenshot 02 was taken again; the other screenshots are unchanged. The APK was rebuilt.

### Decided

- [[D-017 Main Menu Look]]: straight, lined-up buttons with drawn icons, only Play breathing; a big floating logo with a sparkle, a waving title and the tagline; a total-Stars pill (earned / 180).

### Open

- See the new Main menu move on a real phone; still open from before: the pause check on a phone, the release keystore and timer tuning.

## 2026-11-23 (game code: Paused card choices)

### Done

- Amended [[D-015 Pause When the App Leaves the Screen]] at the researcher's request: the "Paused" card now has Resume, Restart and Levels buttons, styled like the Level end buttons. Restart plays the Level again from item 1; Restart and Levels save nothing from the stopped play.
- Tests: 2 new automatic tests (108 in all, all passing headless). The APK was rebuilt. New screenshot 28 shows the card with its three buttons.

### Decided

- The three choices on the "Paused" card (D-015 amendment).

### Open

- Screenshot 28 (Paused card) was first taken while the computer screen was locked, which the screenshot tool cannot draw; it was taken again with the screen on and now shows all three buttons.
- Check the pause on a real phone; still open from before: the release keystore and timer tuning.

## 2026-11-22 (game code: pause and renderer revisions)

### Done

- Built [[D-015 Pause When the App Leaves the Screen]]: when the app leaves the screen during a Level, the timer and the wait between items stop, and a "Paused" card hides the item and bubbles. "Go on" brings them back with the seconds that were left. There is no Pause button.
- Built [[D-016 Renderer for Low-Cost Phones]]: the game now uses Godot's Compatibility renderer (OpenGL ES 3). All screenshots were taken again and look the same; the rebuilt APK asks for OpenGL ES 3.0 and no longer needs Vulkan.
- Tests: 6 new automatic tests for pausing (106 in all, all passing headless). New screenshot in the game repo: 28 Play screen with the "Paused" card.

### Decided

- [[D-015 Pause When the App Leaves the Screen]] and [[D-016 Renderer for Low-Cost Phones]], settled earlier today.

### Open

- Check both revisions on a real phone: leave the app mid-item (Home button, a call) and come back; and check the game starts and runs smoothly on the oldest phone available.
- More game revisions from the researcher may follow.
- Still open from before: the release keystore; tune the timers in the tryout.

## 2026-11-22 (game revisions raised)

### Done

- Reviewed the finished game code for risks on real phones. Two revisions were added to the revision list as open decisions; no code changed.

### Decided

- Nothing yet.

### Open

- [[D-015 Pause When the App Leaves the Screen]]: the item timer keeps running when the learner leaves the app.
- [[D-016 Renderer for Low-Cost Phones]]: the Mobile renderer needs Vulkan, which many low-cost Android 10 phones handle poorly.
- More game revisions from the researcher are still to come; they will be settled together.

## 2026-11-22 (game code: first Android APK)

### Done

- Built the first Android APK of the game: `build/DiviRush.apk` in the game repo (58.6 MB, not kept in Git). Package `com.divirush.game`, version 0.1.0, minimum Android 7.0 (covers Android 10–14), target API 36, for arm64 and armv7 phones. It is debug-signed and checked with apksigner. Tests, tools and the test add-on are not inside.
- Set up the build as in [[D-014 Android Build Setup]]: the official Godot 4.7.2 Android export templates (checked by SHA-512), the JDK 17 and Android SDK that came with Unity, and Godot's debug keystore.
- To build again: in the game repo, run Godot with `--headless --path . --export-debug "Android" build/DiviRush.apk`.

### Decided

- [[D-014 Android Build Setup]]: official templates, Unity's JDK and SDK, a debug key for the tryout, and the package name `com.divirush.game`.

### Open

- Install the APK on an Android phone and play it by hand; no phone was connected during this session.
- Make the release keystore (the researcher keeps its password) before the final build.
- Tune the 15 s, 10 s and 7 s timers in the tryout.

## 2026-11-22 (game code: polish)

### Done

- The ☐ of missing-number items is now drawn as a thick rounded box in the text colour, on the item card and the Level cards, instead of the thin stand-in font sign.
- Answer bubbles pick their font size by digits (1, 2 or 3), so 100 fits inside the bubble; checked on screen.
- The best Stars on the Level cards now sit on a small white pill, so gold Stars stand out on the yellow cards.
- An automatic run-through plays every Level of every Episode on Easy, Medium and Hard with the real item banks: every item shows the right number of different bubbles with the answer among them, a perfect play passes, and passing in order opens every Level.
- Tests: 7 new automatic tests (100 in all, all passing headless). All screenshots in the game repo `docs/screenshots/` were taken again to show the new look.

### Decided

- Nothing new.

### Open

- Hand play on a real device is still to do; the run-through checks the rules and items, not how the game feels.
- Still open from before: tune the 15 s, 10 s and 7 s timers in the tryout; build the Android APK and test on a phone.

## 2026-11-22 (game code: Episode 4)

### Done

- Episode 4 (Fact Families) → Easy, Medium and Hard → Levels 1–5 can now be played in the game repo. It opens after Episode 3 Easy Level 5 is passed and no longer shows "Coming soon". All four Episodes are now built.
- Its Levels follow [[D-013 Episode 4 Levels and Missing-Number Items]]: each Level has one fact from every table ÷1–÷10, 50 different facts in all. Level 1 hides the quotient, Level 2 the divisor, Level 3 the dividend, Level 4 mixes 5 divisor and 5 dividend items, Level 5 mixes 2 quotient, 4 divisor and 4 dividend items. The cards show "÷ ?", "÷ ☐", "☐ ÷", "Mix ☐" and "Mix".
- New wrong-answer rules in `WrongAnswers` for a hidden dividend: far multiples (Easy), nearest multiples (Medium) and neighbouring facts (Hard), all inside 1–100. Hidden-divisor items use the [[D-011 Medium and Hard Wrong Answers]] rules with the quotient as the fact-family partner. The Episode 1–3 item banks did not change.
- Tests: 16 new automatic tests for the missing-number rules and the Episode 4 item bank (93 in all, all passing headless). A code review found two small style points (whole-number division warnings, one untyped variable), both fixed.
- New screenshots in the game repo `docs/screenshots/`: 24 Episode select with Episode 4 open, 25 Episode 4 Level select, 26 Easy Play with a missing divisor (25 ÷ ☐ = 5), 27 Hard Play with a missing dividend (☐ ÷ 8 = 8 with 80, 64, 72 and 56).

### Decided

- Nothing new; the build follows D-013.

### Open

- The ☐ is drawn by Godot's fallback font, a little thinner than Fredoka's digits; it may need a thicker drawn box.
- A 3-digit bubble (100, from ☐ ÷ 10 = 10) has not been seen on screen yet; 2-digit bubbles fit well.
- Not every Episode 4 Level has been played by hand yet.
- Still open from before: the gold Stars are hard to see on the yellow Level cards; tune the 15 s, 10 s and 7 s timers in the tryout; test on an Android phone.

## 2026-11-22 (design: Episode 4 decisions)

### Done

- Settled the Episode 4 (Fact Families) design before building it. No game code changed.
- Updated [[Game Spec]] (Difficulty, Items, Open items) and pointed the "Still open" line of [[D-011 Medium and Hard Wrong Answers]] to the new decision.

### Decided

- [[D-013 Episode 4 Levels and Missing-Number Items]]: one hidden kind per Level (L1 missing quotient, L2 missing divisor, L3 missing dividend, L4 divisor and dividend 5 / 5, L5 quotient, divisor and dividend 2 / 4 / 4); one fact from each table ÷1–÷10 per Level, with no fact repeated across the five Levels.
- A hidden divisor uses the D-011 wrong-answer rules, with the quotient as the fact-family partner. A hidden dividend uses multiples of the divisor inside 1–100: far multiples for Easy, nearest multiples for Medium, neighbouring facts for Hard, and the nearest unused multiples when too few.
- Working values: the Level card labels "÷ ?", "÷ ☐", "☐ ÷", "Mix ☐" and "Mix"; random picks with a fixed seed.

### Open

- Build Episode 4 in the game repo: the hidden-dividend rules in `WrongAnswers`, the Episode 4 item bank, tests and screenshots.
- Check that the Fredoka font shows ☐ on the item card and the Level cards, and that 2- and 3-digit answers (up to 100) fit in the bubbles.
- Still open from before: the gold Stars are hard to see on the yellow Level cards; tune the 15 s, 10 s and 7 s timers in the tryout; test on an Android phone; not every Level has been played by hand.

## 2026-11-22 (game code: Episode 3)

### Done

- Episode 3 (Hard Facts: ÷6, ÷7, ÷8, ÷9) → Easy, Medium and Hard → Levels 1–5 can now be played in the game repo. It opens after Episode 2 Easy Level 5 is passed, as set in [[D-008 Episodes, Difficulty and Scoring]], and no longer shows "Coming soon".
- Its Levels follow [[D-012 Episode 3 Levels]]: Level 1 = ÷6, Level 2 = ÷7, Level 3 = ÷8, Level 4 = ÷9, each with answers 1–10; Level 5 = mixed review of 2 ÷6, 3 ÷7, 3 ÷8 and 2 ÷9 facts. Every item has its Easy, Medium and Hard wrong answers by the [[D-010 Game Code Foundations]] and [[D-011 Medium and Hard Wrong Answers]] rules. The largest dividend is 90.
- The Level cards show "÷6" to "÷9" and "Mix" with no labels of their own. The Episode 1 and 2 item banks did not change.
- Tests: 6 new automatic tests for the Episode 3 item bank (77 in all, all passing headless).
- New screenshots in the game repo `docs/screenshots/`: 21 Episode select with Episode 3 open, 22 Episode 3 Level select, 23 Episode 3 Play on Hard (72 ÷ 8 with 9, 8, 10 and 7).

### Decided

- [[D-012 Episode 3 Levels]]: Levels 1–4 use ÷6, ÷7, ÷8, ÷9 in counting order; Level 5 mixes 2 ÷6, 3 ÷7, 3 ÷8 and 2 ÷9 facts, giving more practice to ÷7 and ÷8; the Level cards need no labels of their own.

### Open

- Episode 4 (Fact Families) is next: its Level plan, which number is hidden (divisor or dividend), the wrong-answer range for hidden dividends up to 100, and how the ☐ shows on the item card.
- Not every Episode 3 Level has been played by hand yet; it was checked through automatic tests of every item and screenshots.
- Still open from before: the gold Stars are hard to see on the yellow Level cards (seen again in screenshot 22); tune the 15 s, 10 s and 7 s timers in the tryout; test on an Android phone.

## 2026-11-22 (game code: Episode 2)

### Done

- Episode 2 (Middle Facts: ÷3, ÷4) → Easy, Medium and Hard → Levels 1–5 can now be played in the game repo. It opens after Episode 1 Easy Level 5 is passed, as set in [[D-008 Episodes, Difficulty and Scoring]], and no longer shows "Coming soon".
- Its Levels follow [[D-011 Medium and Hard Wrong Answers]]: Level 1 = ÷3, Level 2 = ÷4, Level 3 = both with answers 1–5, Level 4 = both with answers 6–10, Level 5 = mixed review of 5 ÷3 and 5 ÷4 facts. Every item has its Easy, Medium and Hard wrong answers by the [[D-010 Game Code Foundations]] and D-011 rules.
- Level cards can now carry their own label. Episode 2 Levels 3 and 4 show "Mix 1–5" and "Mix 6–10", so they are not confused with the Level 5 "Mix". Episode 1 is unchanged.
- Tests: 6 new automatic tests for the Episode 2 item bank (71 in all, all passing headless).
- New screenshots in the game repo `docs/screenshots/`: 18 Episode select with Episode 2 open, 19 Episode 2 Level select, 20 Episode 2 Play (Level 3).

### Decided

- Working value: the card labels "Mix 1–5" and "Mix 6–10" for Episode 2 Levels 3 and 4. They can be reworded without a new decision.

### Open

- Episode 4 Level plan, and the wrong-answer range for items that hide the dividend.
- Not every Episode 2 Level has been played by hand yet.

## 2026-11-22 (game code: Medium and Hard for Episode 1)

### Done

- Episode 1 (Easy Facts) → Medium → Levels 1–5 and → Hard → Levels 1–5 can now be played in the game repo (`D:\LAMBERTO\divi-rush`). They follow the unlock rules in [[D-008 Episodes, Difficulty and Scoring]]: passing Easy Level 5 opens Medium, passing Medium Level 5 opens Hard. Medium and Hard no longer show "Coming soon".
- Medium shows 4 bubbles and a 10 s timer; Hard shows 4 bubbles and a 7 s timer. The same 5 Levels and facts as Easy are used; only the bubbles, wrong answers and timer change.
- Every Episode 1 item now stores 3 Medium and 3 Hard wrong answers, made by the rules in [[D-011 Medium and Hard Wrong Answers]]. The Easy wrong answers and the Level 5 mix did not change.
- Play screen: the 4 bubbles of Medium and Hard overlapped; they now sit in an even 2 × 2 square with a gap between them.
- Tests: 21 new automatic tests (65 in all, all passing headless) for the Medium and Hard wrong-answer rules, the Episode 1 item bank, Medium and Hard play (4 choices, 10 s and 7 s, time-out counts as wrong), unlocking, and saving each Difficulty's bests on its own.
- New screenshots for Chapter III in the game repo `docs/screenshots/`: 13 Difficulty select with Medium open, 14 Medium Level select, 15 Medium Play, 16 Hard Level select, 17 Hard Play.

### Decided

- [[D-011 Medium and Hard Wrong Answers]]: Medium wrong answers are the closest numbers first (1 away, then 2, then 3) inside 1–20. Hard wrong answers are the fact family answer (the divisor) and then answer −1 and +1. When too few exist, the nearest unused numbers fill the gap. Episode 2's Levels are ÷3; ÷4; both with answers 1–5; both with answers 6–10; and a mixed review of 5 ÷3 and 5 ÷4 facts.

### Open

- Episode 4 (Fact Families) Level plan, and the wrong-answer range for its missing-number items that hide the dividend (up to 100).
- On the Level select screen the earned gold Stars are hard to see on the yellow Level cards (seen in the Easy, Medium and Hard screenshots). A design check is needed.
- The Medium and Hard screens were checked through screenshots and automatic tests of every item; not every one of the 10 new Levels has been played by hand yet.
- Still open from before: tune the 15 s, 10 s and 7 s timers in the tryout; test on an Android phone; the package name and app version are working values.

## 2026-11-22 (game code: first playable slice)

### Done

- Built the first playable slice of the game in the game repo (`D:\LAMBERTO\divi-rush`, Godot 4.7.2): Start-up menu → Main menu → Episode select → Difficulty select → Level select → Play → Level end. Episode 1 (Easy Facts) → Easy → Levels 1–5 can be played; Episodes 2–4, Medium and Hard show with a lock and follow the unlock rules in [[D-008 Episodes, Difficulty and Scoring]].
- Main menu: Play, How to Play (short rules screen), Settings (Music, Sound effects and Vibration on/off, saved), Exit.
- Play screen as in the approved style sample: top bar, 10 progress dots, timer bar (green → yellow → red), streak badge, item card and 3 answer bubbles on Easy. Bubbles pop green with a sparkle when correct and turn red and shake when wrong; a time-out shows the correct answer.
- Level end: Stars fill one by one, with a "New best!" tag; each Level's best Stars, score and time are saved on the device.
- Game rules (points, streak bonus, Stars, Pass, unlocking, time-out, saving) are plain GDScript classes with 44 automatic tests (GUT); all pass headless.
- Art: flat cartoon SVG drawings with matching PNG sprite sheets on a fixed grid (frame size in the file name), editable in Piskel or Clip Studio Paint EX. Font: Fredoka (OFL).
- Music: three original chiptune tracks (menu loop, play loop, win jingle) and six sound effects, composed in code, on separate Music and SFX audio buses.
- Android export preset (portrait, vibration permission) added.
- Screenshots of every screen for Chapter III: game repo `docs/screenshots/` (01 Start-up menu to 12 Level end).

### Decided

- [[D-010 Game Code Foundations]]: item banks as Godot Resource (`.tres`) files; save file `user://save.cfg` (ConfigFile); GUT for tests; Fredoka font; Levels 1–4 use one divisor each and Level 5 is mixed; the streak bonus starts on the 4th correct answer in a row; best time comes only from passed plays. This settled the last OPEN item in [[Game Spec]].

### Open

- Medium and Hard wrong answers: [[D-008 Episodes, Difficulty and Scoring]] says "near" and "near and look-alike"; the exact rule (how near, which look-alikes) is not yet set.
- Episode 2 has only two divisors (÷3, ÷4), so "Levels 1–4 each use one divisor" ([[D-010 Game Code Foundations]]) does not fit it; its Level contents need a decision. Episode 3 fits the pattern; Episode 4 (Fact Families) also needs its own Level plan.
- The Android package name (`com.divirush.game`) and app version are working values.
- The game has been run on a PC only; it still needs a test on an Android phone (vibration, notch margins, sound).

## 2026-11-22

### Done

**Vault setup**
- Imported the source documents as notes: [[Chapter 1 - Introduction (Unrevised)]], [[Pre-Proposal - Division Duel (Final)]], [[Survey Tally (Final)]], [[Manuscript Outline - BSIT (Table of Contents)]] and [[Guidelines - Writing Chapters 1-3]].
- Sorted notes into `Final/`, `Guidelines/`, `Manuscript/`, `Templates/` and `attachments/`.
- Wrote `AGENTS.md` (with `CLAUDE.md` importing it): layout, note status, writing steps, commit rules and source conflicts.
- Set Obsidian options: attachments folder, new notes in `Manuscript/`, templates folder, links update on rename.
- Initialized this vault as the Sources repo (`dainty334/Sources`) with 5 commits on `main`. A `.gitignore` leaves out `.obsidian/workspace.json` and `.trash/`.

**Chapter I**
- Wrote [[Chapter 1 - Introduction (Revised Draft)]] following the BSIT outline and the Chapters 1–3 guide.
- Addressed the adviser comments in the unrevised draft: removed the tools sentence from Scope, removed the repeated users line from Limitations, and added a placeholder for the specific excluded topics.
- Added an inverted-pyramid Project Context (global, national, local), four problems matched in order to four SMART objectives, and a Bibliography.
- Verified five sources from 2020–2026 (APA 7): DepEd MATATAG FAQ (2024), TIMSS 2019 (Mullis et al., 2020), PISA 2022 Philippines (OECD, 2023), UNESCO GEM Report (2023), Wang et al. (2022).
- Exported the chapter to Word: `Manuscript/Chapter 1 - Introduction (Revised).docx` (10 pages).

**Second-brain structure**
- Added `Decisions/` with D-001 to D-005 settled and [[D-006 Survey Evidence for Division]] open. These replace the conflict list in `AGENTS.md`.
- Added [[Game Spec]] in `Design/` as the single source of truth for game behaviour, with undecided values marked OPEN.
- Added `Sources/` with one verified note per Chapter I reference.
- Added `Decision` and `Source` templates, and described the new folders and statuses in `AGENTS.md`.

**Vault tooling**
- Saved the Chapter I prompt rules as [[Writing Rules]] for all chapters.
- Added `tools/build-docx.js` (Word export in the D-005 format) and `tools/check-vault.js` (links, frontmatter, decisions, verified citations, read-only `Final/`).
- Added a versioned pre-commit hook in `.githooks/` that runs the check. Tested: it catches bad status, broken links, unverified citations, out-of-range years and staged `Final/` edits.

**Chapter I placeholders**
- Filled 6 of the 11 placeholders: school location, learning setting, survey grade levels, items per level (10), division range (divisors and quotients 1–10), and excluded topics.
- Based the division range on the DepEd MATATAG Mathematics curriculum guide and added [[Department of Education (n.d.) - MATATAG Mathematics Curriculum Guide]] to `Sources/` and the Bibliography.
- Recorded the range and level length as [[D-007 Division Range and Level Length]] and updated [[Game Spec]].

**Episodes and game rules**
- Settled [[D-008 Episodes, Difficulty and Scoring]]: four division-fact Episodes (Easy Facts, Middle Facts, Hard Facts, Fact Families), each with Easy, Medium and Hard Difficulties of five Levels (60 Levels). It supersedes the level structure in [[D-003 Gameplay Design]].
- Set the Difficulty table (3 or 4 bubbles; 15 s, 10 s and 7 s timers), Star pass rule (8, 9, 10 correct), unlocking, time-out, points with speed and streak bonuses, per-Level best saves, and game feel.
- Started the glossary [[CONTEXT]] and pointed to it from `AGENTS.md`.
- Rewrote [[Game Spec]] and Chapter I Purpose, Objectives and Scope to match. Only the data file format is still OPEN.

**Chapter II**
- Saved [[Chapter II Writing Rules]] (2015–2026 sources, 30+ sources, 10+ pages).
- Verified 38 sources by opening each one, recorded in [[Chapter II Source Matrix]]: 33 dated 2015–2026 and 5 undated product pages or reports.
- Built [[Related Projects Comparison]] with 6 apps, including the Philippine Mathplus apps.
- Drafted [[Chapter II Draft 2026-11-22]]: about 5,330 words; the body fills 20 Word pages. Anchor theory: retrieval practice.
- Started [[Open Questions]] with a Chapter II section.
- Saved [[Chapter II Draft 2026-11-22 v2]] with three related projects (Times Tables Rock Stars, XtraMath, Mathplus) and [[Related Projects Comparison 2026-11-22 v2]]. v2 cites 34 sources, 30 of them dated 2015–2026; the body fills 19 Word pages.
- Saved [[Chapter II Draft 2026-11-22 v3]]: 1–2 sentences per cited source, body about 3,130 words on pages 1–13 (10–15 page rule). Added the amendment to [[Chapter II Writing Rules]].
- Saved [[Chapter II Draft 2026-11-22 v4]]: only the outline's two sections, no subsection headings; body on pages 1–12.
- Tooling: the vault check reads `source_years` per note and accepts a `source-matrix` note; the Word export now builds tables and leaves APA brackets in the bibliography unhighlighted.

**Game repo** (`D:\LAMBERTO\divi-rush`, `dainty334/DiviRush`)
- Added a project guide and project settings in two commits on `main` (`98334ce`, `f49ba2e`). The settings give access to this vault and turn off co-author lines.

### Decided

- **Title:** DIVIRUSH: An Adaptive Quick-Tap Educational Game for Enhancing Grade 4 Learner's Division Fact Recall. The pre-proposal title *Division Duel* is superseded.
- **Language:** GDScript.
- **Gameplay:** quick-tap answers with a countdown timer, running score and saved best score/time, across 15 levels: Easy (1–5), Medium (6–10), Hard (11–15). Harder levels unlock by performance rules.
- **Chapter I:** no development tools listed in Scope; only topic-neutral survey items used as local evidence; APA 7; completion period November–December 2026.
- **Manuscript format:** US Letter, 1.5 in left margin, 1 in top/right/bottom, Times New Roman 12 pt, double-spaced.
- **Commits:** rules for both repos are in `AGENTS.md` under "Git commits".

### Open

- Chapters I and II are accepted for now. Both will be revised later after adviser review; use [[Chapter 1 - Introduction (Revised Draft)]] and [[Chapter II Draft 2026-11-22 v4]] as the current versions.

- Fill the 5 remaining placeholders in [[Chapter 1 - Introduction (Revised Draft)]]: dated observation, survey date, selection method, and local evidence for Problems 1 and 4.
- Survey conflict: [[Survey Tally (Final)]] asks about reading comprehension, so there is no local evidence yet for division difficulty.
- Tell the adviser that the 15-level, three-stage structure is now four Episodes with three Difficulties each.
- Tune the 15 s, 10 s and 7 s timers in the tryout with Grade 4 learners.
- Chapter II: confirm the anchor theory with the adviser, add the 6 screenshots, and work through [[Open Questions]]. Chapters III–IV are not started.
- Neither repo is pushed to GitHub yet.
