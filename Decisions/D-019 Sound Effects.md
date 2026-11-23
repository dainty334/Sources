---
id: D-019
title: "Sound effects"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-23
decided: 2026-11-23
tags: [divirush, decision, game-code, audio, revision]
---

# D-019 Sound effects

Raised on 2026-11-23 as a game revision, right after [[D-018 Background Music]]: the researcher found the click sound robotic, both in the menus and in a Level. Terms follow [[CONTEXT]].

**Question:** Which sounds should replace the code-made sound effects, and from where?

**Facts found:**
- The game has six sound effects ([[D-009 Art Style and Music]]): tap (every button, and the Start-up menu), correct and wrong (tapping a bubble in a Level), time-up, Star (each Star at Level end, a little higher each time) and pop (the bubbles bursting after each item).
- All six were made by the same code from square and triangle waves, so all six had the robotic sound, not only the tap. In a Level, tapping a bubble plays correct or wrong, not the tap.
- Free CC0 packs checked on 2026-11-23 (licences confirmed on their pages and in the licence file): Kenney's "Interface Sounds" (2020, 100 sounds: clicks, confirmations, errors, drops, glass, plucks; 834.5 KB), Kenney's older "UI Audio" (51 clicks, switches and rollovers; 1.4 MB) and "87 Clickety Clips" (clicks only; 3.8 MB). OpenGameArt.org.

**Options:**
- Which sounds: all six from one pack; the tap and pop only; the tap only.
- Pack: Kenney Interface Sounds; Kenney UI Audio; 87 Clickety Clips.
- Choosing: the developer picks and the researcher can swap; the researcher picks first.

**Decision:** settled by the researcher on 2026-11-23, all as recommended: **replace all six with sounds from Kenney's Interface Sounds**, picked by the developer, with every candidate kept for the researcher to listen to and swap.

| Game sound | Kenney sound | Why |
|---|---|---|
| tap | `select_002` | 0.04 s, short and soft |
| correct | `confirmation_001` | 0.29 s, rises, warm |
| wrong | `error_006` | 0.5 s, low and falling, gentle rather than harsh |
| time-up | `minimize_006` | 0.38 s, low falling swoosh, unlike the wrong sound |
| Star | `glass_001` | 0.28 s glassy ring; the game raises its pitch for each Star |
| pop | `drop_002` | 0.19 s water drop, for a bubble |

**How it is made** (the developer's working choices):
- `tools/convert_audio.sh` (which replaces `tools/convert_music.sh` and now makes the music and the sound effects) takes each sound out of the downloaded zip, sets its loudness, and saves it as a 16-bit mono WAV at 44,100 samples per second, with the same file names as before, so the game code did not change.
- Loudness: the tap is the quietest (about -16 dB on average), correct the loudest (-12 dB); a limiter holds every peak at -1 dB.
- `tools/build_audio.gd`, which made the code-made sounds, was removed, so it cannot overwrite the new ones.
- The sounds were picked by their kind, length and measured shape; the developer could not listen to them, so the researcher should listen and may swap any one (one line in the tool).

**Reason:**
- Recorded sounds are warmer and less robotic than code-made square waves.
- One pack for all six keeps the sounds matching each other, and the same maker (Kenney) made the win jingle.
- CC0 keeps the D-009 promise of no licence issues.

**Credits:** Kenney (www.kenney.nl), "Interface Sounds", CC0, https://kenney.nl/assets/interface-sounds.

**Applies to:** [[Game Spec]] (Look, sound and controls) and the game repo `D:\LAMBERTO\divi-rush` (`assets/audio/sfx/`, `tools/convert_audio.sh`, `scripts/autoloads/audio_manager.gd`).
