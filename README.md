# Web Project Playbook

This repository holds **[`WEB_PROJECT_PLAYBOOK.md`](WEB_PROJECT_PLAYBOOK.md)** — a single, repository-native operating manual for building premium websites with AI assistance.

## How to use it

For each new website you build:

1. Create the project's own folder and repository.
2. Copy `WEB_PROJECT_PLAYBOOK.md` into it.
3. Open the project in Claude Code and follow **Section 2 → "Claude Code test drive: start here."**

Claude reads the playbook and guides you one task at a time, so you never have to read the whole document yourself. It starts every task with the golden rule (Section 4): a MODEL / EFFORT / MODE verdict, then works with you step by step through Phases 0–10 (specification, design, scaffold, vertical slice, build, interactions, integrations, hardening, launch, maintenance).

## What's in this repo

- `WEB_PROJECT_PLAYBOOK.md` — the master manual (the file you copy into every project).
- `CLAUDE.md` / `AGENTS.md` — instruction files governing how agents work **in this repo** when editing the playbook itself.
- `.claude/settings.json` — the golden-rule enforcement hook.

The earlier interactive walkthrough app has been retired; this Markdown manual replaces it. The app remains in this repository's Git history if it is ever needed.
