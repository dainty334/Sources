---
title: "Manuscript Writing Rules"
project: DIVIRUSH
type: reference
status: reference
tags: [divirush, guidelines, manuscript]
---

# Manuscript Writing Rules

The researcher's standing rules for every manuscript chapter, first set for Chapter I on 2026-11-22. The section *structure* comes from [[Manuscript Outline - BSIT (Table of Contents)]] and [[Guidelines - Writing Chapters 1-3]]; this note governs *how* each section is written.

## Every section

1. **Opening paragraph.** Right after every heading and subheading, write a separate 2–3 sentence paragraph whose first sentence starts with the exact words "This section". It says what the section covers. Details and bullets come after it.
2. **Basic academic English.** Familiar, precise words. One main idea per sentence; split long sentences. Explain each technical term the first time it appears. Each paragraph has one clear topic and connects to the next.
3. **Varied openings.** Avoid starting several statements with the same word ("Some…"). Use wording tied to the source: "The survey identified…", "Teacher responses raised concerns about…", "The researcher observed…".
4. **Support resource framing.** DIVIRUSH is a proposed support resource. Never claim it *will* improve learning or scores. Stars, scores and levels record gameplay; they do not measure learning.
5. **Evidence only.** Every factual claim comes from the researcher's survey, the researcher's dated observations, or a source with a `verified` note in `Sources/`. Never invent a statistic, study, quote or local fact. When something is missing, write a `[bracketed placeholder]` and list it as an open question at the end.
6. **No unverified uniqueness claims.** Do not write "no similar project exists" or "never implemented locally" without a verified source.

## Survey reporting

- State the survey date, number and type of respondents, and grades covered **once**.
- Use only the figures the argument needs. Report each finding once, as a count with its denominator, plus a percentage: "17 of 20 parents (85%)".
- Explain what a finding means instead of listing every answer choice.
- Include mixed or opposing views when they matter.
- Parent and teacher answers are adult views, not measured learner performance. Say so.
- When the survey covered other grades or another topic, say so, and keep the game's Grade 4 target separate from the survey group. See [[D-006 Survey Evidence for Division]].
- Having "a phone" does not prove access to a compatible device.

## Chapter I specifics

- **Project Context:** at least 2 Word pages (about 900–1,100 words) of real discussion. Inverted pyramid: introduction → global (international source) → national (DepEd or other Philippine source) → local (survey and observations) → a bulleted list of at least four problems the game can actually address → a final urgency paragraph ("This proposal has been conceptualized due to the urgency to address the problems stated above."). Include a justification for the problem and one or two sentences linking the rationale to the research problem.
- **Purpose and Description:** answer what the project does, what is good about it, and what makes it unique, innovative and relevant. Describe what the learner does, step by step, using only features in [[Game Spec]].
- **Objectives:** the introductory paragraph describes only what the section presents. The general objective is one sentence matching the title ([[D-001 Official Title]]) with the completion period. Specific objectives are SMART bullets, **equal in number and order to the problems**, each something the app itself does or contains. Offline play, saving and touch controls go in Scope unless a problem is about them. No promised learning gains.
- **Scope and Limitations:** an opening paragraph for the main heading and for each subheading. Scope is the box (users, content, features, levels, saving, platform and minimum device, time frame) as bullets. Limitations are what is outside the box, plus how survey findings should be read, in short sentences.

## Bibliography

- Opens with "This section lists the sources cited in Chapter <N>."
- APA 7th edition, alphabetical, with links, and only sources actually cited in the chapter ([[D-004 Chapter I Content Choices]]).
- Sources published 2020–2026 only, by real publication year. Flag older or undated sources for replacement.
- Every entry must have a `verified` note in `Sources/`; `tools/check-vault.js` enforces this.

## Deliverables per chapter

1. The chapter text in its `Manuscript/` note.
2. For Chapter I, a Problem–Objective table (Problem # | statement | evidence | matching objective).
3. A checklist confirming the rules above.
4. A list of missing information and claims still to verify.
5. A Word export built with `tools/build-docx.js` in the [[D-005 Manuscript Format]].
