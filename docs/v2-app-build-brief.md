# v2 App Build — Addendum for the Builder

**Read Part A of `docs/playbook-source.md` first.** This document adds three requirements on top of it — real problems found using v1, not stylistic preferences.

## 1. Step cards: preview vs active

**The problem this fixes:** in v1, tapping *any* step on the map — even one you haven't started, just looking ahead out of curiosity — opens the exact same dense card someone sees while actively doing that step: all nine fields, full reference text, prompts, everything. The very first thing a first-time user hit was jargon with zero warm-up, and it made them close the app.

**The fix:**
- **Preview state** (step not yet reached): tapping it shows a short, warm, plain-English summary — 2–3 sentences, written for the app, not lifted from the playbook. What this step is for, why it matters, roughly what you'll do. No jargon assumed. No prompts, no full field list.
- **Active state** (the step you're currently on, or any step you explicitly ask to "see everything" on): shows the full card exactly as v1 does — all nine fields, verbatim playbook content, prompts, gates.
- The playbook's own word-for-word rule for step content still applies to the active-state card. The preview text is new, app-authored chrome — same category as the "I'm stuck" prompt already is.

**Acceptance:** tapping any not-yet-started step from the map shows the short preview, not the full card. Tapping the current step, or an explicit "show full detail" action, shows everything.

## 2. A real visual design pass

**The problem this fixes:** v1 leans entirely on structure — badges, colour-coded cards, text in boxes. It reads as scaffolding, not something designed.

**The fix:** a genuine design pass — deliberate type hierarchy (bold means something specific, not applied everywhere), a real colour system beyond the badge palette, actual imagery/icons/illustration rather than plain text blocks. This isn't vague "make it nicer" — treat it as its own deliverable, reviewed as carefully as any functional requirement.

**Acceptance:** a stranger looking at the app for the first time should read it as a designed product, not a checklist with colours.

## 3. A single running example project, shown at every step

**The problem this fixes:** the playbook explains what to do at each step, but never shows what "done" looks like. A visual learner reading abstract instructions with nothing to compare against is exactly what caused the confusion in point 1.

**The fix:** one real project, built once, with its actual output captured at every one of the 11 steps — shown in a panel alongside whichever step the user is on. Concretely, at each step the panel shows:
- The **exact prompt** that was used for that step, filled in for real (not a template with brackets).
- The **actual result** — an excerpt of SPEC.md at Step 1, a screenshot of the reference used and the section built at Step 4, and so on — whatever that step actually produces.

This must be **one coherent project's journey**, not disconnected examples per step — the point is a user can follow it end to end and see how one idea became one real site. This needs actual assets (real screenshots, real SPEC/DESIGN excerpts) built once and stored with the app, not fabricated per step in isolation.

**Acceptance:** every one of the 11 steps has a real, concrete example from the same project, visible alongside the step you're working on.

---

**For Fable's read-only review:** check these three items specifically, in addition to Part A's acceptance criteria — rank any gaps the normal Blocker/High/Medium/Low/Preference way.
