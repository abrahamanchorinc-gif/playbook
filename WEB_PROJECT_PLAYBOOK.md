# The AI-Assisted Web Project Playbook

**Version:** 0.9.1 post-review restoration

**Last updated:** 24 July 2026

**Model and platform claims last verified:** 24 July 2026

**Audience:** a solo beginner building premium websites with AI assistance, and the AI agents working with them

**Scope:** brochure sites, marketing sites, portfolios, interactive brand experiences, and small full-stack web projects

**Status:** operational draft; one specialist review is done and its findings applied (Section 23). Under the standing moratorium, the next step is to use this on a real website, then freeze Version 1.0 — not to run further reviews.

This is a repository-native operating manual, not a course, dashboard, or progress app. Keep it in Git, read it before work begins, and update it when evidence changes the workflow.

> **Operating principle:** Premium work comes from clear decisions, small verified loops, human taste, and disciplined delivery—not from one enormous prompt.

## Table of contents

1. [How to use this playbook](#1-how-to-use-this-playbook)
2. [Quick start](#2-quick-start)
3. [Rule classifications](#3-rule-classifications)
4. [Golden model-routing rule](#4-golden-model-routing-rule)
5. [Choose a project track](#5-choose-a-project-track)
6. [Minimal documentation system](#6-minimal-documentation-system)
7. [Model and tool guide](#7-model-and-tool-guide)
8. [The bake-off protocol](#8-the-bake-off-protocol)
9. [Git, branches, permissions, and checkpoints](#9-git-branches-permissions-and-checkpoints)
10. [Framework, Cloudflare, and environment decisions](#10-framework-cloudflare-and-environment-decisions)
11. [The complete project lifecycle](#11-the-complete-project-lifecycle)
12. [Client-project controls](#12-client-project-controls)
13. [Accessibility from the beginning](#13-accessibility-from-the-beginning)
14. [Animation, 3D, and visual-effects rules](#14-animation-3d-and-visual-effects-rules)
15. [Security and privacy](#15-security-and-privacy)
16. [Testing and continuous integration](#16-testing-and-continuous-integration)
17. [Performance engineering](#17-performance-engineering)
18. [Launch and handover](#18-launch-and-handover)
19. [Maintenance and hotfixes](#19-maintenance-and-hotfixes)
20. [Troubleshooting by cause](#20-troubleshooting-by-cause)
21. [Copy-ready templates](#21-copy-ready-templates)
22. [Playbook lifecycle, changelog, and evidence loop](#22-playbook-lifecycle-changelog-and-evidence-loop)
23. [Review status and freeze](#23-review-status-and-freeze)
24. [Official-source verification appendix](#24-official-source-verification-appendix)
25. [Plain-English glossary](#25-plain-english-glossary)

---

## 1. How to use this playbook

Use this document at three levels:

1. **Before a project:** choose the track, framework, deployment path, documentation set, model route, and permission boundaries.
2. **During every work session:** follow the startup sequence, work in a small loop, prove the result, and update project memory.
3. **After a milestone or launch:** record decisions, defects, performance evidence, client approvals, and lessons that should change the next project.

### Starting a brand-new project (the first message)

`[REQUIRED]` This is how every new project actually begins in practice: the human creates an empty project folder, puts a copy of this file in it, opens it in Claude Code, and sends something as short as **"Look at WEB_PROJECT_PLAYBOOK.md and tell me when you're ready to start."**

When the agent receives a message like that and no `/docs/PROJECT_STATUS.md` exists yet in the project, this is a brand-new project. The agent's first reply must **not** be a summary of this document, and must not wait for a longer initialization prompt. Instead:

1. Give the golden-rule verdict (Section 4) first, as always.
2. If the model/effort/mode match, ask the human a short, warm, plain-English set of questions — the minimum needed to start Phase 0. For example:
   > *"What's the website we're doing today? Who is it for, and what's the one thing you want a visitor to do? Roughly what pages or sections do you imagine? Is this a practice project or client work?"*
3. Keep it to one message, no jargon, no long form to fill in. "I don't know yet, you decide" is an acceptable answer to any of these — the agent proposes something reasonable and asks the human to confirm rather than blocking on it.
4. Once answered, begin Phase 0 immediately (Section 11) using those answers — no separate "go" needed unless the golden rule itself required a model switch first.

The longer initialization prompt in Section 2 still works if the human would rather write all the project details out themselves upfront — it is an alternative entry point, not the only one.

### Repository placement

- Keep the master manual as `WEB_PROJECT_PLAYBOOK.md`.
- At the start of a real project, copy the applicable operating rules into `/docs/PLAYBOOK.md`.
- Add the four required project documents from Section 6.
- Add optional documents only when their subject exists. Documentation should reduce ambiguity, not become a second product.

### Agent startup sequence

Every agent begins a task in this order:

1. Read `/docs/PLAYBOOK.md`.
2. Read `/docs/PROJECT_STATUS.md`.
3. Read only the relevant specification, design, architecture, motion, operations, decision, test, or handover documents.
4. Output the model recommendation required by Section 4.
5. If the current model is correct, inspect Git status and the current branch.
6. Restate the task, boundaries, acceptance criteria, and checks in concise language.
7. Work in the smallest coherent change.
8. Run proportional automated checks and perform the required visual/manual checks.
9. Update `/docs/PROJECT_STATUS.md`; update `/docs/DECISIONS.md` when a durable decision changed.
10. Never call work complete when a required check has not run. Report it as **unverified**, with the reason.

### The working loop

Use this loop repeatedly:

```text
context → route model → define evidence → make a small change
→ run checks → inspect the real result → diagnose → record → continue
```

“Loop engineering” is simply this disciplined feedback cycle. The agent does not disappear for hours, invent missing requirements, or treat generated code as proof. The human does not wait until launch to look at the work.

### Human and agent partnership

The **human owns** taste, business truth, scope, legal/commercial decisions, client communication, credentials, payment accounts, destructive approvals, and final sign-off.

The **agent owns** repository inspection, implementation within the agreed scope, explicit assumptions, diagnostic evidence, routine checks, documentation updates, and a truthful handoff.

Neither side delegates its judgment to a score, screenshot, generated report, or another model.

### Beginner collaboration rhythm

Claude should not attempt the entire lifecycle in one unattended run.

1. At the start of a phase, explain its purpose, the immediate task, the files likely to change, and the evidence required to finish.
2. Ask only for human decisions that cannot be discovered safely from the repository or specification.
3. Work on one bounded task at a time and give concise progress updates during longer work.
4. If blocked, classify the cause, explain it in plain English, present the safest options, and recommend one. Do not silently skip the problem.
5. At a documented completion gate, report the evidence and pause for the human’s approval before entering the next phase.
6. Answer questions during the process without losing the active task; update `/docs/PROJECT_STATUS.md` when the decision changes the work.
7. At the end of a conversation, record the last verified result and a precise next action so a new Claude session can continue safely.

This is collaborative step-by-step work, not approval of every harmless file read. The approval policy in Section 9 determines which actions can proceed and which must pause.

---

## 2. Quick start

### The simple way to start (recommended)

1. Create a new, empty project folder and, inside it, a private or public repository as appropriate; never include real client or personal secrets.
2. Copy `WEB_PROJECT_PLAYBOOK.md` into that folder.
3. Open the folder in Claude Code and say: **"Look at WEB_PROJECT_PLAYBOOK.md and tell me when you're ready to start."**
4. Answer the short questions the agent asks (see "Starting a brand-new project" in Section 1). Phase 0 begins right after.

Everything below in this section is the fuller, more detailed version of the same thing — useful if you'd rather write out the whole brief yourself first, or want to see exactly what each phase expects.

### Starting a practice project

1. Create a private or public repository as appropriate; never include real client or personal secrets.
2. Copy the templates from Section 21 into `/docs`.
3. Fill in the project brief, primary audience, one conversion goal, page list, visual references, constraints, and definition of done.
4. Choose a framework using Section 10; start with the simplest option that satisfies the specification.
5. Ask the agent for the Section 4 model recommendation.
6. Complete Phases 0–4 before expanding the whole site.
7. Make one representative page excellent, then reuse its proven system.
8. Complete accessibility, testing, performance, launch, and retrospective work even when the project is “just practice.”

### Starting a client project

Do the practice steps plus all `[REQUIRED]` client controls:

- private repository;
- protected `main`;
- feature branches and pull requests;
- working continuous integration;
- separated preview and production environments;
- protected preview access when client material is confidential;
- written scope, acceptance criteria, content ownership, analytics/privacy decisions, and launch authority;
- human testing on real devices;
- rollback plan, sign-off, handover, and change-control process.

### Beginning one task

Paste this compact instruction when needed:

```text
Read /docs/PLAYBOOK.md, /docs/PROJECT_STATUS.md, and the documents relevant
to this task. First give the 1–2 sentence model recommendation required by
the Golden Model-Routing Rule. If this is the correct model, inspect Git,
restate the acceptance criteria and checks, then make the smallest coherent
change. Do not commit, push, deploy, install a service, change infrastructure,
or perform a destructive action without the permission required by the
playbook. Update PROJECT_STATUS.md with verified evidence before handoff.
```

### Beginner defaults

- One meaningful task at a time.
- One source of truth for each decision.
- One animation owner per property.
- One protected production branch.
- One representative vertical slice before bulk page production.
- Small reviewable diffs.
- A screenshot is evidence of appearance, not proof of correctness.
- A green automated check is evidence, not proof of usability, accessibility, security, or taste.

### Claude Code test drive: start here

Use this walkthrough to test the playbook immediately with Claude Code. The master manual and the test instructions now live in this one file.

#### What success looks like

Claude should:

- recommend the correct model before each task;
- explain the current phase and immediate task in plain English;
- inspect Git before editing;
- create the minimum project documents before website code;
- work on one bounded task at a time;
- explain unfamiliar or consequential commands before requesting approval;
- run understood checks;
- show the final diff;
- update project status;
- pause at completion gates;
- never commit, push, deploy, or access secrets without separate approval.

#### Recommended first test

Use a new practice project instead of an important client repository.

Example brief:

> Build a premium one-page website for a fictional Melbourne creative studio. Its goal is to make a potential client request a quote. It needs a hero, selected-work section, service summary, process, testimonial, and accessible contact form. The visual direction is warm, cinematic, editorial, and restrained—not a generic SaaS landing page.

Replace this with your own small website idea when ready.

#### Step 1 — Create a safe test folder

1. In Finder, create a new folder such as `Documents/Claude/playbook-test-site`.
2. Copy this `WEB_PROJECT_PLAYBOOK.md` file into that folder.
3. Open the new folder in the editor/terminal where you use Claude Code.
4. Start a new Claude Code conversation in that folder.

Do not use an important production project for the first test.

#### Step 2 — Initialize the project

Replace the text inside square brackets, then paste the whole prompt into Claude:

```text
We are starting a new website using WEB_PROJECT_PLAYBOOK.md as the master
operating manual.

Project:
[Describe the website in 2–5 sentences.]

Track:
Practice

My experience:
I am a beginner. Explain decisions and approval requests in plain English,
but do not turn the work into a tutorial or ask me to approve harmless
file reads repeatedly.

Your task now:

1. Read WEB_PROJECT_PLAYBOOK.md.
2. Apply its Golden Model-Routing Rule before doing any work.
3. If this is the correct model, inspect the folder and Git state.
4. Complete Phase 0 only. Do not build the website yet.
5. Create:
   - CLAUDE.md
   - /docs/PLAYBOOK.md
   - /docs/PROJECT_STATUS.md
   - /docs/SPEC.md
   - /docs/DESIGN.md
6. Make /docs/PLAYBOOK.md a concise project-specific operating file derived
   from the master. It must preserve the Golden Model-Routing Rule, the
   collaborative approval/auto-edit policy, Git safety, the Practice track,
   required checks, and the step-by-step collaboration rhythm.
7. Use the exact PROJECT_STATUS template from the master.
8. Do not initialize Git, install packages, run unfamiliar scripts, commit,
   push, deploy, or access anything outside this folder without explaining
   the action and receiving my approval.
9. Show me the proposed project files and Phase 0 completion evidence.
10. Update PROJECT_STATUS.md and pause at the Phase 0 gate.

Work with me one bounded task at a time. If information is missing, ask only
the questions that require my decision.
```

Claude should recommend a model first. Phase 0 for a simple new site will normally recommend **Claude Sonnet 5**.

If Claude says the current model is wrong:

1. Switch to the named model in Claude Code.
2. Reply:

   ```text
   I switched to the recommended model. Continue Phase 0 from the existing
   folder state. Re-check Git and do not repeat completed work.
   ```

Claude should not write the website during Phase 0.

#### Step 3 — Review Phase 0

Before approval, check:

- [ ] `CLAUDE.md` exists.
- [ ] `/docs/PLAYBOOK.md` exists and is much shorter than the master.
- [ ] `/docs/PROJECT_STATUS.md` uses the required template.
- [ ] `/docs/SPEC.md` and `/docs/DESIGN.md` exist.
- [ ] The project is labelled `Practice`.
- [ ] Claude reported the Git state.
- [ ] Claude did not install packages, commit, push, or deploy.
- [ ] The next action is Phase 1.

If something is missing:

```text
Phase 0 is not approved yet. Compare the current files against Phase 0 in
WEB_PROJECT_PLAYBOOK.md. List only the missing or contradictory items,
correct them within the existing scope, run the relevant checks, update
PROJECT_STATUS.md, and show me the evidence again.
```

When it is correct:

```text
Phase 0 is approved. Continue to Phase 1 only. Help me define the
specification step by step, ask me only the decisions you cannot discover,
update SPEC.md and PROJECT_STATUS.md, and pause at the Phase 1 gate. Do not
scaffold or build the website yet.
```

#### Step 4 — Define the specification together

Claude should help decide:

- the primary audience;
- the one main action visitors should take;
- routes/sections;
- required content;
- interactive states;
- accessibility target;
- form/integration needs;
- browser/device expectations;
- what is explicitly out of scope;
- evidence required to call the site complete.

Good answers can be short. When unsure:

```text
I do not know this decision yet. Give me no more than three sensible options
for this project, explain the trade-off in beginner-friendly language,
recommend one, and wait for my choice.
```

Approve Phase 1 only when `/docs/SPEC.md` describes a website you actually want.

#### Step 5 — Establish the design direction

After Phase 1 approval:

```text
Phase 1 is approved. Continue to Phase 2 only.

Help me establish the content and design direction before coding. Ask me for
the actual references or assets you need. Translate my references into
specific rules for hierarchy, layout, typography, spacing, color, imagery,
responsive behavior, accessibility, and motion.

Do not describe the target only with vague words such as premium, modern, or
cinematic. Record measurable visual decisions in DESIGN.md, update
PROJECT_STATUS.md, and pause at the Phase 2 gate.
```

Supply screenshots or links and explain exactly what you like:

- “Use this typography scale and dense editorial rhythm.”
- “Preserve this hero composition, but not its colors.”
- “I like the warm material treatment and restrained motion.”

Avoid only saying “make it pop” or “make it premium.”

#### Step 6 — Scaffold safely

After approving the specification and design:

```text
Phase 2 is approved. Continue to Phase 3.

First recommend the simplest suitable framework using the decision guide in
PLAYBOOK.md. Explain the recommendation, deployment path, and trade-offs
before creating the scaffold.

Before any package installation or unfamiliar command, show me:
- the exact command;
- what it does;
- files it may change;
- whether it uses the network;
- why it is needed;
- how we will validate it.

Wait for my approval for those commands. After approval, create the smallest
scaffold, configure real lint/typecheck/test/build commands and a minimal
preview plan, update the documentation, and pause at the Phase 3 gate.
Do not build every page.
```

Approve one explained action:

```text
Approved for this task only: run exactly the command you showed me. Do not
run additional install, Git publication, deployment, or external commands
without a new explanation and approval.
```

Ask for more information:

```text
Not approved yet. Show me the relevant package script or documentation,
explain what files will change, and tell me the safer alternative.
```

Reject it:

```text
Do not run that command. Continue with the safest project-local alternative,
or explain why the current task cannot proceed without it.
```

#### Step 7 — Build one vertical slice

After the scaffold works:

```text
Phase 3 is approved. Continue to Phase 4 only.

Choose one representative vertical slice from SPEC.md that proves the design
system, responsive layout, accessibility, real content, and one meaningful
interaction. Tell me which slice you chose and why.

Implement it as one bounded task at a time. Give concise progress updates.
Run the relevant checks, show matched desktop/mobile visual evidence, update
PROJECT_STATUS.md, and pause for my visual and functional approval before
building the remaining pages.
```

Do not approve the slice from one screenshot alone. Open it yourself and test:

- desktop width;
- a real phone if possible;
- keyboard navigation;
- visible focus;
- 200% zoom;
- reduced motion;
- loading/error/form states that exist;
- browser console.

#### Step 8 — Continue through the remaining phases

Use:

```text
Read CLAUDE.md, /docs/PLAYBOOK.md, and /docs/PROJECT_STATUS.md.

Apply the Golden Model-Routing Rule first. If this is the correct model,
continue only the documented next phase/task. Explain the immediate goal,
work in a bounded change, follow the approval policy, run the required
checks, update PROJECT_STATUS.md, and pause at the completion gate.
```

The remaining lifecycle is:

1. Phase 5 — remaining pages and states;
2. Phase 6 — signature interactions, motion, and 3D;
3. Phase 7 — forms, integrations, CMS, analytics, and SEO;
4. Phase 8 — hardening and launch-candidate testing;
5. Phase 9 — independent review, controlled launch, and handover;
6. Phase 10 — maintenance and hotfixes.

Do not skip directly from a nice-looking homepage to deployment.

#### When you get stuck

```text
Stop implementation and diagnose the blocker using PLAYBOOK.md.

Classify it as specification, context, visual, logic, architecture, or
environment. Explain:

1. What is known.
2. What evidence is missing.
3. The smallest reproduction or next check.
4. Whether the current model is still appropriate.
5. Up to three options and your recommendation.

Do not install tools, make broad changes, or escalate models merely because
the request is unclear. Update PROJECT_STATUS.md with the blocker and wait
for my decision if one is required.
```

For a visual problem:

```text
The result works but is not visually approved. Disable motion for the
comparison. Compare the approved reference and current result at matched
viewport, content, state, and scale. Identify concrete differences in
composition, typography, spacing, color, material, imagery, depth, and
motion. Recommend the three highest-impact corrections and wait for me to
approve that correction scope.
```

#### Start a new Claude conversation safely

```text
This is a continuation, not a new project.

Read CLAUDE.md, /docs/PLAYBOOK.md, and /docs/PROJECT_STATUS.md. Inspect Git
status and the current diff. Apply the Golden Model-Routing Rule. Summarize:

- last verified completion;
- current task and acceptance criteria;
- blockers;
- uncommitted changes;
- exact next action.

Do not repeat completed work. If this is the correct model, continue only
the documented next action using the approval policy.
```

This is why keeping `PROJECT_STATUS.md` current matters.

#### Review before a commit

```text
Do not commit yet.

Inspect Git status and the complete scoped diff. Confirm that no unrelated,
generated, private, or secret file is included. Run the checks required by
PROJECT_STATUS.md and report:

- files changed and why;
- acceptance criteria satisfied;
- checks passed;
- checks failed;
- checks not run and why;
- remaining risks;
- proposed commit message.

Then wait for my explicit commit approval. Push requires separate approval.
```

If satisfied:

```text
Approved to commit only the reviewed files with the proposed commit message.
Do not push, merge, deploy, tag, or change any remote system.
```

#### Red flags during the test

Pause if Claude:

- starts coding before understanding the brief;
- skips the model recommendation;
- asks for broad automatic permission;
- runs an unexplained install/script;
- changes files outside the current scope;
- commits or pushes automatically;
- calls a screenshot “proof” of the entire site;
- claims the site is secure or accessible because a scan is green;
- builds every page before one vertical slice is approved;
- ignores `PROJECT_STATUS.md`;
- continues into the next phase without showing the completion gate.

Use:

```text
Pause. Re-read CLAUDE.md and /docs/PLAYBOOK.md. Identify which rule the last
action conflicts with, return to the last verified project state without
discarding my work, update PROJECT_STATUS.md, and propose the safest next
action. Do not run a corrective command until its effects are understood.
```

#### Reuse this one master file on every website

For each new website:

1. Create or open its own project folder and repository.
2. Copy in this `WEB_PROJECT_PLAYBOOK.md`.
3. Run the Step 2 initialization prompt.
4. Review the project-specific documents Claude creates.
5. Use `/docs/PLAYBOOK.md` and `/docs/PROJECT_STATUS.md` for daily sessions.
6. Keep this master as the reusable reference; do not repeatedly paste it into chat.
7. Run the lifecycle through launch, handover, and retrospective.
8. Feed repeated real-project lessons back into the master only with evidence.

For client work, change the initialization prompt to:

```text
Track:
Client Production
```

Then apply every client control in the master. Do not test unfamiliar permissions, deployments, databases, or credentials for the first time on a client project.

---

## 3. Rule classifications

Every important rule uses one of these exact labels.

### `REQUIRED`

A control that must be followed for the stated track or situation. Skipping it creates unacceptable delivery, security, accessibility, or recovery risk. A project may deliberately waive a required control only when the accountable human records:

- the rule;
- the reason;
- the risk;
- the temporary mitigation;
- the approver;
- the expiry or review date.

### `RECOMMENDED`

The default that usually produces the best balance of quality, speed, cost, and clarity. Change it when project evidence justifies a better choice, and record important deviations.

### `PERSONAL RULE`

A founder-specific preference, budget habit, or working style. It can be valuable, but it must never be presented as a universal technical truth.

### Classification examples

- `[REQUIRED]` Never commit credentials, private client data, or production secrets.
- `[RECOMMENDED]` Prove one vertical slice before building all pages.
- `[PERSONAL RULE]` Reserve the most expensive model for gates where another model has failed correctly or the risk justifies it.

The older labels “Production Requirement,” “Recommended Default,” and “Personal Habit” are retired in this playbook.

---

## 4. Golden model-routing rule

> `[REQUIRED]` **Before acting on ANY prompt, no matter how small — including pure discussion — the agent's first output is a three-part verdict: MODEL / EFFORT / MODE, each one named exactly, plus a one-line why. Never leave any of the three vague.**

This applies to every prompt, with no exceptions. The three parts are:

- **MODEL** — which model, from the routing table below.
- **EFFORT** — low / medium (normal) / high / max-ultracode, per the effort guide below.
- **MODE** — how much freedom the agent has while it works: `PLAN` (look and think only, no file changes), `ASK-each-time` (proposes every change and waits for a yes), or `AUTO-accept` (applies edits itself within the bounded conditions in Section 9). Bypass-permissions / full-auto is banned on every track, at any stakes level — never recommend it. Full mode detail: Section 9.

**Enforcement:**

- If the current model, effort, and mode already match, say so in one line and proceed.
- If any of the three is wrong, name the correct MODEL / EFFORT / MODE and **stop completely** — do not start the work, and do not answer the substance of the prompt either, even if the answer would be quick or the agent already knows it. The verdict is the entire response. This closes a real gap: previously the agent flagged the mismatch but then answered anyway, which defeats the point of the rule.
- **If the human does not switch:** on the very next message, before doing anything else, ask why and re-encourage the switch — restate the correct MODEL / EFFORT / MODE and why it matters. Only proceed — on the unmatched setting, and only then answering the actual prompt — if the human explicitly says something like "no, don't switch, just use this." That override is one-time, for that single task only; on the next prompt, return to giving the full verdict and stopping again if unmatched. Never silently drop the check, and never treat a prior override as standing permission for later prompts.
- If the agent cannot see its model identity, say that plainly, recommend the correct model, and ask the human to verify the selector.
- If the exact recommended model is unavailable, report that fact and stop for a human routing decision; do not silently substitute another model.
- Never quietly do easy work on an unnecessarily expensive model, at higher effort than needed, or in a looser mode than the task warrants.

> `[REQUIRED]` **Copyable prompts always go in a fenced code block.** Any time the agent writes a prompt for the human to copy and reuse — for another tool, or to save for later — it goes inside triple-backtick fences, never as plain paragraph text. The code block is what renders with a copy button.

> `[PERSONAL RULE]` **Enforce the verdict with a hook, not just this file.** A rule that lives only in a Markdown file is read once at the start of a session and can silently drop out of a long conversation. In each new project, also add a `UserPromptSubmit` hook (see Section 21) that re-injects a short reminder of this rule on every prompt. This exists because a file-only version of this rule was silently skipped once.

This routing table is the **current operating policy**, last verified 24 July 2026. It is not a timeless ranking, a vendor benchmark, or a claim that one model always wins.

| Task class | Default model | Why |
|---|---|---|
| Routine implementation, clear component work, documentation updates, ordinary fixes | **Claude Sonnet 5** | Normal speed/quality default for well-scoped work |
| Architecture, coordinated changes across many files, or a bug that survives two proper Sonnet attempts | **Claude Opus 4.8, high effort** | Deeper reasoning for complex agentic coding and cross-system decisions |
| Exceptional, high-stakes synthesis, or a problem that has survived proper Sonnet and Opus work | **Claude Fable 5, max/ultracode** | Expensive escalation for the hardest long-running work, not routine production |
| Complex engineering, long-context implementation, difficult audits, code review, or independent technical verification | **GPT-5.6 Sol** | Strong complex coding/reasoning role and a valuable independent vendor perspective |
| Reference-driven frontend implementation candidate | **Kimi K3**, only after a project-specific bake-off | Candidate for visual/reference work; must earn the role on the real stack |
| Exploratory browser QA, responsive sweeps, and workflow simulation | **Gemini through Antigravity** | Useful browser-agent workflow; supplementary evidence, never final proof |

### Effort is separate from model choice

Use the lowest effort that can reliably solve the task:

- **Low/normal:** clear edits, known patterns, small documentation changes.
- **Medium:** multi-step implementation, moderate debugging, several interacting components.
- **High:** architecture, migrations, cross-file reasoning, difficult review.
- **Max/ultracode:** exceptional cases only, after the routing conditions above.

Do not raise effort because a prompt is vague. Fix the prompt and context first.

### Escalation requires a proper attempt

A **proper attempt** has:

- a bounded problem statement;
- relevant files and error output;
- reproducible steps;
- explicit acceptance criteria;
- an appropriate environment;
- a recorded hypothesis;
- a meaningful change or test;
- evidence of the result.

These do **not** justify escalation:

- “make it better” without a reference or criteria;
- missing files, credentials, dependencies, or permissions;
- a broken or incompatible environment;
- asking the same model the same vague question twice;
- changing several variables at once;
- a visual disagreement that the human has not articulated;
- a failure caused by stale caches, the wrong URL, or an unstarted server.

### Diagnosis before escalation

Classify the failure first:

| Cause | Typical signal | Correct first response |
|---|---|---|
| Specification | Different people expect different outcomes | Clarify scope, state, and acceptance evidence |
| Context | Agent lacks the right file, error, reference, or history | Supply minimal relevant context |
| Visual | It works but feels generic, unbalanced, or off-reference | Human identifies concrete visual deltas; compare at matched conditions |
| Logic | Reproducible behavior is wrong | Isolate state/input/output; add a failing test where useful |
| Architecture | Local fixes create repeated coupling or inconsistency | Map ownership and data flow; use an architecture-capable model |
| Environment | It differs by machine, branch, config, browser, cache, or runtime | Reproduce in the correct environment and record versions |

Escalate only when the diagnosis and attempt justify the cost.

### Compact routing rule for project templates

```text
Before acting on any prompt, give a three-part verdict — MODEL / EFFORT /
MODE — each named exactly, plus a one-line why.
MODEL default: Sonnet 5 for routine work; Opus 4.8 high for architecture,
many-file changes, or a bug surviving two proper Sonnet attempts;
Fable 5 max/ultracode only for exceptional work or after proper Sonnet
and Opus attempts; GPT-5.6 Sol for complex engineering, long-context
implementation, hard audits, and independent review; Kimi K3 for
reference-driven frontend only after a bake-off; Gemini/Antigravity for
exploratory browser QA only.
EFFORT: low / medium / high / max-ultracode — the lowest that reliably works.
MODE: PLAN, ASK-each-time, or AUTO-accept (never bypass/full-auto).
If any of the three is wrong, name the correct one and stop until the human
confirms the switch. If they don't switch, next message ask why and
re-encourage before proceeding. Copyable prompts always go in a code block.
```

---

## 5. Choose a project track

Choose once in Phase 0 and record the decision in `/docs/PROJECT_STATUS.md`.

### Practice track

Use for personal learning, prototypes, portfolio experiments, and non-client work with no sensitive data or commercial dependency.

`[REQUIRED]`

- Keep secrets out of Git.
- Use meaningful checkpoints.
- Run the project’s checks.
- Include accessibility, responsive, and performance review.
- Record what was not verified.

`[RECOMMENDED]`

- Use a private repository while the work is rough.
- Use one feature branch when the task is risky; direct local work on `main` can be acceptable for a disposable solo exercise, but pushing should still be intentional.
- Deploy a preview before calling the project finished.
- Practice rollback and handover once, even if the recipient is “future you.”

### Client track

Use whenever another person or business relies on the result, confidential material exists, real users submit information, money/reputation is at stake, or the site will become a production business asset.

`[REQUIRED]`

- Private repository. Free software is not a reason to publish client code or content.
- Protected `main`; changes enter through pull requests.
- CI passes before merge.
- Cloudflare preview and production environments are separate.
- Protect previews with Cloudflare Access when they expose confidential client work.
- Human content, visual, accessibility, device, form, and launch review.
- Separate environment variables and credentials.
- Monitoring, rollback, written sign-off, handover, and change control.
- Use the actual accountable human as reviewer. Do not invent a nonexistent “second reviewer.”

### Prototype-to-client transition

If a practice project becomes client work:

1. Stop new feature work.
2. Remove test data and rotate any exposed credentials.
3. Move to a private client-owned or contractually agreed repository.
4. establish protected `main`, pull requests, CI, environments, access controls, ownership, and documentation;
5. re-audit dependencies, licenses, accessibility, privacy, security, content rights, analytics, forms, and deployment;
6. obtain written approval before treating the prototype as production.

---

## 6. Minimal documentation system

### Always create

| File | Purpose |
|---|---|
| `CLAUDE.md` (repo root) | Instruction file Claude Code reads automatically each session; from the Section 21 template |
| `AGENTS.md` (repo root) | Vendor-neutral instruction file other agents read; identical intent to `CLAUDE.md`, from the Section 21 template |
| `.claude/settings.json` | The golden-rule enforcement hook (Section 21) |
| `/docs/PLAYBOOK.md` | The project-specific operating rules derived from this manual |
| `/docs/PROJECT_STATUS.md` | Current truth: phase, branch, decisions, blockers, checks, next action |
| `/docs/SPEC.md` | Users, goals, scope, states, content, acceptance criteria, exclusions |
| `/docs/DESIGN.md` | Visual system, references, responsive behavior, accessibility, motion direction |

### Create only when needed

| File | Use it when… |
|---|---|
| `/docs/CONTENT.md` | copy, assets, metadata, redirects, or ownership need tracking |
| `/docs/ARCHITECTURE.md` | data flow, integrations, rendering, CMS, APIs, or boundaries are non-trivial |
| `/docs/MOTION.md` | animation ownership, choreography, 3D, scroll, or reduced-motion behavior matters |
| `/docs/OPERATIONS.md` | deployment, DNS, environments, monitoring, rollback, forms, or secrets need a runbook |
| `/docs/DECISIONS.md` | durable choices need rationale and consequences |
| `/docs/TEST_PLAN.md` | risks, browsers, devices, journeys, and evidence exceed a simple checklist |
| `/docs/HANDOVER.md` | a client or future maintainer will receive the project |
| `/docs/references/` | approved screenshots, source assets, annotations, and comparison views are authoritative |

### Documentation rules

- `[REQUIRED]` Each decision has one authoritative home; other files link to it.
- `[REQUIRED]` `/docs/PROJECT_STATUS.md` is current, not a diary.
- `[REQUIRED]` Clearly label assumptions, unresolved questions, deferred work, and unverified checks.
- `[RECOMMENDED]` Prefer short tables and checklists over essays.
- `[RECOMMENDED]` Record why a decision was made when a future maintainer might otherwise reverse it.
- `[REQUIRED]` Never paste secrets, access tokens, private customer data, or confidential credentials into documentation or prompts.

The full copy-ready status template is in Section 21.

---

## 7. Model and tool guide

### Model roles

The routing table is policy; the following notes help apply it.

#### Claude Sonnet 5

Use for most implementation once the specification is clear: components, styles, content integration, routine refactors, ordinary tests, and documentation. If it fails, improve the context before spending more.

#### Claude Opus 4.8

Use when the task has real architectural depth, many coupled files, or a well-evidenced bug has survived two proper Sonnet attempts. “The page looks average” is not automatically an Opus task; articulate the visual problem first.

#### Claude Fable 5

Use for exceptional synthesis, difficult long-running work, or the final escalation path after proper lower-cost attempts. Max/ultracode is a scarce gate, not a default setting. It still needs requirements, tests, and human review.

> `[PERSONAL RULE]` **Fable budget — 2 sessions per project.** A per-project budget of two Fable sessions exists *because this founder specifically tends to reach for the most expensive model when anxious, and it has repeatedly cost real usage.* It is a self-control mechanism, honestly labelled — not an engineering rule. The agent tracks how many times Fable has been opened on the current project and, on a third attempt, pauses to ask whether the problem genuinely justifies it (per the escalation conditions in Section 4). If it does, use Fable — the budget exists to force that pause, not to forbid the tool.

#### GPT-5.6 Sol

Use for complex engineering, long-context implementation, difficult audits, review of another model’s work, and high-risk technical verification. Independent review is valuable because a different model family may notice different assumptions; it is not automatic correctness.

#### Kimi K3

Treat K3 as a candidate for reference-driven frontend, animation, and responsive work. Run the bake-off on the project’s real stack and real reference. A public benchmark does not replace that evidence.

#### Gemini through Antigravity

Use for exploratory browser passes, user-flow simulation, responsive viewport sweeps, screenshots, and workflow observation. Browser-agent output is supplementary: a human still reviews the actual experience, and deterministic tests still protect critical behavior.

### Tools are roles, not magic

| Tool | Good role | Not sufficient for |
|---|---|---|
| IDE agent | Repository-aware implementation and diagnostics | Product taste, legal approval, production sign-off |
| Browser automation | Repeatable journeys, screenshots, console/network evidence | Real-device feel or complete accessibility |
| axe-core | Automated accessibility defect detection | WCAG conformance or keyboard/screen-reader judgment |
| Lighthouse | Reproducible lab diagnostics | Real-user performance or launch proof |
| CodeRabbit or other AI review | Optional second-pass suggestions | Passing CI, security assurance, or human review |
| Cloudflare preview | Shareable environment and integration evidence | Confidentiality unless access is configured |
| Image/model generator | Exploration and source material | Brand rights, production optimization, or exact art direction |

`[REQUIRED]` Every generated or AI-reviewed artifact remains subject to the same acceptance criteria as human-written work.

### Prompt structure for implementation tasks

Use:

```text
Goal:
In scope:
Out of scope:
Authoritative files/references:
Current behavior:
Target behavior:
Acceptance criteria:
Required automated checks:
Required manual/visual checks:
Permission boundaries:
Documentation to update:
```

This structure is more valuable than theatrical role-playing or a huge unsorted context dump.

---

## 8. The bake-off protocol

Use a bake-off before assigning a model a recurring specialist role, especially visual implementation.

1. Choose one representative, bounded slice from the real project.
2. Freeze the same starting commit, prompt, references, environment, time budget, and permission mode for every candidate.
3. Run each candidate in a separate branch or clean worktree; do not let one see another’s solution.
4. Run the same automated checks and capture the same viewport/device evidence.
5. Blind-review the result where practical using the criteria below.
6. Record defects, human cleanup time, token/cost/time data if available, and unsupported claims.
7. Choose the winner for that task class only; keep the evidence and repeat when the stack or model changes materially.

### Evaluation criteria

Score or describe:

- reference fidelity;
- hierarchy, composition, typography, and spacing;
- responsive behavior;
- interaction and motion quality;
- accessibility;
- semantic and maintainable code;
- performance;
- correctness of states and content;
- test quality;
- number and severity of defects;
- human correction time;
- instruction-following and honesty about unverified work.

`[REQUIRED]` Do not alter the criteria after seeing which model produced a result.

`[RECOMMENDED]` Prefer a short written verdict over a fake precision score. “K3 preserved the reference composition but needed two accessibility repairs” is more useful than “92/100.”

---

## 9. Git, branches, permissions, and checkpoints

### Core Git rules

- `[REQUIRED]` Inspect `git status`, current branch, and relevant diff before editing.
- `[REQUIRED]` Treat existing uncommitted changes as the human’s work unless provenance is certain.
- `[REQUIRED]` Never discard, overwrite, reset, clean, or rewrite history without explicit approval.
- `[REQUIRED]` Never commit generated secrets, `.env` files, customer data, build caches, or unnecessary binaries.
- `[REQUIRED]` Never commit or push merely because a task ended.
- `[REQUIRED]` Show or summarize the scoped diff and checks before asking to commit.
- `[REQUIRED]` Push, merge, deploy, tag, publish a package, change DNS, or modify production only with explicit authority.
- `[RECOMMENDED]` Keep commits single-purpose and reversible.

### Fix versus revert

Use a **forward fix** when:

- the cause is understood;
- the correction is small and testable;
- no active incident demands immediate restoration;
- preserving intervening work matters.

Use a **revert** when:

- a deployed change causes an incident;
- the last known-good state is clear;
- diagnosis will take longer than safe restoration;
- reverting will not destroy unrelated data or migrations.

Before either action, inspect dependencies, data/schema implications, other people’s work, and deployment state. “Always revert” and “always fix forward” are both unsafe.

### Branch policy

#### Practice track

- One local branch can be enough for a small disposable exercise.
- Use a feature branch for risky, multi-file, or experimental work.
- Keep the default branch runnable.
- `[RECOMMENDED]` For a solo beginner, keep one active implementation branch at a time unless parallel independent work or an urgent hotfix justifies another. This is a clarity default, not an absolute technical law.
- `[PERSONAL RULE]` **Auto-checkpoint habit (practice track only).** On a practice repository, the agent commits a checkpoint *before* starting a coding task (message: `checkpoint before [task]`) and commits + pushes *after* the human confirms the result looks right — without being asked each time. This exists because this founder asked to stop thinking about Git while learning; the checkpoint is the undo point. It is a personal habit, not an engineering law, and it applies **only** on practice repositories. It does **not** apply to client work, where every commit and push is inspected and explicitly approved per the client track and Section 9's approval policy. If a change goes wrong, the agent offers to revert to the last checkpoint rather than patching on top of broken code.

#### Client track

- `[REQUIRED]` Protect `main`.
- `[REQUIRED]` Work through named feature/fix branches and pull requests.
- `[REQUIRED]` Require the configured checks before merge.
- `[REQUIRED]` Use one normal delivery path; do not create parallel permanent branches for environments.
- `[REQUIRED]` A hotfix branch is the exception for an urgent production correction and must be merged back into the normal history.

Do not invent a second human reviewer. If the solo founder is the only reviewer, configure the strongest available checks, use an independent model audit where appropriate, and record the actual human approver.

### Checkpoints

A checkpoint is useful after:

- a specification or architecture decision;
- a verified vertical slice;
- a risky migration;
- an approved visual gate;
- an integration milestone;
- a launch candidate;
- a production hotfix.

A checkpoint is not automatically a commit. First:

1. inspect the diff;
2. run the agreed checks;
3. record known limitations;
4. ask the human whether to commit;
5. ask separately before push or deployment if not already authorized.

### Permission modes

Use vendor-neutral boundaries:

| Mode | Meaning | Typical use |
|---|---|---|
| **Review-only** | Read, diagnose, and report; no edits | Audits, incident triage, unfamiliar repositories |
| **Plan** | Inspect and propose exact changes; no edits | Architecture, scope, risky migrations |
| **Bounded edit** | Edit named project files and run local checks | Normal implementation |
| **Ask for consequential actions** | Pause before network installs, external writes, Git publication, infrastructure, data changes, or destructive commands | Default safety boundary |

`[REQUIRED]` Client work must never use a broad bypass mode that allows destructive or production actions without confirmation.

`[REQUIRED]` Reading local project files and running non-destructive local checks can be pre-authorized. Secrets, production, billing, external messages, publication, destructive Git, database mutation, and access-control changes remain human-approved.

### Collaborative approval and auto-edit policy

Auto-edit permission and command permission are separate. Allowing Claude to edit named project files does not authorize shell commands, network access, Git publication, deployment, credentials, or external-system changes.

#### Bounded auto-edit

Auto-accept file edits only when all of the following are true:

- work is on a clean feature branch, isolated worktree, or new empty project folder created for this task;
- the task has clear scope and acceptance criteria;
- Claude has identified the files it expects to change;
- changes stay inside the project repository;
- no secret, credential, production data, billing, access control, or external system is involved;
- the change is easy to inspect and reverse;
- relevant automated or manual validation is available.

Auto-edit permission never authorizes Claude to commit, push, merge, deploy, delete unrelated files, or rewrite Git history.

#### Routine actions that may be pre-approved

These may proceed without repeated approval when they are project-local, non-destructive, and already understood:

- reading and searching project files;
- inspecting Git status, the current branch, and diffs;
- editing the files named in the agreed task;
- running already-reviewed project scripts for linting, type-checking, tests, and builds;
- running local read-only diagnostics.

Claude must report unexpected output, unexplained file changes, network access, or failures before continuing.

#### Manual approval required

Pause before:

- running a temporary, generated, or unfamiliar script;
- running a Node, Python, or shell command whose behavior has not been established;
- installing, removing, or upgrading packages;
- downloading from or writing to the network;
- creating, moving, changing, or deleting files outside the agreed task;
- deleting important project files;
- committing, pushing, merging, rebasing, tagging, or publishing;
- running `git reset`, `git clean`, history rewrites, or other destructive Git commands;
- deploying or changing DNS, hosting, CI, access, billing, or infrastructure;
- running database migrations or commands against external data;
- reading, displaying, rotating, or modifying credentials and secrets;
- sending messages or making changes in external services;
- accessing or modifying anything outside the project folder;
- performing any action that could affect production or another person’s work.

#### Approval explanation

Before requesting approval, Claude explains:

- the exact command or action;
- what it will do and why it is necessary now;
- which files it may create, change, move, or delete;
- whether it uses the network or an external service;
- whether it may access credentials, private data, or production;
- how the result will be checked;
- how the action can be reversed, when applicable.

If Claude cannot explain the action confidently, it must not run it.

#### After every edit task

Before requesting a commit:

1. inspect Git status and the final diff;
2. confirm no unrelated file was changed;
3. run the relevant automated checks;
4. perform the required visual or manual checks;
5. update `/docs/PROJECT_STATUS.md`;
6. report what changed, what passed, what failed, and what remains unverified;
7. ask separately before committing or pushing.

A clean branch protects working history, but it is not a complete backup. Important checkpoints should be committed intentionally and backed up to an approved remote or another secure location, without secrets.

---

## 10. Framework, Cloudflare, and environment decisions

Choose architecture from requirements, not fashion.

### Framework decision

| Choose | When it is a good fit | Watch for |
|---|---|---|
| **Plain HTML/CSS/JavaScript** | Small static site, few pages, minimal content churn, no component system needed | Manual reuse can become inconsistent as the site grows |
| **Astro** | Content-led marketing site, strong static output, selective interactive islands, Markdown/content collections | Confirm every required integration and adapter |
| **Next.js** | Application behavior, authentication, substantial server logic, React ecosystem requirement, complex dynamic rendering | More runtime and deployment complexity; verify Cloudflare compatibility before committing |
| **CMS-backed site** | Non-technical editors need structured updates, publishing workflow, localization, or frequent content change | Content model, preview, access, webhooks, caching, backups, and vendor lock-in |

`[REQUIRED]` Record the decision, rejected alternatives, rendering model, deployment target, and known compatibility constraints in `/docs/ARCHITECTURE.md` or `/docs/DECISIONS.md`.

`[RECOMMENDED]` For a premium brochure site, begin with plain HTML or Astro unless a concrete requirement justifies application complexity.

### Cloudflare deployment guide

Cloudflare is this playbook’s deployment default, not a universal truth.

Cloudflare hosting and access controls do not replace source review tools such as CodeRabbit; CodeRabbit does not replace hosting, access control, CI, or human review. They solve different problems.

#### Static output

Use **Cloudflare Pages** for static HTML and frameworks that produce a supported static build. Record:

- build command;
- output directory;
- Node/package-manager versions;
- production branch;
- preview behavior;
- environment variables;
- redirects, headers, and custom-domain configuration.

#### Full-stack Next.js

Use **Cloudflare Workers with the OpenNext adapter** for full-stack Next.js when the required Next.js features are supported. Before implementation:

1. list the exact framework features the project uses;
2. compare them with current Cloudflare/OpenNext support and caveats;
3. build a deployment spike in Phase 3;
4. test preview and production-like runtime behavior;
5. record unsupported or modified behavior.

Do not assume that a locally successful Next.js build is deployable on every runtime.

#### Preview access

Cloudflare Pages preview deployments are public by default.

- `[REQUIRED]` Client previews containing confidential work must be protected with Cloudflare Access or an approved equivalent.
- `[REQUIRED]` Test the access policy from a signed-out browser.
- `[REQUIRED]` Share the protected URL only with intended reviewers.
- `[RECOMMENDED]` Keep non-sensitive practice previews public only when that is an intentional portfolio choice.

#### Environment separation

Maintain explicit environments:

| Environment | Purpose | Data and credentials |
|---|---|---|
| Local | Development | Local/test values only |
| Preview/staging | Review and integration | Non-production or safely scoped credentials |
| Production | Live users | Production credentials, least privilege |

- `[REQUIRED]` Never reuse production secrets in local or public preview environments without a justified, tightly scoped exception.
- `[REQUIRED]` Document variable names and owners, never their secret values.
- `[REQUIRED]` Test missing, invalid, and expired configuration.
- `[REQUIRED]` Rotate a credential after suspected disclosure.

#### Forms and Turnstile

When Cloudflare Turnstile is used:

- render the widget/client integration correctly;
- submit its token with the form;
- verify the token **server-side** with Siteverify;
- bind verification to the intended action/hostname where applicable;
- handle expired, duplicate, missing, and failed tokens;
- keep the secret key server-side;
- rate-limit and validate the underlying endpoint as appropriate.

Client-side success alone is not security.

#### Rollback

Before launch, record:

- last known-good deployment;
- how to find and promote/rollback to it;
- who can perform the action;
- database, CMS, schema, and cache implications;
- DNS considerations;
- how to verify restoration;
- how the repaired change returns through normal Git history.

Practice the procedure in a non-production environment when the project risk warrants it.

---

## 11. The complete project lifecycle

### Phase contract

Each phase below has the same required fields so a beginner and an agent can see who does what, what evidence is needed, and when to stop.

Do not skip directly to visual polish because a generator can produce a page quickly. The fastest durable route is to remove uncertainty in the cheapest phase.

### Phase 0 — Initialize the project

**Purpose**

Create a safe, inspectable foundation and decide how the project will be governed.

**Inputs**

- project idea or client brief;
- known owner and stakeholders;
- repository access;
- intended domain and deployment preference;
- initial confidentiality and data classification;
- practice/client track choice.

**Recommended model category**

Claude Sonnet 5 for routine setup. Use GPT-5.6 Sol for an independent repository/security audit or Opus 4.8 high only when inheriting a complex multi-system codebase.

**Permission mode**

Plan, then bounded edit. Ask before creating remote repositories, installing external services, changing billing, or pushing.

**Human responsibilities**

- Choose the track and accountable owner.
- Confirm repository visibility and commercial/confidential constraints.
- Approve external accounts, costs, access, and remote publication.
- Supply the real brief and known deadlines.

**Agent responsibilities**

- Inspect existing files, Git state, instructions, and toolchain.
- Identify conflicts, secrets risk, and unknown ownership.
- Propose the minimal documentation and scaffold.
- Avoid overwriting existing work.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Inventory the repository without editing.
3. Classify the project as practice or client.
4. Create or confirm `.gitignore`, package-manager policy, runtime versions, and folder conventions.
5. Create the root instruction files `CLAUDE.md` and `AGENTS.md` from the Section 21 templates, and add the golden-rule enforcement hook from Section 21 in `.claude/settings.json`.
6. Create `/docs/PLAYBOOK.md` as a concise project-specific operating file **derived from this master playbook** (it is not a Section 21 template — copy the applicable operating rules across, keeping the golden model-routing rule, the approval/auto-edit policy, Git safety, the chosen track, required checks, and the collaboration rhythm).
7. Create `/docs/PROJECT_STATUS.md`, `/docs/SPEC.md`, and `/docs/DESIGN.md` from the Section 21 templates.
8. Add optional documents only when justified.
9. Record branch, environment, deployment, access, and unresolved decisions.
10. For client work, configure private repository, protected `main`, pull-request path, and access ownership.
11. Run a secret scan or repository search appropriate to the stack.
12. Ask before the first commit or remote push.

**Files created or updated**

- `.gitignore`
- package/runtime configuration as applicable
- `CLAUDE.md` and `AGENTS.md` (root instruction files)
- `.claude/settings.json` (golden-rule enforcement hook)
- `/docs/PLAYBOOK.md`
- `/docs/PROJECT_STATUS.md`
- `/docs/SPEC.md`
- `/docs/DESIGN.md`
- optional `/docs/DECISIONS.md`

**Automated checks**

- repository and package-manager commands resolve;
- secret scan/search has no unresolved exposed value;
- formatting/Markdown checks if configured;
- base install/build only if a codebase already exists.

**Manual checks**

- repository visibility is correct;
- no client/private material is unintentionally public;
- documented owner, branch, and target environment match reality;
- existing human changes remain intact.

**Completion gate**

The project track, owner, repository policy, documentation baseline, permissions, and immediate next task are explicit; no known secret is in Git.

**Next step**

Proceed to Phase 1 and turn the brief into a testable specification.

**Failure guidance**

- Missing access or files: record the blocker; do not fabricate the codebase.
- Dirty inherited repository: preserve changes and ask about ownership only if safe inspection cannot resolve it.
- Secret found: stop publication, remove it safely, rotate it, and inspect history before continuing.

### Phase 1 — Define specification and scope

**Purpose**

Convert ambition into a bounded product with observable states and acceptance criteria.

**Inputs**

- brief;
- business goal and primary audience;
- content inventory;
- current site/data when replacing something;
- deadline, budget, legal, accessibility, browser, and integration constraints.

**Recommended model category**

Claude Sonnet 5 for a clear brief; Opus 4.8 high for conflicting stakeholders, complex application behavior, or many integrations; GPT-5.6 Sol for an independent ambiguity/risk audit.

**Permission mode**

Plan/review-only until the human approves scope; bounded documentation edit afterward.

**Human responsibilities**

- State the business truth, audience, conversion goal, and exclusions.
- Decide priorities and resolve trade-offs.
- Identify content owners and approval authority.
- Approve the written specification.

**Agent responsibilities**

- Extract assumptions, contradictions, missing states, and dependencies.
- Propose measurable acceptance criteria.
- Separate launch requirements from later ideas.
- Keep visual taste questions visible for Phase 2.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Define the primary user and one primary outcome.
3. List routes/pages, key journeys, components, integrations, content, and data.
4. Define loading, empty, error, success, permission, offline, and reduced-motion states where relevant.
5. Define responsive and accessibility expectations.
6. Define SEO, analytics, privacy, cookie, form, CMS, localization, and browser/device requirements.
7. List explicit non-goals.
8. Turn each requirement into acceptance evidence.
9. Identify client-supplied dependencies and deadlines.
10. Review for scope gaps and obtain human approval.

**Files created or updated**

- `/docs/SPEC.md`
- `/docs/CONTENT.md` when needed
- `/docs/PROJECT_STATUS.md`
- `/docs/DECISIONS.md` for durable scope choices

**Automated checks**

No code check proves scope. Run link/Markdown checks if configured and verify every acceptance criterion has an identifier or checklist entry.

**Manual checks**

- human can explain what is in and out;
- every user journey has start, success, and failure behavior;
- content and approval owners are real people;
- “premium,” “fast,” and “responsive” have project-specific evidence.

**Completion gate**

The accountable human approves a versioned scope with routes, states, content ownership, constraints, acceptance criteria, exclusions, and launch boundary.

**Next step**

Proceed to Phase 2 to establish content and design direction before architecture.

**Failure guidance**

- Vague request: do not choose a bigger model; ask for business and user decisions.
- Conflicting scope: present options with consequences and require a human decision.
- Missing client content: use clearly labeled placeholders only if the launch plan and replacement owner are recorded.

### Phase 2 — Establish content and design direction

**Purpose**

Create a coherent visual/content system that implementation can verify rather than improvise.

**Inputs**

- approved specification;
- brand assets and rights;
- content/copy;
- visual references;
- competitor or current-site audit;
- accessibility and device constraints.

**Recommended model category**

Claude Sonnet 5 for documentation and systemization; a bake-off candidate such as Kimi K3 for reference-driven frontend exploration; GPT-5.6 Sol for design-system/implementation audit. Human art direction remains decisive.

**Permission mode**

Plan and bounded asset/document edits. Ask before generating paid assets, using third-party material, or changing official brand files.

**Human responsibilities**

- Select authoritative references and explain what is liked in each.
- Approve copy, hierarchy, art direction, brand treatment, and content rights.
- Reject generic “AI slop” with concrete deltas rather than adjectives alone.
- Approve the design direction at target viewports.

**Agent responsibilities**

- Translate references into layout, typography, spacing, color, material, image, motion, and responsive rules.
- Preserve exact brand assets; never redraw a supplied logo casually.
- Identify asset gaps and rights/format/performance risks.
- Produce structured tokens and component/state inventory.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Freeze the approved reference set in `/docs/references/`.
3. Annotate hierarchy, grid, rhythm, density, typography, imagery, color, texture, lighting, and motion—not just mood.
4. Finalize or clearly stage content; map it to routes.
5. Define design tokens and responsive behavior.
6. Define components and every interactive state.
7. Define accessibility requirements: semantics, focus, contrast, zoom, motion, target size, alternatives.
8. Define the signature moment and what it must not compromise.
9. Define objective comparison views and viewport sizes.
10. Obtain human approval before broad implementation.

**Files created or updated**

- `/docs/DESIGN.md`
- `/docs/CONTENT.md`
- `/docs/MOTION.md` when applicable
- `/docs/references/*`
- `/docs/PROJECT_STATUS.md`
- optional token/source-asset files

**Automated checks**

- asset dimensions/formats and duplicate/oversized-file checks;
- color-contrast calculations for proposed token pairs;
- link or content schema validation if configured.

**Manual checks**

- reference annotations describe reusable design logic;
- official logos and supplied artwork remain exact;
- mobile and desktop hierarchy work with real content;
- focus and reduced-motion treatments are represented;
- no important design depends only on bloom, hover, sound, or color.

**Completion gate**

The human approves content direction, authoritative references, design system, representative responsive compositions, interaction states, and signature-effect boundaries.

**Next step**

Proceed to Phase 3 to choose the smallest architecture that can deliver the approved system.

**Failure guidance**

- Output feels generic: compare against references at matched size and name specific hierarchy/material/typography/spacing deltas.
- Brand asset is poor quality: request the correct source; do not silently invent it.
- Content is unstable: freeze layout-critical lengths or create an explicit content-risk plan.

### Phase 3 — Choose architecture and scaffold

**Purpose**

Prove that the selected stack, deployment, quality tooling, and environment can support the specification before feature expansion.

**Inputs**

- approved specification and design;
- integration requirements;
- editing/CMS needs;
- deployment target;
- package/runtime constraints;
- required checks.

**Recommended model category**

Opus 4.8 high for genuinely complex architecture; Claude Sonnet 5 for a straightforward static/Astro scaffold; GPT-5.6 Sol for a long-context architecture or deployment compatibility review.

**Permission mode**

Plan, then bounded edit. Ask before dependency installation, remote service creation, infrastructure, secrets, or deployment.

**Human responsibilities**

- Approve stack, vendor, recurring cost, data location, and operational ownership.
- Provide authorized service accounts and credentials through secure channels.
- Approve material lock-in or maintenance trade-offs.

**Agent responsibilities**

- Compare plain HTML, Astro, Next.js, and CMS options against actual requirements.
- Record the chosen rendering and data model.
- Scaffold only what is needed.
- Configure deterministic checks and a deploy spike.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Write the architecture decision and rejected alternatives.
3. Pin runtime/package-manager expectations and generate the scaffold.
4. Establish tokens, global semantics, layout primitives, error boundaries/states, and asset conventions.
5. Add lint, typecheck, tests, build scripts, accessibility automation, and browser-test foundation appropriate to the stack.
6. Create CI as a scaffold phase, not launch cleanup.
7. Configure environment-variable contracts without secret values.
8. Create a minimal Cloudflare preview deployment.
9. If using Next.js, verify current Workers/OpenNext support for every required server feature.
10. Verify local, CI, and preview builds; document commands and rollback.

**Files created or updated**

- application scaffold and configuration
- dependency lockfile
- CI workflow
- `/docs/ARCHITECTURE.md`
- `/docs/OPERATIONS.md`
- `/docs/TEST_PLAN.md` when needed
- `/docs/PROJECT_STATUS.md`
- `/docs/DECISIONS.md`

**Automated checks**

At minimum for an npm project, make these real and green:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Use the recorded equivalent for another package manager with a frozen lockfile. Also run a smoke browser test and automated accessibility scan when the scaffold renders UI.

**Manual checks**

- fresh clone/install instructions work;
- preview URL serves the expected commit;
- environment separation is visible;
- protected preview behavior is tested when required;
- browser console and network panel show no unexplained errors.

**Completion gate**

A clean checkout can install, check, build, and deploy a minimal preview using documented commands; the architecture supports every known requirement or records an approved exception.

**Next step**

Proceed to Phase 4 and build one representative end-to-end vertical slice.

**Failure guidance**

- Runtime incompatibility: stop feature work, reproduce minimally, change architecture or feature usage, and record the decision.
- CI differs from local: compare versions, lockfiles, environment, case sensitivity, generated files, and commands.
- Scaffold is bloated: remove unjustified abstractions before product code depends on them.

### Phase 4 — Build the representative vertical slice

**Purpose**

Prove the complete quality bar on one real route or journey before multiplying patterns.

**Inputs**

- working scaffold;
- approved design and real or representative content;
- one route containing typical layout, navigation, media, states, interaction, and responsive challenges;
- acceptance criteria and comparison viewports.

**Recommended model category**

Claude Sonnet 5 for normal implementation; Kimi K3 only if it won the project bake-off for this reference-driven task; GPT-5.6 Sol for complex engineering or an independent audit.

**Permission mode**

Bounded edit. Ask before adding dependencies, external services, paid assets, or changing architecture.

**Human responsibilities**

- Review the real route frequently at agreed viewports.
- Decide visual hierarchy, taste, content, and reference fidelity.
- Test the experience directly rather than approving screenshots alone.
- Approve the vertical slice as the repeatable standard.

**Agent responsibilities**

- Implement semantics and states before decorative complexity.
- Match references through measurable structure and explicit visual deltas.
- Keep components/tokens reusable without premature abstraction.
- Add tests for important behavior and update documentation.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Select the slice and freeze its acceptance checklist.
3. Build semantic content structure and responsive layout.
4. Implement navigation, focus behavior, loading/error/empty/success states, and real content.
5. Add baseline automated behavior and accessibility tests.
6. Match typography, spacing, media treatment, and component states to the approved design.
7. Add only the motion needed to prove the motion system.
8. Compare at identical viewport, zoom, content, and state; log concrete deltas.
9. Run checks, inspect on a real phone and desktop browser, and repair failures.
10. Obtain human visual/functional approval and document the proven pattern.

**Files created or updated**

- representative route/page and components
- design tokens/styles
- tests and fixtures
- `/docs/DESIGN.md`
- `/docs/MOTION.md` if applicable
- `/docs/PROJECT_STATUS.md`
- `/docs/DECISIONS.md` for durable pattern choices

**Automated checks**

- lint, typecheck, unit/component tests, build;
- browser smoke test for the critical slice;
- axe-core scan of initial and revealed interactive states;
- screenshot tests only for stable, useful regions;
- asset-size and broken-link checks as applicable.

**Manual checks**

- keyboard-only journey and visible focus;
- 200% zoom/reflow and text resize;
- reduced motion;
- narrow mobile, common desktop, and at least one real device;
- content accuracy, hover/focus/active/disabled/error/success states;
- reference comparison under matched conditions;
- console/network errors.

**Completion gate**

The slice is approved by the human, passes required checks, works on target devices, establishes the implementation/motion/accessibility pattern, and has no unexplained critical defect.

**Next step**

Proceed to Phase 5 and expand using the proven pattern.

**Failure guidance**

- Visual mismatch: diagnose typography, spacing, scale, framing, content, lighting, or motion separately; change one category at a time.
- Repeated local exception: revisit architecture only with evidence.
- Animation hides layout defects: disable it, approve the static composition, then restore motion.

### Phase 5 — Build the remaining pages and states

**Purpose**

Extend the approved system across the complete launch scope without quality drift.

**Inputs**

- approved vertical slice;
- route/state inventory;
- complete or staged content;
- component and token system;
- test plan.

**Recommended model category**

Claude Sonnet 5 for routine expansion. Use Opus 4.8 high only when a cross-page architecture problem emerges, and GPT-5.6 Sol for a broad consistency audit.

**Permission mode**

Bounded edit. Continue to ask before new dependencies, scope changes, or external actions.

**Human responsibilities**

- Supply and approve remaining content.
- Review pages in coherent batches.
- Decide intentional exceptions to the system.
- Prevent silent scope expansion.

**Agent responsibilities**

- Reuse proven patterns without forcing unsuitable content into them.
- Implement every specified state and responsive behavior.
- Keep page-specific code local and shared code genuinely shared.
- Maintain tests, status, and content tracking.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Order pages by risk and dependency, not easiest-first.
3. Complete shared navigation, footer, layout, typography, media, and form primitives.
4. Build routes in small reviewable batches.
5. Integrate approved content and metadata; label any placeholder.
6. Implement loading, empty, error, success, permission, not-found, and edge states.
7. Test responsive behavior as each route is built.
8. Run per-batch automated and human review.
9. Audit consistency without erasing deliberate page hierarchy.
10. Update status and remaining-scope checklist.

**Files created or updated**

- all in-scope routes/pages and shared components
- route/content configuration
- tests and fixtures
- `/docs/CONTENT.md`
- `/docs/PROJECT_STATUS.md`
- relevant specification/design decisions

**Automated checks**

- lint, typecheck, tests, and build on every batch;
- route/link crawl;
- axe scans for representative pages and opened states;
- browser tests for navigation and critical journeys;
- missing metadata/alt/content-schema checks where available.

**Manual checks**

- route-by-route content and layout review;
- keyboard and focus order;
- mobile landscape/portrait and desktop widths;
- browser back/forward, deep links, refresh, and 404;
- long/short content and localization stress where relevant;
- image loading, cropping, and alternatives.

**Completion gate**

Every launch route and defined state exists with approved content or an owned replacement plan, follows the proven system, and passes the project’s per-page checklist.

**Next step**

Proceed to Phase 6 for signature interactions and premium visual effects.

**Failure guidance**

- Quality drift: pause new pages and repair the shared system or review process.
- Missing content: assign owner/deadline; do not hide the risk with polished placeholder prose.
- Component resists reuse: prefer a clear variant or local component over a tangled universal abstraction.

### Phase 6 — Add signature interactions, motion, and 3D

**Purpose**

Create memorable movement and depth while preserving clarity, accessibility, stability, and performance.

**Inputs**

- approved static pages;
- motion direction and reduced-motion policy;
- interaction inventory;
- target devices and performance budget;
- approved 3D/video/assets.

**Recommended model category**

Claude Sonnet 5 for known interaction patterns; Kimi K3 if it won the motion/frontend bake-off; GPT-5.6 Sol for difficult implementation or audit; Opus 4.8 high for complex state/timeline architecture.

**Permission mode**

Bounded edit. Ask before installing animation/3D libraries, licensing assets, or enabling costly external processing.

**Human responsibilities**

- Approve the emotional purpose, tempo, and restraint of each signature moment.
- Test touch, motion comfort, and perceived responsiveness.
- Decide whether an effect earns its cost.
- Approve fallbacks on real devices.

**Agent responsibilities**

- Assign one owner per animated property.
- Keep semantic/static experience complete without motion.
- Implement reduced-motion and capability fallbacks.
- Clean up timelines, observers, canvases, listeners, and GPU resources.
- Measure rather than assume performance.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. For each effect, write purpose, trigger, owner, properties, states, duration, interruption behavior, reduced-motion alternative, and budget.
3. Implement the simplest capable technology first: CSS, then Motion or GSAP, then Canvas/WebGL/Three/R3F only when justified.
4. Ensure Motion and GSAP never write the same property on the same element at the same time.
5. Implement keyboard/touch parity and safe focus behavior.
6. Add reduced-motion and low-capability fallbacks.
7. Lazy-load heavy code/assets outside the critical path.
8. Add cleanup for unmount, route changes, context loss, visibility changes, and resize.
9. Test interruption, rapid input, navigation, background/foreground, and slow devices.
10. Human-review tempo and meaning; remove effects that do not improve the experience.

**Files created or updated**

- motion/effect components and styles
- asset loaders and fallbacks
- tests
- `/docs/MOTION.md`
- `/docs/PROJECT_STATUS.md`
- `/docs/DECISIONS.md` for significant technology choices

**Automated checks**

- unit tests for state transitions where useful;
- browser tests for key triggers and reduced-motion mode;
- build/bundle analysis;
- route navigation/unmount leak checks where tooling supports them;
- visual regressions only for deterministic states.

**Manual checks**

- no content, action, or orientation depends on animation;
- keyboard, touch, pointer, reduced motion, zoom, and screen resize;
- rapid repeated interaction and interrupted navigation;
- mid-range mobile device, battery/thermal observation for heavy effects;
- no flicker, stale timeline, scroll trap, focus loss, or persistent canvas;
- static fallback remains art-directed.

**Completion gate**

Every signature interaction has a purpose, owner, accessible fallback, cleanup path, performance evidence, and human approval; disabling motion leaves a complete experience.

**Next step**

Proceed to Phase 7 for forms, integrations, CMS, and SEO.

**Failure guidance**

- Jank: reduce work and visual complexity before reaching for more hardware or a larger model.
- Conflicting animation: identify ownership and remove duplicate writers.
- WebGL instability: simplify, lower resolution/detail, pause when hidden, dispose resources, and provide a non-WebGL fallback.

### Phase 7 — Integrate forms, services, CMS, analytics, and SEO

**Purpose**

Connect the site to real systems safely and make its content discoverable, operable, and measurable.

**Inputs**

- approved routes and interactions;
- service accounts and contracts;
- content model;
- form fields and destinations;
- privacy/legal decisions;
- SEO/redirect requirements.

**Recommended model category**

Claude Sonnet 5 for standard integrations; GPT-5.6 Sol for complex engineering, security review, and long-context integration; Opus 4.8 high for difficult data-flow architecture.

**Permission mode**

Plan, then bounded edit. Ask before external writes, service creation, credential/config changes, analytics activation, production data, webhooks, or deployment.

**Human responsibilities**

- Approve providers, costs, data collection, retention, recipients, legal copy, and consent.
- Provide credentials securely.
- Own CMS roles, form destinations, analytics property, and production accounts.
- Test real business workflows and received messages.

**Agent responsibilities**

- Implement least-privilege integration and server-side validation.
- Keep secrets server-side and environments separate.
- Handle all states and failures.
- Add metadata, structured data, sitemap, robots, canonical/redirect behavior as applicable.
- Document operations and ownership.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Map every external data flow, field, recipient, credential, and owner.
3. Define validation, consent, retention, abuse prevention, failure, retry, and observability.
4. Implement CMS schemas and preview/editor workflow where required.
5. Implement forms with server validation, output encoding, rate/abuse controls, and accessible errors/success.
6. When using Turnstile, verify every token server-side.
7. Configure analytics only after privacy/consent decisions.
8. Add metadata, social cards, canonical URLs, sitemap, robots, structured data, and redirects.
9. Test with non-production accounts/data, then perform an authorized production smoke test.
10. Update operations, security, content, and status records.

**Files created or updated**

- integration/form/CMS code and schemas
- environment-variable example (names only)
- metadata, sitemap, robots, redirects
- `/docs/ARCHITECTURE.md`
- `/docs/OPERATIONS.md`
- `/docs/CONTENT.md`
- `/docs/PROJECT_STATUS.md`

**Automated checks**

- unit/integration tests for validation and failures;
- browser tests for form success/error/abuse states;
- build and environment-contract validation;
- broken links and metadata checks;
- structured-data validation where practical;
- dependency and secret scanning.

**Manual checks**

- real email/CRM/CMS destination receives correct safe data;
- keyboard/screen-reader form behavior and error recovery;
- consent and analytics behavior in relevant regions/modes;
- preview versus production credentials and content;
- social sharing/search snippets and redirects;
- no secret appears in browser bundles, logs, screenshots, or Git.

**Completion gate**

Authorized humans verify the real workflows; data collection is documented and approved; all success/failure states work; SEO essentials and operational ownership are complete.

**Next step**

Proceed to Phase 8 for full hardening and launch-candidate testing.

**Failure guidance**

- Provider error: preserve user input safely, show actionable recovery, log non-sensitive diagnostics, and test provider status/config.
- Turnstile client appears successful but submissions fail: inspect server Siteverify request, hostname/action, token age/reuse, and secret environment.
- CMS content breaks layout: enforce model constraints and test realistic extremes rather than hard-coding around one entry.

### Phase 8 — Harden, test, and prepare the launch candidate

**Purpose**

Find and repair release-risk defects across behavior, accessibility, security, compatibility, content, and performance.

**Inputs**

- feature-complete preview;
- target browsers/devices;
- test plan and acceptance criteria;
- performance budget;
- client content and legal approvals;
- operations/rollback draft.

**Recommended model category**

GPT-5.6 Sol for a comprehensive technical audit; Claude Sonnet 5 for routine repairs; Opus 4.8 high for defects that expose architectural problems. Use Gemini/Antigravity only as supplementary exploratory browser QA.

**Permission mode**

Review-only for the first audit, then bounded edit per approved defect batch. Ask before infrastructure, production-like data, dependency upgrades with broad impact, or publication.

**Human responsibilities**

- Perform real-device, content, taste, and business-journey review.
- Prioritize defects by launch risk.
- Approve documented exceptions and residual risk.
- Confirm client/legal/privacy/accessibility responsibilities.

**Agent responsibilities**

- Build a risk-based test matrix.
- Run deterministic automated checks and gather evidence.
- Reproduce and classify defects before repair.
- Keep fixes scoped; update tests and documentation.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Freeze feature scope except approved release blockers.
3. Create a launch-candidate commit identifier and preview.
4. Run install, lint, typecheck, unit/integration, browser, accessibility, build, dependency, secret, and link/metadata checks.
5. Test target browsers, viewports, real devices, network conditions, zoom, keyboard, reduced motion, and critical journeys.
6. Measure lab performance and gather available field/RUM evidence without confusing them.
7. Review console, network, headers, caching, error handling, logs, environment separation, and abuse controls.
8. Classify defects by severity, cause, owner, and proof of repair.
9. Re-run the relevant regression set after each repair batch.
10. Complete launch checklist, rollback rehearsal, and residual-risk approval.

**Files created or updated**

- tests, fixtures, and CI configuration
- `/docs/TEST_PLAN.md`
- `/docs/OPERATIONS.md`
- `/docs/PROJECT_STATUS.md`
- `/docs/DECISIONS.md` for accepted risk/waivers
- release evidence artifacts where the repository policy permits

**Automated checks**

At minimum:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Plus project-appropriate browser tests, axe scans, dependency/secret checks, link/metadata crawl, and bundle/performance diagnostics.

**Manual checks**

- full keyboard and focus journey;
- screen-reader spot checks on critical flows;
- zoom/reflow/text spacing;
- reduced motion, high contrast/forced colors where relevant;
- real mobile and desktop devices;
- slow network and error states;
- forms/integrations and received outcomes;
- content/legal/analytics/cookie review;
- visual comparison and perceived performance;
- rollback procedure.

**Completion gate**

All release blockers are repaired and re-tested; every required check is green or has an approved, recorded waiver; the human accepts residual risk and the launch candidate is identifiable and reversible.

**Next step**

Proceed to Phase 9 for independent review and controlled launch.

**Failure guidance**

- Large defect count: stop polishing, group by root cause, and repair the system.
- Automated/manual conflict: trust neither blindly; reproduce and inspect the exact state.
- Lighthouse score chase: repair user-impacting metrics/causes, not the number alone.

### Phase 9 — Independent review, launch, and handover

**Purpose**

Obtain a fresh review, release the approved candidate safely, verify production, and transfer operational ownership.

**Inputs**

- approved launch candidate and commit;
- passing evidence;
- deployment and rollback plan;
- DNS/domain access;
- monitoring and analytics plan;
- client sign-off and handover materials.

**Recommended model category**

GPT-5.6 Sol for independent technical review; Fable 5 only if the candidate has an exceptional unresolved synthesis risk that properly survived lower routes; Claude Sonnet 5 for routine release documentation and repairs.

**Permission mode**

Review-only for independent audit. Deployment, merge, DNS, production configuration, publication, and external communications require explicit human authority.

**Human responsibilities**

- Review and sign off content, visual quality, legal/privacy choices, and launch timing.
- Authorize merge/deploy/DNS actions.
- Hold or delegate production account ownership.
- Verify the live business journey and accept handover.

**Agent responsibilities**

- Give the reviewer a clean brief and evidence, not a leading narrative.
- Distinguish blocking defects from preferences.
- Execute only authorized release steps.
- Verify the exact production deployment and document the result.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. Give an independent reviewer the specification, candidate commit/URL, checks, known risks, and review scope.
3. Triage findings; accept only reproduced, relevant corrections.
4. Re-run affected checks and obtain final human sign-off.
5. Confirm backups, last known-good deployment, rollback steps, monitoring, contacts, and change freeze.
6. With explicit approval, merge and deploy the identified commit.
7. Verify production domain, TLS, headers, redirects, assets, key journeys, forms, analytics/consent, access, and error reporting.
8. Watch the defined post-launch window and compare expected signals.
9. Deliver handover and credential/account-transfer checklist without exposing secrets.
10. Tag/archive the release and update status, operations, handover, and changelog.

**Files created or updated**

- `/docs/HANDOVER.md`
- `/docs/OPERATIONS.md`
- `/docs/PROJECT_STATUS.md`
- `/docs/DECISIONS.md`
- release notes/changelog
- code/tests only for approved findings

**Automated checks**

- final CI on the merged commit;
- production smoke/browser checks;
- link/redirect and form/integration smoke checks;
- monitored error/availability signals;
- deployment commit/hash verification.

**Manual checks**

- production content/visual review on real devices;
- critical keyboard and form journeys;
- analytics/consent only where authorized;
- client receives correct access and can perform owned tasks;
- rollback target and instructions are accessible to the operator;
- no preview-only configuration leaked into production.

**Completion gate**

The authorized production commit is live, verified, monitored, reversible, signed off, and handed over with real ownership and no hidden required action.

**Next step**

Proceed to Phase 10 for maintenance, evidence collection, and controlled changes.

**Failure guidance**

- Production regression: stabilize first using the approved rollback/fix policy; preserve evidence.
- DNS/TLS propagation issue: avoid repeated uncontrolled changes; confirm authoritative configuration and expected propagation.
- Reviewer disagreement: map each finding to the specification/risk and require the accountable human to decide.

### Phase 10 — Maintain, improve, and hotfix

**Purpose**

Keep the site secure, correct, accessible, fast, and understandable after launch.

**Inputs**

- live service and monitoring;
- support reports;
- analytics/field performance where authorized;
- dependency/security notices;
- change requests;
- release and operations history.

**Recommended model category**

Claude Sonnet 5 for routine maintenance; GPT-5.6 Sol for audits, complex incidents, and long-context review; Opus 4.8 high for architectural degradation; Fable 5 only under the exceptional escalation rule.

**Permission mode**

Review-only for incident triage, then bounded edit. Production changes, data operations, dependency migrations, and deployment require explicit authority and the normal release path unless an approved incident process applies.

**Human responsibilities**

- Own support priority, budget, compliance, content, and change authorization.
- Decide emergency risk and customer communication.
- Review field evidence and approve roadmap changes.
- Keep account ownership and recovery methods current.

**Agent responsibilities**

- Reproduce, classify, and document incidents/defects.
- Prefer the smallest safe repair.
- Add regression evidence.
- Keep dependencies, operations, status, and handover current.

**Exact sequence**

1. Run the Golden Model-Routing Rule.
2. For an incident, record impact, start time, affected users, current deployment, and immediate containment.
3. Choose forward fix or revert using Section 9; obtain required approval.
4. Work in a hotfix branch only for urgent production correction.
5. Reproduce and add a regression test or documented verification.
6. Run proportional checks and deploy through the controlled path.
7. Verify production and monitor recovery.
8. Merge the hotfix back into normal history.
9. Schedule regular dependency, accessibility, performance, content, backup, credential, and link reviews.
10. Feed evidence into the retrospective and playbook changelog.

**Files created or updated**

- code/tests for the change
- `/docs/PROJECT_STATUS.md`
- `/docs/OPERATIONS.md`
- `/docs/DECISIONS.md`
- `/docs/HANDOVER.md` if ownership/operation changed
- incident/release notes according to project policy

**Automated checks**

- targeted regression plus normal CI;
- dependency/security checks;
- production smoke and monitoring;
- scheduled link/accessibility/performance checks where useful.

**Manual checks**

- the reported real-world symptom is gone;
- no adjacent journey regressed;
- client/owner confirms business recovery;
- documentation and recovery access remain accurate;
- field performance and accessibility are reviewed after material change.

**Completion gate**

The change is verified in the correct environment, normal history is reconciled, documentation is current, and follow-up/prevention work has an owner.

**Next step**

Return to the normal backlog, or begin a new Phase 1 scope for a material feature.

**Failure guidance**

- Cannot reproduce: collect environment, timing, input, logs, and user evidence; do not guess in production.
- Repeated hotfixes in one area: pause patches and commission an architecture/root-cause review.
- Dependency alert without exploitability context: assess reachability and vendor guidance, then patch proportionally; do not ignore or panic-upgrade.

---

## 12. Client-project controls

This section consolidates controls that are `[REQUIRED]` on the client track.

### Commercial and governance baseline

- Written scope, deliverables, exclusions, acceptance process, dates, payment terms, change-control mechanism, and post-launch support boundary.
- Named owner for content, brand assets, accounts, privacy/legal decisions, technical approval, launch authority, and maintenance.
- Confirm rights to fonts, images, copy, code, plugins, models, audio, video, trademarks, and generated assets.
- Record third-party services, recurring costs, plan limits, and who pays/owns them.
- Never promise that AI output is original, licensed, secure, accessible, or correct without verification.

### Repository and review

- Private repository with access limited to real participants.
- Protected `main`, pull requests, required **GitHub Actions** CI, and an honest solo-review policy.
- Feature branches for normal work; hotfix branch only for incidents.
- No blind commit, push, merge, or deployment.
- No public client repository merely to avoid paying for a private workflow.

### Environments and preview

- Separate local, preview, and production configuration.
- Protect confidential previews with Cloudflare Access or approved equivalent.
- Use test data in preview.
- Human review on the deployed preview and on real target devices.
- Every approval identifies the candidate commit or deployment.

### Release controls

- Content, accessibility, privacy, form/integration, browser/device, performance, and security review.
- Monitoring and owner-access verified before launch.
- Rollback documented and rehearsed proportionally.
- Written launch approval and post-launch verification window.
- Handover, recovery access, and support/change process delivered.

### Change control

For a request after scope approval, record:

```text
Request:
Requested by/date:
Reason:
In-scope or change:
Impact on pages/features:
Impact on content/design/accessibility/security/performance:
Impact on cost/timeline:
Dependencies:
Acceptance criteria:
Decision and approver:
Target release:
```

`[REQUIRED]` Do not hide scope expansion inside “small tweaks.” A visually small request can have content, responsive, integration, accessibility, or testing consequences.

---

## 13. Accessibility from the beginning

`[REQUIRED]` Use **WCAG 2.2 Level AA** as the default accessibility target unless a stricter contractual or legal standard applies. Accessibility begins in specification and design; it is not a launch-week plugin or score.

### Specification and content

- Identify essential journeys, input methods, media, time limits, authentication, and error recovery.
- Use plain, descriptive language; meaningful headings; useful link/button names; and explicit instructions.
- Provide text alternatives for informative images and mark decorative images appropriately.
- Provide captions/transcripts/audio description as required by the media and target.
- Do not encode essential meaning only in color, shape, location, hover, sound, or animation.

### Structure and semantics

- Use the correct native HTML element before ARIA.
- Maintain logical heading and landmark structure.
- Preserve DOM order that matches reading and focus order.
- Use real links for navigation and buttons for actions.
- Give inputs programmatic names, instructions, autocomplete purpose, errors, and status messages.
- Use ARIA only when the native platform cannot express the pattern; test the resulting accessibility tree.

### Keyboard and focus

- Every action works without a pointer.
- No keyboard trap; modals, menus, disclosures, carousels, and custom widgets follow an established interaction pattern.
- Focus is visible, not obscured, and restored/moved intentionally after dynamic changes.
- Skip navigation or equivalent bypass is available where repeated content warrants it.
- Hover-only information is also available on focus/touch and can be dismissed where required.

### Visual presentation

- Validate text, large text, icon/control, and focus contrast against the applicable criteria.
- Support 200% zoom and reflow without losing content or function.
- Support browser text resizing and reasonable text-spacing overrides.
- Avoid fixed heights and clipped copy.
- Meet target-size requirements and provide adequate spacing, with particular care on touch.
- Test high-contrast/forced-colors behavior when the audience/platform warrants it.

### Motion, timing, and input

- Respect `prefers-reduced-motion`.
- Provide a pause/stop/hide control where required.
- Avoid flashes that risk seizures.
- Do not require path-based gestures or device motion when a simple alternative is possible.
- Do not make an action depend only on dragging.
- Preserve data and allow correction when sessions expire or submissions fail.

### Automated checks

Use axe-core in component/browser tests and scan states that become visible after interaction. Automated tools find only a subset of accessibility failures. A zero-violation report is not WCAG conformance.

### Required manual checks

1. Keyboard-only pass: tab order, reverse order, activation, dismissal, traps, and focus return.
2. Screen-reader spot check of navigation, headings, forms, status/errors, modal/dialog behavior, and the primary journey.
3. 200% zoom and reflow.
4. Text-spacing override.
5. Reduced-motion behavior.
6. Touch target and orientation check on a real phone.
7. Contrast and non-color cue review.
8. Content alternatives and media review.
9. Error identification, recovery, and status announcement.
10. A check of every custom interaction in all states.

### Accessibility gate

`[REQUIRED]` Before launch:

- automated violations are resolved or explicitly evaluated;
- manual critical-journey checks pass;
- known limitations have severity, owner, remediation, and human approval;
- an accessibility claim never exceeds the evidence.

---

## 14. Animation, 3D, and visual-effects rules

Premium animation supports hierarchy and meaning. It does not compensate for weak composition.

### Choose the smallest capable tool

1. **CSS transitions/keyframes** for simple state and entrance effects.
2. **Motion** for React component state, gesture, presence, and layout-oriented animation.
3. **GSAP** for authored timelines, complex sequencing, and scroll choreography.
4. **Canvas/WebGL/Three.js/React Three Fiber** for genuinely spatial, shader, particle, or high-density visual experiences.

`[RECOMMENDED]` Do not add a library for one trivial fade.

### Motion and GSAP may coexist

They may coexist in one project—even one component—when ownership is explicit.

- Motion can own component state, presence, gesture, and layout transitions.
- GSAP can own cinematic timelines and scroll choreography.
- `[REQUIRED]` Only one system writes a given property on a given element at a given time.
- `[REQUIRED]` Document handoff points when one system takes ownership after another.
- `[REQUIRED]` Clean up both systems on unmount/navigation.

The blanket rule “never mix GSAP and Motion in one component” is retired. The actual risk is conflicting ownership.

### Property choice

Prefer `transform` and `opacity` when they express the intended effect because browsers can often animate them efficiently. This is not an absolute ban on layout or paint properties:

- animate layout/paint only when the design requires it;
- measure the real device;
- contain/reduce affected area;
- avoid continuous expensive work;
- preserve semantic layout and accessible state.

### Scroll behavior

- Never hijack basic reading/navigation without a compelling approved reason.
- Keep scroll position, history, anchors, focus, and reduced-motion behavior predictable.
- Pinning must not hide content or create keyboard traps.
- Refresh/recalculate measurements after fonts, media, or layout changes.
- Test trackpad, mouse wheel, touch, keyboard, resize, zoom, and browser UI changes.

### Lifecycle and cleanup

On route change/unmount:

- revert GSAP contexts and kill relevant timelines/ScrollTriggers;
- cancel animation frames and timeouts;
- disconnect observers;
- remove listeners;
- abort pending asset/network work where appropriate;
- stop media;
- dispose WebGL geometries, materials, textures, render targets, controls, and renderer resources;
- remove canvases and references;
- handle WebGL context loss/restoration if the experience depends on it.

### Three.js and React Three Fiber

Use only when the visual goal benefits materially from real-time 3D.

`[REQUIRED]`

- lazy-load heavy runtime and scene assets;
- code-split away from initial content;
- compress/optimize geometry and textures;
- use appropriate texture dimensions/formats and mipmaps;
- control device pixel ratio rather than blindly rendering at maximum;
- pause or reduce work when hidden/offscreen;
- dispose resources;
- supply loading, error, WebGL-unavailable, reduced-motion, and low-power fallbacks;
- test pointer/touch/keyboard access to any essential interaction;
- never make essential content readable only inside an inaccessible canvas.

`[RECOMMENDED]`

- Prefer a poster/video/static art-directed fallback for mobile or reduced-motion when it preserves the idea.
- Avoid expensive post-processing that exists only to make weak assets feel premium.
- Test sustained use for heat, battery, frame pacing, and memory—not only a five-second desktop capture.

### Motion specification entry

For every significant effect, record:

```text
Name and purpose:
Trigger:
Elements and property owner:
Start/end states:
Timing/easing:
Interruption/re-entry:
Keyboard/touch behavior:
Reduced-motion/low-capability fallback:
Performance budget:
Cleanup:
Acceptance evidence:
```

---

## 15. Security and privacy

Security is a layered risk process. A clean scan is evidence of what the scanner checked; it is never a declaration that the project is secure.

### Secrets and access

- `[REQUIRED]` Store secrets in authorized environment/secret stores, never source, docs, prompts, screenshots, logs, or client bundles.
- `[REQUIRED]` Commit an example environment file containing names and safe descriptions only.
- `[REQUIRED]` Use least-privilege service accounts and separate environment credentials.
- `[REQUIRED]` Rotate exposed or suspect credentials and inspect Git history/artifacts.
- `[REQUIRED]` Keep production, billing, DNS, and account-recovery authority with named humans.
- `[RECOMMENDED]` Enable multi-factor authentication and protect recovery methods.

### Input, output, and data

- Validate untrusted input on the server at the trust boundary.
- Encode/escape output for its destination.
- Use parameterized queries or safe SDK interfaces.
- Authorize every protected action and object, not only the route.
- Minimize collected data and retention.
- Avoid sensitive data in URLs, analytics, logs, traces, or error messages.
- Use secure transport and appropriate cookie/session flags.
- Apply CSRF protections where the architecture requires them.
- Restrict uploads by type, size, storage, access, and processing behavior.
- Rate-limit or otherwise protect abuse-sensitive endpoints.

### Browser and deployment controls

- Use restrictive, tested security headers appropriate to the app: Content Security Policy, framing policy, MIME sniffing protection, referrer policy, and permissions policy.
- Pin/lock dependencies and review unexpected install scripts.
- Keep preview access intentional.
- Configure CORS narrowly.
- Do not expose source maps, admin paths, debug tools, environment output, or internal errors unintentionally.
- Verify production assets/configuration rather than assuming the preview setup transferred.

### Supply chain and repository

For client work, enable the GitHub security features available to the repository plan/organization and appropriate to the stack, such as:

- Dependabot alerts/updates;
- secret scanning and push protection;
- code scanning;
- protected branches and required checks.

Availability varies. Record what is enabled, unavailable, replaced, or manually performed.

### Forms and bot controls

Turnstile or any CAPTCHA is one layer. Continue to validate fields, verify server-side, protect endpoints, minimize error leakage, and plan for service failure and accessibility.

### Security verification

Use:

- threat/risk review focused on real data flows;
- dependency and secret scans;
- static analysis where useful;
- permission and object-authorization tests;
- negative validation tests;
- header/cookie/CORS review;
- preview/production configuration review;
- logging/privacy review;
- a human review of business logic.

`[REQUIRED]` Report scope and limitations: “No high-severity finding in the checks listed on this commit” is honest; “the site is secure” is not.

### Incident response minimum

Record:

1. detection and impact;
2. containment;
3. credential/session revocation if needed;
4. evidence preservation;
5. repair/rollback;
6. verification and monitoring;
7. notification/legal escalation owner;
8. retrospective and prevention.

---

## 16. Testing and continuous integration

CI begins in Phase 3. It is not a pre-launch afterthought. **GitHub Actions CI is `[REQUIRED]` for the client track.**

### Minimum CI

For an npm repository, the canonical required jobs are:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Make every script real. A placeholder test that always succeeds is worse than an explicit “not yet configured” because it creates false confidence.

For another package manager, use its frozen-lockfile install and equivalent recorded scripts.

### What to test

| Layer | Best use |
|---|---|
| Static checks | syntax, types, formatting, suspicious patterns |
| Unit tests | deterministic logic and transformations |
| Component tests | behavior, states, semantics, accessible names |
| Integration tests | boundaries: forms, CMS, API, storage, adapters |
| Browser/end-to-end tests | critical user journeys in a real browser |
| Visual regression | stable regions/states where pixel change is meaningful |
| Accessibility automation | detectable WCAG-related failures across rendered states |
| Manual exploratory review | usability, taste, assistive technology, device feel, unexpected paths |

### Browser testing

- Use resilient, user-facing locators (role, label, text) instead of brittle implementation selectors.
- Test behavior, not the framework.
- Keep critical tests isolated and deterministic.
- Capture traces/screenshots/video on failure where useful, but do not commit sensitive artifacts.
- Run a representative cross-browser project (Chromium, Firefox, WebKit) where the audience/risk justifies it.
- Test mobile emulation plus real devices; emulation is not hardware.

### Required client CI policy

- CI runs on pull requests and the protected production branch.
- Required checks must pass before merge.
- The lockfile is committed.
- Runtime versions are pinned or constrained intentionally.
- Secrets come from repository/environment secret storage.
- Production deployment is tied to the reviewed commit.
- Flaky tests are treated as defects with owners; do not normalize rerunning until green.

### AI review

CodeRabbit or another AI reviewer is optional.

- Use it for extra suggestions, pattern spotting, and review prompts.
- Configure it to avoid secrets and excessive noise.
- Triage its output like any other untrusted review.
- It cannot replace CI, security checks, a human approver, runtime tests, accessibility checks, or production verification.

### Test evidence language

Good:

> On commit `abc123`, CI passed lint, typecheck, 84 unit/integration tests, the production build, and five Playwright journeys in Chromium/Firefox/WebKit. A human also completed the keyboard and real-iPhone checkout pass. Screen-reader coverage remains a spot check, not full conformance testing.

Bad:

> Fully tested and production ready.

---

## 17. Performance engineering

Performance is an experience and an operating constraint, not a one-time score.

### Define budgets in Phase 1–3

Record project-specific targets for:

- JavaScript and CSS transferred/parsed;
- critical image/font/media weight;
- route or scene load;
- LCP, INP, and CLS;
- animation frame pacing;
- memory/thermal behavior for sustained 3D;
- third-party scripts;
- acceptable target devices/networks.

Avoid copying universal kilobyte numbers without knowing the product and audience.

### Measure lab and field separately

- **Lab tools** (Lighthouse, browser performance tooling, synthetic tests) are reproducible diagnostics.
- **Field/RUM data** reflects real users, devices, networks, caches, and interactions.
- Core Web Vitals use field-oriented metrics: LCP, INP, and CLS.
- Lighthouse cannot directly provide real-user INP from a lab run; lab interaction diagnostics can help find causes.

`[REQUIRED]` Do not claim a Lighthouse score proves real-user performance.

### High-leverage practices

- Deliver semantic HTML and useful content early.
- Avoid shipping framework/runtime work the page does not need.
- Split by route/feature; lazy-load heavy interactions and 3D.
- Size responsive images correctly and use modern formats where suitable.
- Preload only truly critical assets.
- Subset/self-host fonts where licensing and strategy permit; prevent layout shift.
- Reserve media dimensions.
- Limit third-party scripts and load them intentionally.
- Cache immutable assets safely; configure HTML/data caching deliberately.
- Move expensive computation off the critical input path.
- Reduce main-thread work before micro-optimizing.

### Animation and 3D performance

- Prefer transforms/opacity when suitable, but measure intended properties.
- Batch DOM reads/writes and avoid layout thrashing.
- Throttle or avoid continuous scroll/pointer work.
- Control canvas DPR and scene complexity.
- Use instancing/LOD/culling/compression where justified.
- Pause hidden/offscreen work.
- Dispose resources and test repeated navigation.
- Provide a lower-cost fallback.

### Performance gate

Before launch:

1. Run lab diagnostics on representative pages and conditions.
2. Inspect the waterfall, main-thread work, layout shifts, image/font behavior, third parties, and bundles.
3. Test a real mid-range phone on a realistic network.
4. Compare against agreed budgets.
5. Record exceptions with user impact and owner.
6. After launch, observe available field data long enough to be meaningful and prioritize actual user regressions.

---

## 18. Launch and handover

Phase 9 gives the sequence; this section is the reusable release checklist.

### Launch candidate identity

- `[ ]` Candidate commit/hash and preview URL recorded
- `[ ]` Scope and known limitations frozen
- `[ ]` Final CI passed on that commit
- `[ ]` Independent findings triaged and repaired/rejected with reasons
- `[ ]` Human sign-off identifies the same candidate

### Content and brand

- `[ ]` All routes, copy, links, contact details, prices, dates, legal text, and calls to action approved
- `[ ]` Images/media licensed, optimized, correctly credited where required, and have alternatives
- `[ ]` Official logos and brand assets preserved
- `[ ]` Metadata, social cards, canonical, sitemap, robots, redirects, 404, and structured data verified

### Experience

- `[ ]` Target browsers and real devices
- `[ ]` Keyboard, focus, zoom/reflow, reduced motion, screen-reader spot checks
- `[ ]` Loading, empty, error, success, offline/slow network where relevant
- `[ ]` Forms and external integrations verified end-to-end
- `[ ]` Performance budgets reviewed with lab plus available field evidence
- `[ ]` No unexplained console/network errors

### Security, privacy, and operations

- `[ ]` Secrets and environment separation checked
- `[ ]` Preview access policy verified
- `[ ]` Dependency/secret/security checks reviewed with limitations
- `[ ]` Analytics/consent/data collection approved and tested
- `[ ]` Monitoring/error reporting configured and owned
- `[ ]` Backup/rollback target and steps verified
- `[ ]` Production access, MFA, recovery, DNS, billing, and vendor ownership assigned to real humans

### Controlled release

1. Announce/change-freeze according to project risk.
2. Confirm last known-good production state.
3. Obtain explicit merge/deploy/DNS authority.
4. Deploy the exact approved commit.
5. Verify domain, TLS, redirects, caching, headers, asset URLs, and environment.
6. Run production smoke journeys, including form receipt where safe.
7. Verify monitoring and authorized analytics/consent.
8. Observe the agreed window.
9. Roll back or repair using Section 9 if a blocker appears.
10. Record production deployment ID/time and outcome.

### Handover package

Deliver:

- repository and branch/release policy;
- architecture and dependency summary;
- local setup, check, build, and deployment commands;
- domains, environments, services, account owners, and renewal/cost notes;
- CMS/content editing and publishing workflow;
- analytics/consent, forms, recipients, and data-flow summary;
- monitoring, incident, backup, and rollback procedure;
- known issues, accepted risk, and maintenance schedule;
- support/change-request route;
- credential-transfer checklist through an approved secure channel—never actual secret values in the file.

### Handover acceptance

`[REQUIRED]` A real recipient:

- confirms access;
- can run or observe the core workflow they own;
- knows where to request help;
- understands recurring costs and renewal responsibilities;
- accepts known issues and support boundaries in writing.

---

## 19. Maintenance and hotfixes

### Maintenance cadence

Choose a cadence based on risk, but assign owners for:

- dependency/runtime/platform updates;
- expiring domains, certificates, API keys, and vendor plans;
- backup/restore checks;
- content/contact/legal accuracy;
- form/integration delivery;
- broken links and redirects;
- accessibility regression;
- lab and field performance;
- error/uptime monitoring;
- analytics/consent behavior;
- user access and recovery methods;
- accumulated decisions and handover accuracy.

### Change categories

| Category | Path |
|---|---|
| Content-only within an approved CMS model | Editorial workflow and preview approval |
| Routine code correction | Feature/fix branch → CI → review → preview → merge/deploy |
| New feature or material design change | Return to Phase 1 or 2 as appropriate |
| Dependency/platform migration | Architecture/risk plan, preview spike, rollback, full regression |
| Production incident | Incident triage and hotfix path below |

### Hotfix path

1. Record symptom, impact, environment, timing, and current deployment.
2. Stabilize/contain; do not begin unrelated cleanup.
3. Decide forward fix versus revert using real data/schema and deployment constraints.
4. Obtain emergency authority.
5. Create a hotfix branch from the actual production history.
6. Make the smallest safe correction.
7. Add a regression test or explicit reproduction/verification artifact.
8. Run target checks plus the minimum safe regression set.
9. Deploy and verify production.
10. Merge/reconcile the hotfix into normal development history.
11. Hold a short retrospective and assign prevention work.

### Maintenance evidence

Update `/docs/PROJECT_STATUS.md` after active work and maintain a release/incident record appropriate to the project. Never leave “temporary” production configuration undocumented.

---

## 20. Troubleshooting by cause

Do not begin by changing models. Begin by locating the cause.

### Specification failures

**Signals:** repeated redesign, contradictory feedback, “done” means different things, missing states.

**Actions:**

1. Stop implementation in the disputed area.
2. Compare brief, specification, design, and current output.
3. Write the smallest decision the human must make.
4. Update acceptance criteria and authoritative document.
5. Resume only after the decision.

### Context failures

**Signals:** agent edits the wrong file, repeats solved work, invents APIs/assets, or cannot reproduce.

**Actions:**

1. Provide repository path, branch, relevant files, exact error, and reproduction.
2. Remove irrelevant context and stale instructions.
3. Identify the authoritative reference/source.
4. Ask the agent to restate boundaries and evidence.

### Visual failures

**Signals:** technically correct but generic, flat, off-brand, poorly composed, or unlike the reference.

**Actions:**

1. Disable motion and review static hierarchy.
2. Capture old/reference/current at the same viewport, content, camera/state, lighting, and scale.
3. Annotate concrete differences: silhouette, grid, crop, type scale, spacing, density, color, material, depth, lighting, motion.
4. Prioritize the three highest-impact deltas.
5. Change one design category at a time.
6. Require human approval before multiplying the pattern.

Do not ask an expensive model to infer unspoken taste.

### Logic failures

**Signals:** reproducible wrong state/output, race, invalid transition, edge-case break.

**Actions:**

1. Reduce to minimal input, state, expected output, and actual output.
2. Record environment and timing.
3. Write a failing regression test when practical.
4. Trace ownership/data flow.
5. Fix the cause, run targeted and adjacent tests, then update status.

### Architecture failures

**Signals:** every feature touches many files, duplicated state, circular ownership, repeated special cases, deployment mismatch.

**Actions:**

1. Stop patching symptoms.
2. Map modules, boundaries, state, data, and runtime constraints.
3. Identify the violated invariant.
4. Use Opus 4.8 high or GPT-5.6 Sol per Section 4.
5. Propose a staged, reversible change with migration and rollback.
6. Prove it on a slice before broad refactor.

### Environment failures

**Signals:** works locally but not CI/preview/production; wrong page; stale result; dependency/runtime difference.

**Actions:**

1. Confirm repository, branch, commit, URL, process, port, and environment.
2. Compare runtime/package-manager/lockfile/config.
3. Clear only understood caches; do not delete user work.
4. Inspect network, console, server logs, and deployment output.
5. Reproduce in the failing environment.
6. Document the environmental contract.

### Model failure after a proper attempt

1. Confirm the problem is not specification, context, visual feedback, or environment.
2. Preserve the failed prompt, diff, errors, and evidence.
3. Improve the task boundary; do not merely say “try again.”
4. Apply the Section 4 escalation threshold.
5. Give the next model the diagnosis, not an unfiltered transcript.

### Common symptom map

| Symptom | First checks |
|---|---|
| Blank page | correct URL/commit, console, network, mount/root error, asset path, environment |
| “Website” shown instead of game/experience | route and server root, build output, active app/port, stale tab, deployment source |
| Mobile overflow | fixed widths, min-content, long strings, transforms, canvas/media sizing, viewport units |
| Animation jumps | initial state, layout/font/media readiness, duplicate owners, strict-mode lifecycle, cleanup |
| ScrollTrigger wrong | measurement timing, scroller, refresh, resize/fonts/images, cleanup, reduced motion |
| Hydration mismatch | server/client branching, time/randomness, invalid nesting, browser-only APIs, extension effects |
| Form silently fails | server logs, validation, CORS/CSRF, env, provider response, Turnstile Siteverify, recipient |
| CI only fails | pinned versions, lockfile, case sensitivity, environment variables, timezone/locale, generated files |
| Preview exposes client work | Pages preview default, Access policy, bypass paths, signed-out test |
| Lighthouse good but users complain | field data, INP interactions, device/network, third parties, thermal/memory, perceived loading |

---

## 21. Copy-ready templates

Copy these into the project and remove instructional comments that do not apply. Keep the model rule short in project templates and link back to `/docs/PLAYBOOK.md` for detail.

### `CLAUDE.md`

```md
# Claude Project Instructions

The source of truth for workflow is `/docs/PLAYBOOK.md`.
Current work state is `/docs/PROJECT_STATUS.md`.

## Before every task

1. Read `PLAYBOOK.md` and `PROJECT_STATUS.md`.
2. Read only the additional documents relevant to the task.
3. Give the three-part verdict — MODEL / EFFORT / MODE — each named exactly,
   plus a one-line why. Never leave any of the three vague.
   - MODEL — Sonnet 5: routine work. Opus 4.8: architecture, many-file
     changes, or a bug surviving two proper Sonnet attempts. Fable 5:
     exceptional work or after proper Sonnet and Opus attempts.
     GPT-5.6 Sol: complex engineering, long-context implementation,
     difficult audits, and independent review. Kimi K3: reference-driven
     frontend only after a bake-off. Gemini/Antigravity: exploratory
     browser QA only.
   - EFFORT — low / medium / high / max-ultracode; the lowest that
     reliably works. Do not raise effort for a vague prompt.
   - MODE — PLAN, ASK-each-time, or AUTO-accept (see Approval and auto-edit
     below). Never bypass-permissions / full-auto, on any track.
4. If the current model, effort, and mode all match, say so and proceed.
   If any is wrong, name the correct MODEL / EFFORT / MODE and stop until
   the human confirms the switch. If the human does not switch, on the next
   message ask why and re-encourage the switch before doing anything else;
   only proceed unmatched on an explicit one-time "just use this."
5. Run `git status`; confirm the branch and preserve unrelated changes.
6. Restate the task boundary, acceptance criteria, and required checks.
7. When writing a prompt for the human to copy and reuse, always put it in a
   fenced code block, never plain paragraph text.

## Collaboration rhythm

- Work with the human one bounded task at a time.
- At the start, explain the immediate goal and expected evidence in plain English.
- Give concise updates during longer work.
- If blocked, diagnose the cause, explain the options, and recommend one.
- Pause for human approval at documented phase gates.
- Update `PROJECT_STATUS.md` so another conversation can resume safely.

## While working

- Make the smallest coherent change.
- Do not invent requirements, assets, APIs, approvals, or test results.
- Do not expose secrets or confidential data.
- Never let two animation systems own the same property at the same time.
- Build accessibility and reduced-motion behavior with the feature.

## Approval and auto-edit

Auto-editing named files does not authorize commands or external actions.

May proceed when project-local, non-destructive, and understood:

- Read/search files and inspect Git status/diffs.
- Edit only files in the agreed task.
- Run already-reviewed lint, type-check, test, and build scripts.
- Run read-only local diagnostics.

Pause and explain the exact action, affected files, network/credential/
production access, validation, and rollback before:

- Unfamiliar or generated Node, Python, or shell scripts.
- Package installation, removal, or upgrade.
- Network downloads/writes or external services.
- File deletion or changes outside the agreed task/folder.
- Commit, push, merge, rebase, tag, publish, reset, clean, or history rewrite.
- Deployment, DNS, hosting, CI, cloud, database, access, billing, or production.
- Credential, secret, private-data, or external-message access.

If the action cannot be explained confidently, do not run it. A clean
branch is not a complete backup. Ask separately before commit and push.

## Before handoff

- Run the checks required by `PROJECT_STATUS.md`.
- Inspect the diff; do not include unrelated files.
- Update `PROJECT_STATUS.md` and meaningful decisions.
- Never mark work complete while acceptance criteria are unverified.
- Report exactly what changed, what passed, what was not run, and the next action.
```

### `AGENTS.md`

```md
# Agent Instructions

These instructions are vendor-neutral and apply to Codex, Kimi Code,
Claude-based agents, and other repository agents.

Read `/docs/PLAYBOOK.md` and `/docs/PROJECT_STATUS.md` first. Read only
the other project documents relevant to the current task.

Before acting on any prompt, give a three-part verdict — MODEL / EFFORT /
MODE — each named exactly, plus a one-line why. Never leave any vague.
MODEL: Sonnet 5 for routine work; Opus 4.8 high for architecture,
many-file changes, or a bug surviving two proper Sonnet attempts;
Fable 5 max/ultracode only for exceptional work or after proper Sonnet
and Opus attempts; GPT-5.6 Sol for complex engineering, long-context
implementation, hard audits, and independent review; Kimi K3 for
reference-driven frontend only after a bake-off; Gemini/Antigravity for
exploratory browser QA only.
EFFORT: low / medium / high / max-ultracode — the lowest that reliably works.
MODE: PLAN, ASK-each-time, or AUTO-accept; never bypass/full-auto on any track.
If any of the three is wrong, name the correct one and stop until the human
confirms the switch. If they do not switch, next message ask why and
re-encourage before proceeding. Copyable prompts always go in a code block.

Then:

1. Inspect `git status`, branch, relevant files, and existing instructions.
2. Preserve unrelated and uncommitted human work.
3. Restate scope, exclusions, acceptance criteria, and checks.
4. Work in the smallest coherent, reversible change.
5. Do not install, publish, message externally, mutate production/data,
   use secrets, run destructive commands, commit, push, merge, or deploy
   without the permission required by `/docs/PLAYBOOK.md`.
6. Use source assets exactly; do not silently replace approved branding.
7. Run proportional automated checks and required visual/manual checks.
8. Inspect the final diff and keep unrelated files out.
9. Update `/docs/PROJECT_STATUS.md` and durable decisions.
10. Never claim completion, security, accessibility, or production
    readiness beyond the evidence.

Auto-editing agreed project files does not authorize commands, network
access, Git publication, deployment, credentials, production, or external
systems. Known project-local checks may run when they are non-destructive.
Before a consequential or unfamiliar action, explain the exact action,
affected files, external/secret access, validation, and rollback, then
wait for approval. Ask separately before commit and push.
```

### `.claude/settings.json` — golden-rule enforcement hooks

`[PERSONAL RULE]` Add this in each new project so the golden rule (Section 4) is re-injected on every prompt, not just read once at the start of a session. A rule that lives only in `CLAUDE.md` can silently drop out of a long conversation; these hooks prevent that. Two reminders fire on every prompt: one for the three-part verdict itself, and one for the "stop completely on a mismatch" rule — the second exists because the agent once flagged a model mismatch and then answered the question anyway, which defeats the point. If `.claude/settings.json` already exists, merge the `hooks` key in rather than overwriting the file.

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo '{\"hookSpecificOutput\":{\"hookEventName\":\"UserPromptSubmit\",\"additionalContext\":\"Golden rule reminder: before acting on this prompt, state your MODEL / EFFORT / MODE verdict per the golden rule in CLAUDE.md - this applies to every prompt, including pure discussion, with no exceptions.\"}}'"
          }
        ]
      },
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo '{\"hookSpecificOutput\":{\"hookEventName\":\"UserPromptSubmit\",\"additionalContext\":\"Model-mismatch reminder: if your MODEL / EFFORT / MODE verdict does not match what is currently active, stop completely - do not answer the prompt itself, only give the verdict and wait for the human to switch or explicitly say just use this model.\"}}'"
          }
        ]
      }
    ]
  }
}
```

Honest limit: the hooks re-inject their reminders every turn, which makes forgetting far harder — but they do not physically force the response. The agent still has to act on the reminder. If the agent ever skips the verdict, or answers anyway after flagging a mismatch, that is a real lapse worth flagging, not a silent mechanism failure. In tools other than Claude Code (for example Codex), the rule text in `AGENTS.md` still applies as a soft instruction; whether that tool has an equivalent per-prompt hook is tool-specific — check its own settings. Some tools offer to migrate Claude Code hooks automatically; test with a trivial prompt afterward to confirm it fires.

### `/docs/PROJECT_STATUS.md`

```md
# Project Status

## Project

## Track

Practice / Personal / Client Production

## Current phase

## Current task

## Recommended model

## Current branch

## Current environment

Local / Preview / Production

## Inputs available

## Acceptance criteria

- [ ]

## Required checks

- [ ] Lint
- [ ] Type-check
- [ ] Relevant tests
- [ ] Production build
- [ ] Cloudflare-compatible preview
- [ ] Desktop visual review
- [ ] Real-phone review
- [ ] Keyboard review
- [ ] Accessibility check
- [ ] No unexplained console errors

## Blockers

## Client dependencies

## Decisions made

## Last completed

## Next action

## Last updated
```

Update this file after meaningful work. A checkbox means evidence exists for the current candidate—not that it passed last month on another branch.

### `/docs/SPEC.md`

```md
# Product Specification

**Version:**

**Owner:**

**Status:** Draft / Approved / Superseded

**Approved by/date:**

## Summary

## Primary audience and problem

## Primary business/user outcome

## Scope

### In scope

### Out of scope

## Routes and journeys

| Route/journey | User goal | Content/data | Key states | Acceptance evidence |
|---|---|---|---|---|

## Functional requirements

## States and edge cases

- Loading:
- Empty:
- Error and recovery:
- Success:
- Permission/auth:
- Offline/slow network:
- Not found:
- Reduced motion:

## Content and ownership

| Item | Owner | Status | Due | Rights/notes |
|---|---|---|---|---|

## Responsive, browser, and device requirements

## Accessibility target

WCAG 2.2 AA unless a stricter approved target applies.

## Integrations, forms, CMS, SEO, analytics, and privacy

## Performance and reliability expectations

## Constraints, assumptions, and dependencies

## Acceptance criteria

- [ ]

## Launch boundary and deferred work
```

### `/docs/DESIGN.md`

```md
# Design Direction

**Version:**

**Owner:**

**Status:** Draft / Approved / Superseded

**Approved by/date:**

## Experience statement

## Authoritative references

| Reference | Path/link | What to preserve | What not to copy |
|---|---|---|---|

## Hierarchy and page composition

## Grid, spacing, and responsive behavior

## Typography

## Color, material, imagery, and iconography

## Design tokens

## Components and states

| Component | Variants | Hover/focus/active/disabled/error/success | Responsive behavior |
|---|---|---|---|

## Accessibility

- Semantics:
- Focus:
- Contrast:
- Zoom/reflow:
- Target size:
- Non-color cues:
- Reduced motion:

## Motion direction

## Signature moment and fallback

## Comparison viewports and review method

## Approved exceptions
```

### Optional `/docs/ARCHITECTURE.md`

```md
# Architecture

## Decision summary

## Requirements that drive architecture

## Chosen stack and rendering model

## Rejected alternatives and why

## Modules, ownership, and data flow

## Integrations and trust boundaries

## Environments and configuration contract

## Cloudflare target and compatibility evidence

## Error, caching, and observability strategy

## Risks, migrations, and rollback

## Local/check/build/deploy commands
```

### Optional `/docs/MOTION.md`

```md
# Motion and Effects

## Motion principles

## Tool ownership

| Element/property | Owner (CSS/Motion/GSAP/Three) | Trigger | Cleanup |
|---|---|---|---|

## Effects

### [Effect name]

- Purpose:
- Trigger:
- Start/end:
- Timing/easing:
- Interruption/re-entry:
- Keyboard/touch:
- Reduced-motion/low-capability fallback:
- Performance budget:
- Cleanup:
- Acceptance evidence:

## 3D/canvas asset and lifecycle plan

## Test matrix
```

### Optional `/docs/OPERATIONS.md`

```md
# Operations Runbook

## Owners and contacts

## Environments and URLs

## Services, domains, and recurring costs

## Environment variables

Names, purpose, owner, and environment only. Never secret values.

## Local, check, build, preview, and deploy commands

## Cloudflare configuration

## Forms, CMS, analytics, and data flows

## Monitoring and expected signals

## Backup and rollback

## Incident response

## Routine maintenance schedule
```

### Optional `/docs/DECISIONS.md`

```md
# Decision Log

## [YYYY-MM-DD] [Decision title]

- Status: Proposed / Accepted / Superseded
- Context:
- Decision:
- Alternatives considered:
- Consequences and risks:
- Evidence:
- Approver:
- Revisit trigger/date:
```

### Optional `/docs/HANDOVER.md`

```md
# Project Handover

## Recipient and acceptance date

## Repository and release process

## Architecture and dependencies

## Setup, checks, build, and deploy

## Environments, domains, and service owners

## CMS/content workflow

## Forms, analytics, consent, and data

## Monitoring, backup, incident, and rollback

## Accessibility and performance baseline

## Known issues and accepted risk

## Maintenance and recurring costs

## Support and change requests

## Access-transfer checklist

Record transfer completion only; never secret values.

- [ ] Repository
- [ ] Cloudflare
- [ ] Domain/DNS
- [ ] CMS
- [ ] Analytics
- [ ] Forms/integrations
- [ ] Monitoring
- [ ] Billing/recovery/MFA ownership

## Recipient verification

- [ ] Access confirmed
- [ ] Owned workflow demonstrated
- [ ] Costs/renewals understood
- [ ] Known issues accepted
- [ ] Support boundary accepted
```

---

## 22. Playbook lifecycle, changelog, and evidence loop

### Versioning policy

- **Patch** (`1.0.1`): clarity, link, typo, or non-behavioral correction.
- **Minor** (`1.1.0`): new or materially changed workflow that remains compatible with the lifecycle.
- **Major** (`2.0.0`): changed governance, phase model, or delivery contract that requires projects to migrate deliberately.

Every release records:

- date;
- author/editor;
- reason and evidence;
- sections changed;
- time-sensitive claims reverified;
- compatibility/migration impact;
- reviewers and approval.

### Reverification policy

`[REQUIRED]` Reverify time-sensitive claims:

- before freezing a major playbook version;
- before choosing a new model/vendor role;
- before starting a production project on a deployment adapter;
- after a relevant vendor deprecation, pricing/access change, or security notice;
- at least once during a long-running client project when the claim affects launch.

Use official primary sources. Do not make model, plan, price, feature, compatibility, or limit claims from memory.

### Changelog

#### 0.9.1 — 24 July 2026 — post-review restoration

- Applied the confirmed findings of the Fable 5 specialist review.
- Restored the founder's full golden rule: the per-task verdict is now the three-part **MODEL / EFFORT / MODE** (not model only), with the if-you-don't-switch protocol and the copyable-prompts-in-code-blocks rule; the same three-part verdict now appears in the `CLAUDE.md` and `AGENTS.md` templates.
- Restored the practice-track auto-checkpoint habit as a `PERSONAL RULE`, scoped to practice repos only, distinct from the strict client-track Git controls (correcting the 0.9 over-broad removal).
- Restored the Fable budget (2 sessions per project) as a `PERSONAL RULE`, enforced in conversation.
- Added a plain-English glossary (Section 25) covering the beginner Git/run/checks/hosting/AI/bug terms.
- Added the `UserPromptSubmit` golden-rule enforcement hook to Phase 0 and the Section 21 templates.
- Fixed cross-reference bugs: `/docs/PLAYBOOK.md` is derived from the master (not a Section 21 template); `CLAUDE.md`/`AGENTS.md`/the hook are now created in Phase 0 and listed in Section 6; the "master task" / "original source playbook" ghost references in Section 23 were removed.
- Trimmed Section 23 from a mandatory four-model review pipeline to a short review-status + moratorium + freeze note, honouring the standing "build before reviewing again" moratorium.

#### 0.9 — 24 July 2026 — review candidate

- Replaced the walkthrough/progress-app concept with a single repository-native Markdown operating manual.
- Removed app navigation, setup screens, localStorage progress, coins, timers, celebrations, gated sections, and automatic `index.html` generation from the product concept.
- Replaced old rule labels with `REQUIRED`, `RECOMMENDED`, and `PERSONAL RULE`.
- Added the stop-and-switch Golden Model-Routing Rule and current model roles.
- Corrected escalation so vague prompts, missing context, visual ambiguity, and environment failures do not justify expensive models.
- Added a fair bake-off protocol.
- Replaced blind auto-checkpoints, commits, and pushes with inspected, authorized Git controls.
- Corrected animation policy: Motion and GSAP may coexist with one owner per property.
- Corrected performance policy: transforms/opacity are preferences when suitable, not absolute rules.
- Made accessibility WCAG 2.2 AA from specification onward.
- Added practice/client tracks, Cloudflare decisions, CI scaffold, client controls, full lifecycle, maintenance, hotfix, troubleshooting, templates, and source verification.
- Added a beginner collaboration rhythm and separated bounded auto-edit permission from command, network, Git, deployment, credential, and external-system approval.
- Removed obsolete or insufficiently supported pricing, leaderboard, availability-window, and universal “best model” claims from the previous source.

#### 1.0 — pending

Freeze after the human skims the Section 23 consistency self-audit, accepts or waives any open items, and — per the moratorium — has used this playbook on at least one real website.

### Retrospective and evidence loop

Complete a short retrospective after a launch, major gate, incident, or project cancellation.

### Evidence to collect

- planned versus actual scope and timeline;
- model/tool used per task class;
- properly scoped failures and escalations;
- bake-off outcomes and human cleanup time;
- defect origin and phase detected;
- accessibility findings;
- lab and field performance;
- incidents, rollback, and recovery time;
- client review/change-request patterns;
- documentation gaps;
- recurring costs and operational surprises.

### Retrospective questions

1. Which decision produced the most quality?
2. Which uncertainty should have been resolved earlier?
3. Which defect escaped its cheapest detection phase?
4. Where did AI save time, and where did it create review debt?
5. Was a model escalated for the wrong reason?
6. Did the vertical slice predict later page quality?
7. Which automated check caught a real defect?
8. Which important defect required a human or real device?
9. Did accessibility, performance, security, and motion stay integrated?
10. What one playbook rule should change?

### Change rule

Do not edit the master playbook because one session “felt better.” Propose:

```text
Observation:
Projects/evidence:
Current rule:
Proposed rule:
Expected benefit:
New risk:
How to test:
Review date:
```

Adopt the change only when its scope and evidence justify it. Mark project-specific preferences as `PERSONAL RULE`, not universal requirements.

---

## 23. Review status and freeze

### Review status

A specialist review of this candidate has already been done (a Fable 5 pass across internal consistency, regressions against the previous playbook, beginner fit, golden-rule alignment, and technical honesty). Its confirmed findings were applied: the three-part golden rule, the practice-track auto-checkpoint habit, the Fable budget, and cross-reference fixes were restored, and this pipeline was trimmed to match the founder's standing decision below.

### Do not run a multi-model review-of-reviews before shipping

`[PERSONAL RULE]` A moratorium is in force: **no new tools, no more reviews-of-reviews, and no multi-vendor review pipeline until a real website has actually shipped through this playbook.** The founder has a documented pattern of polishing the system instead of building with it. One review has happened; the next step is to *use* this document on a real project, not to review it again. Treat the checklist below as a quick self-audit the human can skim before freezing 1.0 — not as a mandate to commission four more model reviews.

### Freeze to Version 1.0

Freeze after: the human skims the consistency checklist below, accepts any open items or records a waiver, and updates the version, date, and changelog. Real-project evidence then drives future changes through Section 22 — that is the only review that now matters.

### Consistency self-audit (skim before freezing)

Before Version 1.0, confirm:

- `[ ]` The deliverable is one Markdown operating manual, not an interactive app.
- `[ ]` No setup wizard, progress map, localStorage, coins, timer, celebration, gated navigation, or generated `index.html` remains.
- `[ ]` Section order matches the table of contents in Section 0.
- `[ ]` Table of contents links to every section.
- `[ ]` The golden rule requires the three-part MODEL / EFFORT / MODE verdict, with the if-you-don't-switch protocol and the copyable-prompts-in-code-blocks rule.
- `[ ]` A plain-English glossary is present (Section 21) and defines the beginner Git/CI/hosting terms.
- `[ ]` The Fable budget (2 sessions per project) is present as a `PERSONAL RULE`.
- `[ ]` The practice-track auto-checkpoint habit is present as a `PERSONAL RULE` and scoped to practice repos only.
- `[ ]` Cloudflare is the default deployment platform without being presented as universal.
- `[ ]` Cloudflare Pages and Workers/OpenNext are correctly distinguished.
- `[ ]` Cloudflare is not described as a CodeRabbit replacement, and CodeRabbit remains optional.
- `[ ]` GitHub Actions CI is mandatory on the client track.
- `[ ]` Rule labels are exactly `REQUIRED`, `RECOMMENDED`, and `PERSONAL RULE`.
- `[ ]` The model recommendation occurs before every task.
- `[ ]` Correct current model means state and proceed.
- `[ ]` Incorrect current model means name the correct one and stop for switch confirmation.
- `[ ]` Sonnet 5 is the routine default.
- `[ ]` Opus 4.8 high uses the architecture/many-file/two-proper-Sonnet-attempt threshold.
- `[ ]` Fable 5 max/ultracode is exceptional or follows proper lower-model attempts.
- `[ ]` GPT-5.6 Sol has a meaningful complex engineering/audit/review role.
- `[ ]` Kimi K3 requires a real bake-off for reference-driven frontend work.
- `[ ]` Gemini/Antigravity is supplementary exploratory browser QA, not proof.
- `[ ]` Model routing is dated current policy, not a timeless ranking.
- `[ ]` Bake-off conditions are fair and fixed before results.
- `[ ]` Failure is diagnosed before escalation.
- `[ ]` Practice and client tracks are distinct.
- `[ ]` Client controls do not invent a nonexistent second reviewer.
- `[ ]` Private client repository, protected main, pull requests, CI, preview/access, environments, human/real-device review, monitoring, rollback, sign-off, handover, and change control are present.
- `[ ]` Git never auto-commits/pushes and fix-versus-revert is contextual.
- `[ ]` One active branch at a time is a solo-work default, not an absolute.
- `[ ]` Auto-edit permission is separate from command, network, Git publication, deployment, credential, and external-system permission.
- `[ ]` Consequential approval requests explain the exact action, affected files, external/secret access, validation, and rollback.
- `[ ]` Cloudflare Pages versus Workers/OpenNext, preview publicity, Access, environment separation, Turnstile server verification, and rollback are correct.
- `[ ]` Every Phase 0–10 contains all mandated fields.
- `[ ]` WCAG 2.2 AA starts at specification/design and includes manual plus automated checks.
- `[ ]` Motion and GSAP may coexist only with one owner per property.
- `[ ]` Transform/opacity guidance is a measured preference, not an absolute rule.
- `[ ]` Three/R3F/canvas/WebGL guidance covers lazy loading, splitting, fallback, cleanup, mobile, battery/thermal, and accessibility.
- `[ ]` Lighthouse is not proof; lab and field/Core Web Vitals are distinguished.
- `[ ]` Security never equates a clean scan with “secure.”
- `[ ]` Forms have server-side validation/protection and Turnstile is not treated as sufficient by itself.
- `[ ]` Scope, content approval, licensing, domains, analytics, monitoring, rollback, handover, and change control are included.
- `[ ]` Templates repeat the routing and startup rules without contradicting the main policy.

Any failed item blocks Version 1.0 or requires a documented human waiver.

---

## 24. Official-source verification appendix

**Last verified:** 24 July 2026

This appendix supports claims that can change. The main workflow stays readable; future editors use these links to reverify before repeating a claim.

### Model and agent products

| Claim to reverify | Primary source |
|---|---|
| GPT-5.6 Sol positioning, model alias, and supported reasoning-effort controls | [OpenAI — Latest model guide](https://developers.openai.com/api/docs/guides/latest-model), [OpenAI — GPT-5.6 Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol) |
| Current OpenAI model families and selection guidance | [OpenAI — Models](https://developers.openai.com/api/docs/models) |
| Claude Fable 5, Opus 4.8, and Sonnet 5 availability/positioning | [Anthropic — Models overview](https://platform.claude.com/docs/en/about-claude/models/overview), [Anthropic — Model IDs and versions](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions), [Anthropic — What’s new in Sonnet 5](https://platform.claude.com/docs/en/about-claude/models/whats-new-sonnet-5) |
| Kimi K3 availability, model identifier, context, and effort controls | [Kimi Code — Models](https://www.kimi.com/code/docs/en/kimi-code/models.html), [Kimi Code — What’s new](https://www.kimi.com/code/docs/en/kimi-code/whats-new.html) |
| Antigravity browser-agent workflows and recorded browser evidence | [Google Codelab — Agentic UI automation with Antigravity](https://codelabs.developers.google.com/agentic-ui-automation-with-antigravity), [Google Codelab — Agentic UI testing](https://codelabs.developers.google.com/agentic-ui-testing), [Google Codelab — Getting started with Antigravity IDE](https://codelabs.developers.google.com/getting-started-agy-ide) |

The task-routing choices in Sections 4 and 7 are this playbook’s operating policy, not vendor-guaranteed rankings. Re-run bake-offs and revise roles when the actual project evidence changes.

### GitHub and CI

| Claim to reverify | Primary source |
|---|---|
| Protected branches and required status checks | [GitHub — About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), [GitHub — Status checks](https://docs.github.com/en/pull-requests/reference/status-checks) |
| Availability/configuration of Dependabot, secret scanning, push protection, and code scanning | [GitHub — Managing security and analysis settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) |

Repository plan, organization policy, and feature availability can change. Never promise a control before checking the actual repository.

### Cloudflare and framework deployment

| Claim to reverify | Primary source |
|---|---|
| Pages static deployment behavior | [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/) |
| Preview deployments and their default public visibility/Access protection | [Cloudflare Pages — Preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/) |
| Current full-stack Next.js support through Workers/OpenNext | [Cloudflare Workers — Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/), [Next.js — Runtime integration/adapters](https://nextjs.org/docs/pages/api-reference/adapters/runtime-integration) |
| Turnstile requires server-side token validation | [Cloudflare Turnstile — Server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/) |

Reverify supported Next.js features, compatibility flags, adapters, build commands, limits, preview behavior, and plan features for each production project.

### Accessibility, testing, animation, and performance

| Claim to reverify | Primary source |
|---|---|
| WCAG 2.2 and Level AA criteria | [W3C — Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) |
| axe-core scope and need for manual review | [Deque — axe-core](https://github.com/dequelabs/axe-core), [axe-core API](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md) |
| Playwright browsers, CI, locators, traces, and practices | [Playwright — Running tests](https://playwright.dev/docs/running-tests), [Playwright — Browsers](https://playwright.dev/docs/browsers), [Playwright — Best practices](https://playwright.dev/docs/best-practices) |
| GSAP lifecycle cleanup and ScrollTrigger behavior | [GSAP — `gsap.context()`](https://gsap.com/docs/v3/GSAP/gsap.context()/), [GSAP — ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) |
| Motion reduced-motion and automatic animation cleanup APIs | [Motion — `useReducedMotion`](https://motion.dev/docs/react-use-reduced-motion), [Motion — `useAnimate`](https://motion.dev/docs/react-use-animate) |
| Three.js manual GPU-resource disposal | [Three.js manual — Cleanup](https://threejs.org/manual/en/cleanup.html) |
| Core Web Vitals, field data, and Lighthouse limitations for INP | [web.dev — Web Vitals](https://web.dev/articles/vitals) |

### Time-sensitive claims

Reverify before reuse:

- model names, aliases, access tiers, effort controls, context limits, prices, and IDE/API integrations;
- Cloudflare adapter compatibility, framework feature coverage, build commands, limits, access controls, and plan availability;
- GitHub repository-plan security features;
- browser/tool versions and CI configuration;
- Web Vitals definitions/thresholds and auditing-tool capabilities;
- accessibility techniques when the target standard, browser, or assistive technology changes.

### Claims intentionally excluded

This candidate does not preserve unsupported or fast-expiring claims from prior drafts about:

- subscription pauses or future release dates;
- exact model/API pricing;
- leaderboard superiority;
- universal “best model” status;
- free-plan coverage for every client control;
- scans proving security or automated checks proving accessibility;
- Lighthouse proving real-user Core Web Vitals;
- one animation library being universally incompatible with another.

Future editors should add such a claim only when it is necessary, sourced, dated, scoped, and scheduled for reverification.

---

## 25. Plain-English glossary

Plain-language definitions of the terms used in this playbook. You do not need to memorise these — when a term appears and you are unsure, look here. Nothing in the workflow assumes you already know them.

### Git and GitHub

- **Repository (repo):** the home of one project's code and its history. A local repo lives on your computer; a remote repo (on GitHub) is the shared online copy.
- **Git:** the tool that records the history of your project so you can save points, go back, and see what changed. It is what makes "undo" possible.
- **GitHub:** the website that hosts your remote repository and runs reviews, checks, and collaboration around it.
- **Branch:** a separate line of work inside the repo where you can make changes without touching the "real" version. `main` is usually the real, live version.
- **`main`:** the primary branch — the version that represents the real, current project. On client work it is protected so nothing changes it without review.
- **Commit:** one saved point in the history, with a short message describing what changed. Think of it as a labelled save.
- **Checkpoint:** an intentional commit made before or after a task specifically so you have a clean point to return to. (See the practice-track auto-checkpoint habit in Section 9.)
- **Push:** send your local commits up to the remote repo on GitHub.
- **Pull request (PR):** a proposal to merge one branch's changes into another (usually into `main`). It shows every changed line and is where reviews and checks happen before the change becomes real.
- **Merge:** accept a pull request so its changes become part of the target branch.
- **Revert:** undo a change by returning to an earlier saved state, rather than trying to patch the broken version.
- **Diff:** the exact before-and-after view of what a change did — which lines were added, removed, or modified.
- **`git status`:** a command that shows what has changed and which branch you are on. Agents inspect this before editing.
- **`.gitignore`:** a list of files Git should never track (for example secrets, build output, and `node_modules`).
- **Hotfix:** a small, urgent correction to a live production problem, made on its own branch straight from `main` and merged back afterward.
- **Worktree:** a second working folder attached to the same repo, letting you work on another branch without disturbing your main folder. Used to isolate risky or parallel work.

### Running the project

- **Terminal:** the text window where you type commands. A handful of commands cover almost everything you need.
- **Claude Code:** Claude working directly in your project — reading files, editing them, and running commands — rather than only chatting. It reads `CLAUDE.md` at the start of each session.
- **Node / npm:** Node runs JavaScript outside a browser; npm installs and manages the packages (reusable code) a project depends on.
- **Package / dependency:** reusable code your project pulls in instead of writing from scratch.
- **Lockfile (e.g. `package-lock.json`):** a file that pins the exact versions of every dependency so every machine installs the same thing. "Frozen-lockfile" install means install exactly those versions, no surprises.
- **Dev server / localhost:** your site running privately on your own computer while you build, usually at an address starting `localhost`.
- **Build:** turning your source code into the finished files that actually get served to visitors.
- **Scaffold:** the empty-but-working skeleton of a project — folders, config, and tooling — before any real pages exist.

### Checks, testing, and review

- **CI (Continuous Integration):** robots on GitHub that automatically run your checks (lint, types, tests, build) on every pull request. On the client track, `main` refuses to merge until they pass. This is the real gate.
- **Lint:** an automated check for style and suspicious-pattern problems in code.
- **Typecheck:** an automated check that the code's data types are used consistently, catching a class of bugs before the code runs.
- **Playwright:** a tool that drives a real browser to test that your site's journeys actually work.
- **axe-core / axe:** an automated accessibility checker. It finds only a subset of problems — a clean result is not proof of accessibility.
- **Lighthouse:** a lab tool that measures things like performance in a controlled test. Its score is a diagnostic, not proof of real-user experience.
- **Vertical slice:** one section or page built completely — real content, responsive, accessible, tested — to prove the approach before building everything else.
- **Bake-off:** a small, fair, same-spec comparison of two models on one representative section, used only when visual quality materially matters.
- **CodeRabbit:** an optional AI reviewer that comments on pull requests. Its comments are suggestions, not proof, and it does not replace CI or human review.

### Hosting and web

- **Cloudflare Pages:** hosting for static sites; connects to GitHub, and every non-production branch automatically gets a preview URL.
- **Cloudflare Workers + OpenNext:** how a full-stack Next.js app runs on Cloudflare. Needs a compatibility check before you commit a client project to it.
- **Cloudflare Access:** real login protection for preview URLs. An obscure link is not protection; Access is.
- **Turnstile:** Cloudflare's CAPTCHA-alternative for forms. It only protects anything when the token is verified on the server, not just shown in the browser.
- **Preview / staging / production:** the environments a project moves through — preview is for review, production is the live site real visitors use. Each keeps its own separate configuration and secrets.
- **DNS:** the system that points your domain name at where the site is actually hosted.
- **Rollback:** returning the live site to a previous known-good deployment when a change goes wrong.

### AI, models, and tools

- **Model:** which AI is doing the work (for example Sonnet 5, Opus 4.8, Fable 5). See the routing table in Section 4.
- **Effort / reasoning:** how long a model thinks before answering. Higher effort helps genuinely hard problems but costs more; it does not fix a vague request.
- **Mode:** how much freedom the agent has while working — PLAN (look only), ASK-each-time (approve every change), or AUTO-accept (applies edits itself within safe bounds). Full detail in Section 9.
- **Kimi Code:** Moonshot's official command-line tool for running the Kimi K3 model — the supported route, and it runs in any terminal.
- **Claude Security plugin:** an on-demand scanner you run in Claude Code (`/claude-security`). Its findings are suggestions to consider, not proof that the code is secure.
- **Hook (UserPromptSubmit hook):** a small automatic action the tool runs on every message you send. This playbook uses one to re-inject the golden rule on every prompt, so the rule cannot silently drop out of a long conversation. Setup is in Section 21.

### Common bug terms

- **Hydration error:** a common framework bug where the page the server built and the page the browser built disagree.
- **Reduced motion:** a setting some visitors turn on to limit animation; the site must respect it.
- **RUM (Real-User Monitoring):** performance data collected from actual visitors, as opposed to a lab test.
- **LCP / INP / CLS (Core Web Vitals):** three field measurements of real-user experience — roughly, how fast the main content loads, how responsive the page feels to interaction, and how much the layout unexpectedly shifts.
