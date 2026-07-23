# The Walkthrough v2 — Architecture

## Decision

Preserve the existing static architecture: one deployable `index.html` with
plain HTML, CSS, and JavaScript, plus supporting assets, tests, and hosting
configuration. Do not introduce a UI framework or rebuild v1.

## Runtime

- Static browser application.
- No server or runtime secrets.
- localStorage is the only product persistence.
- Image assets live under `assets/`.
- GitHub Actions provides validation.
- Cloudflare Pages serves the repository as a static site.

## In-file modules

The script in `index.html` is organized by responsibility:

1. Constants, icons, model metadata, and rule metadata.
2. Canonical playbook content.
3. App-authored step previews.
4. FORMA-9 illustrative journey data.
5. Versioned state and v1 migration.
6. Prompt filling and export helpers.
7. Rendering functions by screen/component.
8. Event binding and accessibility behavior.
9. Boot and error recovery.

Avoid hidden coupling between rendering and storage. State mutations save once
and then render.

## State schema

`walkthrough-v2` contains:

- `schemaVersion`
- `defaults`
- `activeProjectId`
- `projects[]`

Each project contains:

- identity and timestamps
- setup variables
- project-specific settings
- per-step tasks, gates, notes, and completion
- current step and view
- frontier credits and sessions
- completion and live URL

Migration reads `walkthrough-v1`, normalizes partial data, writes one v2
project, and leaves the source key untouched.

## Content boundaries

- Canonical content is stored separately from app-authored preview and example
  content.
- Canonical strings are never silently paraphrased.
- Track and tool adaptation selects or annotates canonical material; it does
  not rewrite it.
- A validation script compares normalized canonical text against
  `docs/playbook-source.md`.

## Accessibility architecture

- Buttons remain native buttons.
- Sheets are labelled dialogs with a focus trap and focus restoration.
- Background content is inert while a dialog is open where supported.
- Navigation exposes current state.
- Announcements use the existing status region.
- Reduced motion is controlled in CSS and checked in JavaScript before
  celebratory effects.

## Security

- No secrets, credentials, or personal data.
- User-entered project data remains on device.
- Export creates a local Markdown download only.
- Dynamic text is escaped before insertion.
- External links use safe attributes when opened in a new context.

## Change rule

Structural changes require an update to this file in the same commit. v2 work
must not modify `CLAUDE.md`, `AGENTS.md`, `.claude/`, or `.codex/`.
