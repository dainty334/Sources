---
id: D-030
title: "Profile, nickname and new bottom bar"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-24
decided: 2026-11-24
tags: [divirush, decision, game-code, ui, revision]
---

# D-030 Profile, nickname and new bottom bar

Raised on 2026-11-24 as a game revision: the researcher asked for a first-time nickname, a Profile at the top left of the Main menu where the learner chooses Ana, Migo or both, and a new bottom bar. My Records, the count pills and the top Exit button would leave the Main menu, and the bottom bar would hold How to Play, Trophies, Settings and Exit. Terms follow [[CONTEXT]].

**Question:** How should a first-time player give a nickname? What should the Profile show? How should the Main menu, the Trophies screen and the records change?

**Facts found:**
- The Main menu's top row holds three count pills (Stars, Trophies, Levels passed) and a pink Exit door ([[D-025 Main Menu Play-First Layout]], [[D-021 Exit Confirmation]]). Its bottom bar holds How to Play, Trophies, My Records and Settings.
- Earned Trophies are saved as a list of ids with no date ([[D-023 Trophies and My Records]]). Trophy cards cannot be tapped.
- D-023 calls the rewards "Trophies, never achievements", because the manuscript uses "achievement" for the learning outcome the study measures.
- The out-of-scope list forbids accounts and cloud save ([[Game Spec]]). A nickname kept only in the save file on the learner's own phone, with no password and nothing sent online, is not an account.
- References:
  - Children's learning apps keep the nickname, the avatar and the progress counts together on one profile page (ABCmouse, Sora's "Me" tab, Nick Academy).
  - GoNoodle's "Trophy Case" lets children tap into their rewards.
  - Guidance for children's apps (KidSAFE certification rules, Niantic's advice to parents) is to use a nickname, not the child's real name.

**Decision:** settled by the researcher on 2026-11-24.

*First time:*
- After "Tap to Start", a first-time player sees one Welcome screen. It has two parts:
  - a nickname box with the hint "Use a nickname, not your full name";
  - "Who's your buddy?" with three choices: Ana, Migo or Both.
- **Next** stays off until a nickname is typed. Then the Main menu opens.
- The Welcome screen shows once. It also shows to a learner who already has a save from an older version but no nickname.
- The nickname is 1 to 12 characters: letters, numbers and spaces. It can be changed later in the Profile.
- The game never asks the learner's gender. The buddy choice decides which mascot shows: Ana, Migo, or both taking turns as now ([[D-024 Talking Student Mascots]]).

*Main menu:*
- **Top left:** a white Profile pill with the buddy's small face and the nickname. When the buddy is Both, Ana's and Migo's faces show side by side. Tapping the pill opens the Profile.
- **Removed:** the three count pills and the top-right Exit button.
- **Bottom bar:** How to Play, Trophies, Settings and Exit, all four in the same white style. Exit still asks first with the "Leave DiviRush?" card ([[D-021 Exit Confirmation]]).

*Profile screen:*
- The buddy's face in a big circle (both faces for Both).
- The nickname with an edit pencil.
- "Your buddy" with Ana, Migo and Both.
- The three counts that left the Main menu: Stars of 180, Trophies of 12, Levels passed of 60.

*Trophies screen:*
- It keeps the name **Trophies** (D-023 stands).
- It has two tabs: **Trophies** and **Records**. My Records is no longer its own screen or button. Its numbers move to the Records tab, which is called "Records", not "My Records".
- **Each Trophy card can be tapped.** It opens a card with the big Trophy, its name and its goal:
  - Earned: "Earned on 24 Nov 2026", with the real date.
  - Not yet earned: the goal and how far along it is, for example "23 of 50 Stars".
  - Earned before this version kept dates: "Earned before dates were kept".

*Later:* the "Start over" reset is not part of this build. It gets its own grill.

**Working choices** (the developer's, may be tuned):
- The nickname, the buddy and each Trophy's earned date are saved in the same `user://save.cfg` ([[D-010 Game Code Foundations]]), as save layout version 3. Older files still load.
- The small faces are cut from the mascots' own head, eye and mouth pictures.
- On the Welcome screen, Ana and Migo greet the learner together ("Hi! We're Ana and Migo. Welcome to DiviRush!"), because the Buddy is not picked yet.
- The pencil is a new icon. The Records tab keeps the old My Records numbers and bars unchanged.

**Reason:**
- A buddy choice lets each child pick the classmate they like, without asking a child's gender.
- A nickname is friendly and personal, and keeps the child's real name out of the game.
- One Trophies screen with a Records tab keeps all the "how am I doing" information together. It also frees a bottom-bar place for Exit.
- Tappable Trophies with dates and progress give children a clear next goal. This follows D-023's rule to reward progress and mastery.

**Changes:**
- [[D-021 Exit Confirmation]]: Exit moves from the top right to the bottom bar. The confirm card stays.
- [[D-023 Trophies and My Records]]: My Records becomes the Records tab, Trophies can be tapped, and earned dates are saved.
- [[D-025 Main Menu Play-First Layout]]: the count pills and the top Exit button leave, and the Profile pill comes in at the top left.

**Open:** the mascots could greet the learner by nickname ("Hi, Bea!"). This was not asked for and is not decided.

**Applies to:** [[Game Spec]] (Screens: Start-up menu, Main menu, Trophies, Settings) and the game repo `D:\LAMBERTO\divi-rush`. New: Welcome and Profile screens. Changed: `main_menu.gd`, `trophies_screen.gd`, `save_store.gd`, `records.gd`. Removed: `records_screen.gd`, which becomes the Records tab.
