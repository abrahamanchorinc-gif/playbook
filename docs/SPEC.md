# The Walkthrough v2 — Product Specification

## Status

Approved for implementation on July 23, 2026.

## Product

The Walkthrough is an interactive guided walkthrough for the website-building
playbook in `docs/playbook-source.md`. Version 2 upgrades the existing live v1
application. It must preserve working v1 behavior and state while making the
content accurate to the current playbook, easier to approach, more visually
designed, and more concrete for visual learners.

## Audience

The primary user is a solo beginner learning to build premium websites with AI
models while retaining human control over scope, quality, safety, and cost.

## Primary outcome

A player can start or resume a website project, understand the single task in
front of them, copy a correctly filled prompt, see a concrete illustrative
example of the expected result, and progress only after confirming the relevant
gate.

## Source of truth

- Part A of `docs/playbook-source.md` is the product brief.
- Parts B–E are canonical app content and must appear word-for-word.
- `docs/v2-app-build-brief.md` adds the preview-card, design-pass, and running
  example requirements.
- Preview summaries and FORMA-9 example material are app-authored interface
  content and must be visually separated from canonical playbook content.

## Core screens

1. Project shelf and first-project setup.
2. “You are here” task screen.
3. Colour-coded progress map.
4. Step preview/full-detail sheet.
5. Settings.
6. Canonical reference.
7. Project completion and maintenance view.

## Required preserved behavior

- Setup variables auto-fill prompt placeholders.
- The current task is shown alone with model, effort, and mode badges.
- The progress map uses the documented model colour system.
- Gates block step completion.
- “I’m stuck” creates contextual help for the current task.
- Progress resumes after reload.
- Keyboard access, visible focus, reduced-motion support, and phone/desktop
  layouts remain functional.

## v2 requirements

- Every canonical rule, tip, and gate shows 🛑, ✅, or 🎓.
- A one-line legend is reachable from every main screen.
- Settings cover default model, available tools, hosting platform, track, and
  configurable frontier-model credits.
- Practice and client tracks adapt visible tasks without changing canonical
  reference content.
- The fixed escalation ladder becomes diagnosis guidance based on B.3.
- Multiple independent projects can be created, resumed, renamed, and deleted.
- Each step has persisted notes with Markdown export.
- Frontier sessions have confirmed credit spending and persisted timers.
- Step and project completion have modest celebrations with reduced-motion
  alternatives.
- Future steps open a short preview; current and completed steps open full
  detail. “Show full detail” never changes progress.
- Every step includes an illustrative FORMA-9 artifact and filled prompt.

## Illustrative project

FORMA-9 is a fictional premium research-peptide storefront used only to
demonstrate the process. It uses fictional product names, contains no dosage,
treatment, or efficacy claims, has no real checkout, and must never be
presented as a client result or operating store.

## Persistence

- v2 uses a versioned localStorage document with global defaults, projects, and
  an active project id.
- Existing `walkthrough-v1` data is migrated into one v2 project on first load.
- The original v1 key is retained as a recovery source.
- Each project owns variables, settings, progress, gates, notes, timers,
  credits, completion state, and live URL.

## Accessibility

- Target WCAG 2.2 AA.
- All functions are keyboard operable.
- Dialogs trap focus, restore focus, close with Escape, and expose names.
- Focus indicators remain visible.
- Status changes use restrained live announcements.
- 200% zoom and narrow reflow remain usable.
- Motion respects `prefers-reduced-motion`.

## Acceptance criteria

- All preserved v1 behaviors pass.
- Canonical source text passes a deterministic fidelity check.
- Preview and full-detail step states behave as specified.
- Badges appear on every canonical rule, tip, and gate.
- Settings update affected prompts and UI live.
- Projects persist independently and v1 data migrates safely.
- All 11 FORMA-9 examples are visible and clearly labelled illustrative.
- Desktop and phone layouts have no horizontal overflow.
- Automated checks pass with no browser console errors.
- Cloudflare Pages preview and production deployments work before Vercel is
  retired.
- Rollback is documented and understood.

## Out of scope

- Accounts, cloud sync, collaboration, analytics collection, real commerce,
  real peptide sales, medical guidance, and server-side application state.
- Replacing the static app with a framework.
- Retiring the existing Vercel deployment before Cloudflare production is
  verified and the user explicitly confirms retirement.
