---
title: "DiviRush Vault – Agent Guide"
status: reference
tags: [divirush, index]
---

# DiviRush Vault

Official title: **DIVIRUSH: An Adaptive Quick-Tap Educational Game for Enhancing Grade 4 Learner's Division Fact Recall** (settled by the user; the pre-proposal's *Division Duel* title is superseded).

This vault is the **primary source** for the DIVIRUSH capstone: an adaptive quick-tap Android game (Godot) for Grade 4 division fact recall at Baluan Elementary School. Ground every claim about the project in a note here, and cite the note by its `[[wikilink]]`.

## Layout

| Folder | Holds | Edit? |
|---|---|---|
| `Final/` | Approved documents (pre-proposal, survey tally) | Read-only. Change only when the user supplies a new final version. |
| `Guidelines/` | School rules: the BSIT manuscript outline and the Chapters 1–3 writing guide | Read-only reference. |
| `Manuscript/` | Chapter drafts, one note per chapter | Yes: drafting and revising happens here. |
| `Templates/` | Note templates | Only to change the convention itself. |
| `attachments/` | Images embedded with `![[name]]` | Add files; name them `<note-slug>-imgNN.<ext>`. |

Start from [[Manuscript Outline - BSIT (Table of Contents)]]: it is the required manuscript structure and tracks which sections exist.

## Status

Every note carries `status` in its frontmatter:

- `final`: approved; the wording is fixed.
- `unrevised`: adviser-checked draft; bracketed text like `[already stated above]` is adviser feedback still to address.
- `revised`: adviser feedback addressed, awaiting approval.
- `reference`: rules and guidance, not project content.

A note's `source` field records the original file it came from. Keep it when revising.

## Writing manuscript sections

1. Follow the section order in [[Manuscript Outline - BSIT (Table of Contents)]] and the writing rules in [[Guidelines - Writing Chapters 1-3]].
2. New chapter notes start from `Templates/Manuscript Section.md` and go in `Manuscript/`.
3. When a section is drafted, tick its box in the outline and link it there.
4. When revising an `unrevised` note, resolve each bracketed adviser comment, then set `status: revised`.

## Git commits

Every commit is part of the project's history. Write it as a record of what changed in the project. Two repositories follow these rules:

- **Game repo** `D:\LAMBERTO\divi-rush` (remote `dainty334/DiviRush`)
- **Sources repo**: this vault, `D:\LAMBERTO\DiviRush-Sources\DiviRush` (remote `dainty334/Sources`)

Rules for both:

- **Branch:** commit directly on `main`. Create no other branches.
- **Size:** split each update into 5–6 commits at most, each one a single coherent change.
- **Message:** basic English, a summary of the change, at most 2 sentences.
- **Voice:** describe the project itself ("Add level unlock rules for the Medium stage."). Write about the change, never about the people who asked for or made it.
- **Authorship:** the commit carries only the committer's own identity. Add no `Co-authored-by` or other attribution trailer.

Naming files in messages:

- **Game repo:** keep AI tools and agent files out of messages. Describe a `CLAUDE.md`, `AGENTS.md` or `.claude/` change as a project guide or project settings.
- **Sources repo:** messages may name `AGENTS.md`, `CLAUDE.md` and other agent files directly.

## Known conflicts between sources

Status does not settle these. Raise them with the user before relying on either side:

- **Survey topic**: [[Survey Tally (Final)]] asks about reading comprehension, not division.

When the user settles one, update this list.

Settled: the game is developed in GDScript, matching the pre-proposal. The C# mention in [[Chapter 1 - Introduction (Unrevised)]] is superseded.

Settled: the gameplay combines the pre-proposal's timer, score and best score with Chapter 1's 15 levels in Easy (1–5), Medium (6–10) and Hard (11–15) stages.
