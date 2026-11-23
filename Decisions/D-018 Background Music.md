---
id: D-018
title: "Background music"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, audio, revision]
---

# D-018 Background music

Raised on 2026-11-23 as a game revision: the researcher found the background music robotic and asked that better music be found on the web. Terms follow [[CONTEXT]].

**Question:** Which music should replace the three chiptune tracks composed in code: the menu loop, the play loop and the win jingle?

**Facts found:**
- [[D-009 Art Style and Music]] made the music original chiptune composed in code, "so there are no licence issues", and already allowed it to be replaced later by CC0 music.
- The game needs three tracks: a calm loop for the menus, a faster loop during play, and a short win jingle on the Level end screen (D-009).
- Free music checked on 2026-11-23, every one licensed CC0 (public domain; no credit needed, though credit is kind):
  - "Children's Game Music" 1–4 by heartade (Daniel Soohan Park), made for an educational children's game with real-sounding instruments: 1 Picnic (saxophone, vibraphone, strings, upbeat), 3 Home (piano, flute, strings, peaceful), 4 Activity (shakers and woodblocks, curious). OpenGameArt.org.
  - "Happy Clappy Loop" by OwlishMedia (cheerful piano) and "Party and Gameover loop" by gilzoide (drums and melody). OpenGameArt.org.
  - "Flowerbed Fields" by Zane Little Music (8-bit chiptune). OpenGameArt.org.
  - "Music Jingles" by Kenney: 85 short jingles, 17 tunes on 5 instruments. kenney.nl and OpenGameArt.org.
- The heartade tracks end on a fading last note, so they do not loop smoothly as they are.

**Options:**
- Music set: heartade's Children's Game Music; Happy Clappy plus Party; Flowerbed Fields chiptune.
- Tracks: menu Home and play Picnic; menu Picnic and play Activity; menu Home and play Activity.
- Win jingle: a Kenney jingle; keep the jingle made in code.

**Decision:** settled by the researcher on 2026-11-23, all as recommended:
- **Menu loop:** "Children's Game Music 3 – Home" by heartade (piano, flute, strings).
- **Play loop:** "Children's Game Music 1 – Picnic" by heartade (saxophone, vibraphone, strings).
- **Win jingle:** Kenney's "Music Jingles", saxophone tune 02 (`jingles_SAX02.ogg`), chosen to match the saxophone in Picnic.
- The sound effects stay as composed in code (D-009). *(Later the same day, [[D-019 Sound Effects]] replaced them with recorded CC0 sounds, and `tools/convert_music.sh` became `tools/convert_audio.sh`.)*

**How it is made** (the developer's working choices):
- The files are kept as OGG in the game (about 2.2 MB in all); the large downloaded WAVs are not kept.
- `tools/convert_music.sh` makes the game files from the downloads with ffmpeg, so they can be made again. Each loop is made smooth: its last 1.5 s fades out while its first 1.5 s fades in, so the end runs into the start with no jump.
- The jingle is made 6 dB louder, so it is as loud as the old one. The loops are about 3 dB quieter than the old music, so the sound effects stand out.
- Jingle tune 02 was picked because its sound rises at the end; the developer could not listen to the jingles, so the researcher should listen and may pick another tune (one line in the tool).

**Reason:**
- Real instruments sound warm and less robotic than code-made square waves.
- One composer for both loops keeps the music consistent, and the set was made for an educational children's game, the same audience as DiviRush.
- CC0 keeps the D-009 promise of no licence issues; credit is still given in the tool, this note and the manuscript.

**Credits:** heartade (Daniel Soohan Park), "Children's Game Music 1 – Picnic" and "3 – Home", CC0, https://opengameart.org/users/heartade. Kenney (www.kenney.nl), "Music Jingles", CC0, https://kenney.nl/assets/music-jingles.

**Applies to:** [[Game Spec]] (Look, sound and controls) and the game repo `D:\LAMBERTO\divi-rush` (`assets/audio/music/`, `scripts/autoloads/audio_manager.gd`, `tools/convert_music.sh`, `tools/build_audio.gd`).
