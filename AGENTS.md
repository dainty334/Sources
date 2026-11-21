---
title: "DiviRush Vault – Agent Guide"
status: reference
tags: [divirush, index]
---

# DiviRush Vault

Official title: **DIVIRUSH: An Adaptive Quick-Tap Educational Game for Enhancing Grade 4 Learner's Division Fact Recall** ([[D-001 Official Title]]).

This vault is the **primary source** for the DIVIRUSH capstone: an adaptive quick-tap Android game (Godot) for Grade 4 division fact recall at Baluan Elementary School. Ground every claim about the project in a note here, and cite the note by its `[[wikilink]]`.

## Layout

| Folder | Holds | Edit? |
|---|---|---|
| `Final/` | Approved documents (pre-proposal, survey tally) | Read-only. Change only when the user supplies a new final version. |
| `Guidelines/` | School rules: the BSIT manuscript outline and the Chapters 1–3 writing guide | Read-only reference. |
| `Manuscript/` | Chapter drafts, one note per chapter, and their Word exports | Yes: drafting and revising happens here. |
| `Design/` | [[Game Spec]]: the single source of truth for what the game does | Yes, but only with values the user has decided. Leave undecided values marked OPEN. |
| `Decisions/` | One note per decision, `D-001`, `D-002`, … | Add a note for every new decision or conflict. Change a settled one only when the user reverses it. |
| `Sources/` | One note per cited reference: APA 7 entry, link, verified findings | Add a note before citing a new source. Record only facts checked against the source itself. |
| `Templates/` | Note templates | Only to change the convention itself. |
| `attachments/` | Images embedded with `![[name]]` | Add files; name them `<note-slug>-imgNN.<ext>`. |

Start from [[Manuscript Outline - BSIT (Table of Contents)]]: it is the required manuscript structure and tracks which sections exist. [[Progress Log]] records what each work session did, decided and left open; add a dated entry at the top after each session.

## Status

Every note carries `status` in its frontmatter:

- `final`: approved; the wording is fixed.
- `unrevised`: adviser-checked draft; bracketed text like `[already stated above]` is adviser feedback still to address.
- `revised`: adviser feedback addressed, awaiting approval.
- `reference`: rules and guidance, not project content.
- `draft`: a spec still being filled in ([[Game Spec]]).
- `open` / `settled`: a decision note waiting on the user, or decided.
- `verified` / `unverified`: a source note checked, or not yet checked, against the original.

New notes also carry `type`: `draft`, `final`, `spec`, `decision`, `source`, `log` or `reference`. A note's `source` field records the original file it came from. Keep it when revising.

## Where facts live

- **Game behaviour** (levels, timer, scoring, platform): [[Game Spec]]. Code in the game repo and the manuscript chapters both follow it.
- **Decisions and conflicts:** `Decisions/`. Check for an `open` decision before relying on a contested fact, and raise it with the user. Record each new decision from `Templates/Decision.md` with the next free ID.
- **Citations:** `Sources/`. Cite only sources with a `verified` note; create one from `Templates/Source.md` first.

## Writing manuscript sections

1. Follow the section order in [[Manuscript Outline - BSIT (Table of Contents)]] and the writing rules in [[Guidelines - Writing Chapters 1-3]].
2. New chapter notes start from `Templates/Manuscript Section.md` and go in `Manuscript/`.
3. When a section is drafted, tick its box in the outline and link it there.
4. When revising an `unrevised` note, resolve each bracketed adviser comment, then set `status: revised`.
5. Word exports go in `Manuscript/` beside their note, named `<Chapter> (Revised).docx`. Format: US Letter, 1.5 in left margin, 1 in top/right/bottom, Times New Roman 12 pt, double-spaced, justified, APA 7 references with a 0.5 in hanging indent.

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

