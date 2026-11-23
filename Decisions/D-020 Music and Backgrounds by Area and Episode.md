---
id: D-020
title: "Music and backgrounds by area and Episode"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, audio, ui, revision]
---

# D-020 Music and backgrounds by area and Episode

Raised on 2026-11-23 as a game revision: the researcher asked that the Main menu, the level selection and the gameplay each have different background music and design, so the game feels better and does not repeat. Terms follow [[CONTEXT]].

**Question:** How should the music and the background change across the screens?

**Facts found:**
- Before this decision, one music track ("Home", [[D-018 Background Music]]) played on seven screens: Start-up, Main menu, Episode select, Difficulty select, Level select, Settings, and Level end after the jingle. Every Level played the same track ("Picnic").
- Every screen had the same background: a blue sky with white floating bubbles ([[D-009 Art Style and Music]]).
- Music that changes on every screen would switch on every tap through Main menu → Episode → Difficulty → Level, four times in a few seconds, which can sound choppy.
- More free CC0 music checked on 2026-11-23 on OpenGameArt.org (licences confirmed on each page): "Happy Clappy Loop" by OwlishMedia (piano, made to loop, 17 s), "Happy Vibes" by Ruskerdax (cute island feel, loopable, 46 s), "Cozy Puzzle In-Game 2" by MintoDog (brass, 90 BPM, loopable, 128 s), "Children's Game Music 4 – Activity" by heartade (shakers and woodblocks, 52 s), plus "Cozy Puzzle Title", "Kindy Song" and "Party" (not chosen). "Indie Meditations" was left out because it is CC-BY, not CC0.

**Options:**
- Music: by area plus one track per Episode for play; a different track on every screen; three areas only.
- Backgrounds: an area look plus a world for each Episode; different colours on every screen; Episode worlds only.

**Decision:** settled by the researcher on 2026-11-23, all as recommended.

Music, by area, and by Episode during play:

| Where | Track | By |
|---|---|---|
| Main menu area: Start-up, Main menu, How to Play, Settings | "Happy Clappy Loop" (cheerful piano) | OwlishMedia |
| Selection area: Episode, Difficulty and Level select; Level end after the win jingle | "Children's Game Music 3 – Home" (piano, flute, strings) | heartade |
| Play, Episode 1 | "Children's Game Music 1 – Picnic" (saxophone, vibraphone, strings) | heartade |
| Play, Episode 2 | "Happy Vibes" (cute island feel) | Ruskerdax |
| Play, Episode 3 | "Cozy Puzzle In-Game 2" (brass, 90 BPM) | MintoDog |
| Play, Episode 4 | "Children's Game Music 4 – Activity" (shakers, woodblocks) | heartade |
| Level end, passed | Kenney saxophone jingle (as in D-018), then the selection track | Kenney |

Backgrounds:

| Where | Look |
|---|---|
| Main menu area | The blue sky with white bubbles, as now |
| Episode and Difficulty select | Their own teal sky, with floating stars and ÷ signs |
| Episode 1 world (its Level select, Play and Level end) | Day sky with bubbles |
| Episode 2 world | Green meadow, with floating leaves |
| Episode 3 world | Orange-pink sunset, with sparkles |
| Episode 4 world | Purple night, with twinkling stars |

**Working choices** (the developer's, may be tuned): the music changes only when the learner moves to another area or Episode, with the existing 0.6 s cross-fade; tracks that end on a fade get the same smooth 1.5 s loop join as in D-018; "Happy Clappy Loop" is already a seamless loop and is used as it is; every track is set to about the same loudness. The exact sky colours and the shapes of leaves, sparkles and stars follow the flat cartoon style of D-009, and text stays white with a dark outline, so it reads on every sky.

**Reason:**
- Grouping by area keeps the music steady while the learner taps through the menus, yet each part of the game sounds different.
- A different track and world for each Episode means a learner who plays many Levels does not hear and see the same thing all the time, and each Episode feels like a new place.
- All tracks are CC0, so the D-009 promise of no licence issues holds.

**Credits:** OwlishMedia, "Happy Clappy Loop"; Ruskerdax, "Happy Vibes"; MintoDog, "Cozy Puzzle In-Game 2"; heartade (Daniel Soohan Park), "Children's Game Music 1 – Picnic", "3 – Home" and "4 – Activity"; Kenney, "Music Jingles". All CC0, from OpenGameArt.org.

**Applies to:** [[Game Spec]] (Screens; Look, sound and controls) and the game repo `D:\LAMBERTO\divi-rush` (music files, `scripts/autoloads/audio_manager.gd`, the screens, `scripts/ui/bubble_background.gd`, `tools/convert_audio.sh`).
