---
id: D-014
title: "Android build setup"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-22
decided: 2026-11-22
tags: [divirush, decision, game-code, android]
---

# D-014 Android build setup

Settled by the researcher on 2026-11-22, before the first Android APK was built. Terms follow [[CONTEXT]].

**Question:** The [[Game Spec]] output is an Android APK for Android 10–14 phones and tablets. How are the Godot export templates, the Java and Android tools, the signing key and the app's package name set up for the tryout build?

**Options:**
- Export templates: downloaded by the agent from the official Godot release; installed by the researcher in the Godot editor.
- Java and Android tools: the JDK 17 and Android SDK already installed with Unity 6000.6.9f1; a separate Android Studio install.
- Signing: a debug key for the tryout, with a release key later; a release key now.
- Package name: `com.divirush.game`; a name with the school in it.

**Decision:**

| Item | Choice |
|---|---|
| Export templates | **Official Godot 4.7.2 templates**, downloaded from the godotengine GitHub release and checked against its SHA-512 sums. Only the Android templates are installed, in `%APPDATA%\Godot\export_templates\4.7.2.stable`. |
| Java and Android tools | **Unity 6000.6.9f1's bundled tools**: OpenJDK 17 and the Android SDK (build-tools 36) under `C:\Program Files\Unity\Hub\Editor\6000.6.9f1\Editor\Data\PlaybackEngines\AndroidPlayer`. Godot's editor settings point to them. |
| Signing | **Debug key for the tryout.** Godot's standard debug keystore (`%APPDATA%\Godot\keystores\debug.keystore`). A release key is made by the researcher before the final build. |
| Package name | **`com.divirush.game`**, as already set in the export preset. It cannot change for phones that already have the app. |

**Reason:**
- The official templates match the Godot version exactly; the checksum shows the download is whole and unchanged.
- The Unity tools were already on the computer, so nothing new had to be installed.
- A debug-signed APK installs on tryout phones by sideloading. The release key protects future updates, so it should be made once and kept safe by the researcher, not made in a hurry.
- The package name is short and already in use in the preset.

**Working values (changeable without a new decision):** version name 0.1.0, version code 1; architectures arm64-v8a and armeabi-v7a; minimum Android 7.0 (API 24), which covers Android 10–14; target API 36. If Unity is removed or updated, point Godot's editor settings (Export → Android) to the new JDK and SDK.

**Still open:** the release keystore and its safe storage, before the final build.

**Applies to:** [[Game Spec]] (Platform) and the game repo `D:\LAMBERTO\divi-rush` (`export_presets.cfg`, `build/DiviRush.apk`).
