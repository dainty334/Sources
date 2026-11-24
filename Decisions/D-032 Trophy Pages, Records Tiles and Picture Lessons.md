---
id: D-032
title: "Trophy pages, Records tiles and picture lessons"
project: DIVIRUSH
type: decision
status: settled
raised: 2026-11-24
decided: 2026-11-24
tags: [divirush, decision, game-code, ui, revision]
---

# D-032 Trophy pages, Records tiles and picture lessons

Raised on 2026-11-24 as a game revision. The researcher asked for three changes:
- the Trophies tab in pages of 12, with left and right arrows and a "1/3" indicator;
- a friendlier, better-looking Records tab;
- a How to Play with pictures, taught by the mascot, engaging and easy for Grade 4 learners to understand.

Terms follow [[CONTEXT]].

**Question:** How should the Trophies pages, the Records tab and the How to Play lessons look and work?

**Facts found:**
- **Trophies tab:** since [[D-031 More Trophies, Trophy Art and Featured Trophy]] it holds 26 Trophies in one scrolling grid of three columns, so most of them sit below the screen.
- **Records tab** ([[D-030 Profile, Nickname and New Bottom Bar]]): two white cards. One is a list of six rows of icon, words and number; the other has one plain bar per Episode.
- **How to Play:** one white card of six text rules, two of them about points (10 points plus 1 per second left, and +5 for a streak). There are no pictures and no mascot.
- **Difficulty settings** ([[D-008 Episodes, Difficulty and Scoring]]):

| Difficulty | Answer bubbles | Timer |
|---|---|---|
| Easy | 3 | 15 s |
| Medium | 4 | 10 s |
| Hard | 4 | 7 s |

- **Mascot tip:** the mascots already give the times-table tip "56 ÷ 8 = ? Think: 8 × ? = 56" ([[D-024 Talking Student Mascots]]).

**Decision:** settled by the researcher on 2026-11-24, every recommended answer.

*Trophies tab:*
- 12 Trophies per page, in three columns and four rows. 26 Trophies make 3 pages: 12, 12 and 2.
- Under the grid is a row with a left arrow, the page number ("1 / 3") and a right arrow.
- The left arrow is grey on page 1, and the right arrow is grey on the last page; they do not wrap around.
- A swipe left or right turns the page too.
- Tapping a Trophy still opens its card (D-030).

*Records tab:*
- Six big colour tiles in two rows of three. Each tile has an icon, a big number and a short name: Stars, Passed, Played, Right, Streak and Time.
- Under them, "Stars in each Episode": one row per Episode with a badge in its world colour, a bar, and "14/45" with a Star.
- These are still records of play, not grades: no percentages or marks.

*How to Play: picture lessons taught by the Buddy*
- **Pages:** short pages, turned with the same ◀ 1/7 ▶ row as the Trophies.
- **The Buddy:** the learner's Buddy ([[D-030 Profile, Nickname and New Bottom Bar]]) at about half size, talking in a speech bubble with its mouth moving, and waving on each new page. With Both, Ana and Migo take turns page by page.
- **Pictures:** each page has a picture made from the real game parts: the item card, the answer bubbles, the timer bar and the Stars.
- **The lessons, in order:**
  1. Read the division.
  2. Tap the right bubble before the timer runs out.
  3. A right answer sparkles; a wrong one shows the right answer.
  4. 8, 9 or 10 right earns 1, 2 or 3 Stars, and 1 Star opens the next Level.
  5. The times-table trick.
  6. Easy, Medium and Hard: bubbles and time.
  7. **Try it!**
- **Try it!:** one Easy practice item (12 ÷ 3 = ?) with 3 bubbles and no timer, tried until right. A wrong tap shakes, and the Buddy gives the times-table hint. A right tap sparkles and cheers. Nothing is saved.
- **Points:** the points and streak-points rules leave How to Play, because they are hard for Grade 4 learners and do not affect Stars.
- **First time:** after the Welcome screen, the lessons open once by themselves, and the last page goes on to the Main menu; Back skips them. After that, How to Play opens only from its button.

**Working choices** (the developer's, may be tuned):
- **The Buddy's lines** are short, in plain English for Grade 4:
  1. "Each Level has 10 division questions. Read the one on the card."
  2. "Tap the bubble with the right answer. Be quick! The timer bar gets shorter."
  3. "Right answer? You get a sparkle! Wrong? Don't worry, I will show you the right one."
  4. "Get 8 right to earn a Star. 9 right gets 2 Stars. 10 right gets 3 Stars! One Star opens the next Level."
  5. "Stuck? Use your times tables! For 56 ÷ 8, think: 8 times what is 56?"
  6. "Easy has 3 bubbles. Medium and Hard have 4 bubbles and less time."
  7. "Your turn! What is 12 ÷ 3? Tap the right bubble."
- **New icons:** a tick for "Right" and a flame for "Streak" are added to the icons.
- **Episode colours:** each Episode's badge takes the colour of its sky ([[D-020 Music and Backgrounds by Area and Episode]]).
- **Last page:** "Got it!" on the last page goes back where the learner came from: the Main menu.
- **Showing the lessons once:** no new saved fact is needed, because the Welcome screen itself shows only once.

**Reason:**
- **Pages:** pages of 12 fit one phone screen, so no Trophy hides below the edge, and the arrows and "1/3" show how much there is.
- **Records:** big numbers in colour tiles are quicker for children to read than a list.
- **How to Play:** a classmate who teaches with real game pictures, one idea per page, is easier for Grade 4 learners to follow than a block of text. Trying one item makes the rule concrete. No timer while learning keeps it calm.

**Changes:**
- Changes the Trophies tab and the Records tab of [[D-030 Profile, Nickname and New Bottom Bar]] and [[D-031 More Trophies, Trophy Art and Featured Trophy]].
- Replaces the How to Play text rules (Game Spec, Main menu).

**Applies to:** [[Game Spec]] (Main menu: How to Play; Trophies) and the game repo `D:\LAMBERTO\divi-rush`:
- screens: `trophies_screen.gd`, `how_to_play.gd`, `welcome_screen.gd`
- UI: `records_view.gd`, and a new lesson picture builder
- art: `tools/build_art.gd` (the two new icons)
