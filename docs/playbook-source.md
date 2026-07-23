# The Visual Playbook — Version 2

**This document replaces every previous version.** It is the single source of truth for how you build premium websites with AI models, and the source content for "The Walkthrough" app.

**Last verified: July 23, 2026.** Anything about specific models, prices, or product features can change — a list of time-sensitive claims to re-check lives at the very end of this document.

---

# THE THREE KINDS OF RULE (read this first)

Every rule in this playbook wears one of three badges. This is the most important idea in the whole document, because it tells you how seriously to take each instruction.

🛑 **PRODUCTION REQUIREMENT** — genuinely non-negotiable on real/client work. Breaking these can lose data, leak secrets, or ship broken products. Examples: never commit secrets; required CI checks must pass before merging client work; forms need server-side validation.

✅ **RECOMMENDED DEFAULT** — a good starting choice that lets you stop deliberating and proceed. Not a law. If you have a reason to deviate, deviating is fine. Examples: start routine work with Sonnet 5; one active feature branch at a time.

🎓 **PERSONAL HABIT / BUDGET** — a training-wheel or self-control rule that exists for *you specifically*, because of how you learn and where you overspend. Useful, honest, and absolutely not a universal engineering truth. Examples: the Fable allowance; ask-each-time mode while learning; two attempts before stopping to diagnose.

When you feel that mid-project anxiety — "am I doing this the RIGHT way?" — check the badge. If it's ✅ or 🎓, the answer is: you're fine either way. Proceed.

---

# PART A — Build brief for "The Walkthrough" app, Version 2

*(The v1 app is already built, live, and working. This brief covers v2 — the upgrade. Nothing needs rebuilding from scratch.)*

**Recommended builder for v2 (✅, decided by project bake-off logic, last verified July 23, 2026):** GPT-5.6 Sol in Codex, high/maximum reasoning, plan-first, one feature branch, committing in coherent stages. **Independent reviewer:** Fable 5 in a fresh context, read-only first, ranking findings Blocker / High / Medium / Low / Preference-only. Sol implements confirmed fixes. This pairing means both frontier labs will have built real versions of this product — your own permanent bake-off data. It is a project decision, not a permanent ranking.

**v2 changes to build:**

1. **The three rule badges.** Every rule, tip, and gate in the app displays its badge (🛑 / ✅ / 🎓) with a one-line legend always reachable. The app must never teach a personal habit as universal truth.
2. **Settings screen.** The player can edit: default model; frontier-model budget (see next item); which tools they have (Kimi Code yes/no, CodeRabbit yes/no, Codex yes/no); hosting platform; practice vs client track. Prompts and badges adapt to these settings.
3. **"Fable coins" become configurable frontier-model credits**, labelled on-screen: *"This is a personal usage budget designed to prevent anxious overuse of your most expensive model. It is not a software-engineering rule."* Default: 2 credits per project, editable.
4. **Track switch.** Practice track hides PR/CI ceremony; client track shows it and marks the 🛑 items.
5. **Carried over from the old v2 list:** session timer for frontier-model tasks, per-step notes with export, small completion celebrations, the completed-projects shelf (multiple projects, each with its own saved state, resumable, renamable, deletable).
6. **Hosting migration:** deploy v2 to **Cloudflare Pages** (the app is one static `index.html`, which is exactly what Pages is for). The v1 Vercel deployment stays live until v2 ships; retiring it is part of this exercise. Add a lightweight GitHub Actions check (HTML validity / link check / a basic Playwright smoke test) so the practice lap demonstrates CI too.
7. **Content:** this document (Parts B–E) verbatim as the app's content — no paraphrasing, no shortened prompts, no invented content.
8. **Unchanged v1 mechanics to preserve:** setup variables auto-filling prompts; the "You are here" single-task screen with model/effort/mode badges; the colour-coded progress map; gated checklists; the "I'm stuck" contextual help prompt; the escalation helper (updated to the diagnosis system in B.3, not a fixed model ladder); localStorage persistence; keyboard accessibility; reduced-motion support; phone + desktop layouts.

**v2 acceptance criteria:** everything on the v1 list still passes (variables, gates, persistence, resume-on-reload, keyboard operation, reduced motion, no console errors, content matches source) **plus**: badges render on every rule; settings change prompts and badges live; multiple projects persist independently; the escalation helper walks the B.3 diagnosis instead of asserting a fixed ladder; Cloudflare Pages preview and production both work; CI passes; rollback understood.

**Colour code (unchanged):** Sonnet blue · Opus purple · Fable coral · Kimi teal · Codex/Sol pink · Gemini/Antigravity amber · You grey.

---

# PART B — The operating rules

## B.1 Model selection: defaults, not mythology

**The principle (✅):** *Use a strong default model for routine work. Run a short project-specific comparison ("bake-off") when model choice could materially affect quality. Escalate according to the type of problem, not model mythology.*

Models change too fast for permanent rankings. Everything below is a **recommended default, last verified July 23, 2026** — expect it to age.

**Sonnet 5 (blue) — economical daily model. ✅** Routine implementation, copy and styling changes, straightforward responsive work, small bug fixes, tests, documentation, code explanation, maintenance, mechanical performance work, implementing clearly-defined review fixes.

**GPT-5.6 Sol (pink) — complex builder & cold reviewer. ✅** Planning complex projects, architecture, difficult implementation, long-context repository work, complex debugging, multi-file changes, high-stakes production changes, design-sensitive implementation, and cold review of work another model built. Recommended builder for the Walkthrough app v2.

**Opus 4.8 (purple) — strong alternative engineer. ✅** Architecture, long-running engineering work, refactoring, difficult debugging, complex repository changes, second engineering opinion when Sol or Sonnet isn't producing a reliable result. A normal marketing-site scaffold does *not* automatically need this tier — Sonnet or Sol usually suffices.

**Fable 5 (coral) — maximum-capability specialist. ✅** For work that is unusually long, ambiguous, or difficult; complex interactions that resisted other strong models; high-fidelity visual/interaction reasoning; architectural decisions that are expensive to get wrong; and read-only quality review of a nearly finished product's overall look and feel.

🎓 **Your personal Fable allowance:** a per-project budget (default 2 sessions) exists in the app *because you specifically tend to reach for the most expensive model when anxious, and it has repeatedly cost you your usage.* It is a self-control mechanism, honestly labelled — not an engineering rule. If a problem genuinely justifies Fable, use Fable; the budget is there to make you pause and check that it does.

**Kimi K3 (teal) — visual implementation candidate. ✅** Reference-driven UI experiments, translating screenshots into frontend code, rapid visual prototypes, and section-building **when a project bake-off shows K3 produces the best result for that project**. K3 debuted #1 on the Frontend Code Arena (July 2026) — a strong signal, not a permanent fact. Use K3 through **Kimi Code or another officially supported integration** (🛑 for client work: don't make a paying project depend on an unofficial integration). Third-party routes (e.g. an editor's bring-your-own-key feature) are optional and only after a small test confirms model selection, image input, and edit application actually work. *Access status (time-sensitive): consumer subscriptions paused since July 19, 2026; the API remains open and is the route that matters here; open weights due July 27, 2026 — after which third-party hosts become an option too.*

**Gemini / Antigravity (amber) — exploratory browser QA. ✅** Responsive screenshots, click-through exploration, cross-browser observations, recordings. 🛑 A browser-agent recording is supplementary evidence, never the only proof the product works — reproducible tests (Playwright) are the proof.

**CodeRabbit — optional AI reviewer. ✅** Comments on pull requests. Suggestions, not proof. It does not replace CI, testing, or security scanning; hosting does not replace it either — they're different jobs. Turn it on if you find its comments useful; skip it if you don't.

## B.2 The project bake-off (✅ for premium client work; skip for practice)

Before committing a whole premium project to one frontend builder:

1. Pick one representative section (the hero, or one highly styled section).
2. Give the *identical* spec + reference image to two likely models.
3. Build in separate disposable branches or isolated prototypes.
4. Compare: visual fidelity · responsive behaviour · accessibility · code quality · number of correction turns · performance · time · cost.
5. Choose the winner *for this project*. Archive or delete the loser.

Don't run multi-model competitions for ordinary tasks — this is for when visual quality materially affects the commercial result.

## B.3 Escalation by diagnosis, not by ladder

🎓 **Attempt 1:** give the current model a small, clearly bounded task.
🎓 **Attempt 2:** improve the task first — add the exact error, relevant logs, a screenshot, expected-vs-actual behaviour, file names, a smaller scope, a clear acceptance test. Then retry once.

**After two failures, stop and diagnose which kind of failure it is:**

- **Specification failure** (the request is unclear/contradictory) → stop coding; rewrite the requirement; update SPEC.md if needed. Switching models won't fix a vague ask.
- **Context failure** (the model lacks a file, screenshot, error, or rule) → supply the missing context. Don't escalate because the prompt was incomplete.
- **Visual failure** (doesn't match the design) → improve/crop/annotate the reference; state exact visual differences; consider the bake-off winner.
- **Logic/debugging failure** (code misbehaves) → escalate Sonnet → Sol or Opus; Fable only when the problem justifies it.
- **Architectural failure** (the structure itself is fighting you) → stop patching; Sol, Opus or Fable in plan mode; update ARCHITECTURE.md *before* structural changes.
- **Environment/integration failure** (Cloudflare, GitHub, packages, runtime) → check official docs and logs. Don't burn model switches on a platform incompatibility.

## B.4 Modes and permissions — what's actually enforced

Three different things get confused; keep them separate:

1. **A technically enforced permission** — e.g. a genuinely read-only environment, a workspace without write credentials, a PR diff view. The model *cannot* change things.
2. **A tool's interface mode** — e.g. Claude Code's plan mode, ask-each-time, auto-accept. Real controls inside that tool.
3. **A natural-language instruction** — writing "don't edit anything." This is *behavioural guidance*, not a guarantee.

✅ For sensitive audits, prefer an actually enforced control: a real read-only mode, a disposable clone, a PR diff, or no write credentials.

🛑 Never grant unrestricted command execution ("full auto" / skip-permissions). One unwatched command can delete work or leak keys.

✅ Auto-accept edits only when: the task is mechanical and bounded; a clean branch exists; the current state is known; secrets are protected; required tests exist; commands still get conscious approval where possible; and the final diff gets reviewed.

🎓 Ask-each-time while you're learning — watching each change land is how you learn to read code.

## B.5 Git: two tracks, honest rules

Git itself is 🛑 on both tracks — it's what makes undo possible. The *ceremony* scales with stakes.

### Practice track (Project Zero, throwaway learning, personal experiments, nothing anyone depends on)

May simplify: small PRs may be skipped; CodeRabbit may be skipped; some changes may go straight to `main`.
Still required (🛑): a Git repository; useful commits; `.gitignore`; no secrets; local checks before pushing; a working deployment; the ability to revert.

🎓 **Your auto-checkpoint habit** (in `CLAUDE.md` on practice repos only): Claude commits a checkpoint before each task and commits+pushes after you confirm the result. This exists because you asked to stop thinking about Git while learning. It stays on practice repos. It does **not** apply to client work.

### Client production track

🛑 Required: private repository; protected `main`; pull requests; required CI checks (see B.7); preview deployments with real access protection; human acceptance review; real-device test; documented rollback; environment separation; no required second-person approval when no second person exists. CodeRabbit optional. Secret scanning, push protection, Dependabot, and CodeQL where available.

### Careful Git conduct for agents (🛑 on client track; ✅ everywhere)

```
Before changing code:
1. Run git status. 2. Report uncommitted changes. 3. Identify whether they
belong to the current task. 4. Confirm secrets/env files are ignored.
5. Do not stage or commit unrelated files. 6. Checkpoint only when the
state is understood.

Before committing:
1. Show a concise diff summary. 2. Stage only the task's files.
3. Run the required local checks. 4. Use an accurate, specific message.
5. Do not push until the human approved the result, or a repo rule
explicitly permits that narrow automated action.

Never: force-push without explicit approval · rewrite shared history ·
commit secrets · delete branches without approval · silence failing tests
to make CI green · change architecture merely to dodge a failing test.
```

### Fix-in-place vs revert (✅)

Fix in place when the regression is small, understood, and isolated. Revert when: the blast radius is unclear; speculative fixes are stacking up; the branch has no known-good state; or the whole approach was wrong. Preserve useful diagnostics (logs, the diff) before reverting. "Never let a model fix its own mistake" was too absolute — diagnose first, then choose.

### Branches (✅)

One active feature branch at a time, by default, as a solo beginner. **Exception — the hotfix:** a production defect may branch directly from `main` while a feature branch stays open; after the hotfix merges, update the feature branch from `main`. (Branching off an unmerged branch is what creates those confusing PRs that show changes you didn't make.)

## B.6 Security — what's real

🛑 The honest sentence, always: *"Automated scans found no currently detected high-severity issues. They do not prove the absence of vulnerabilities."* Never "the scan is clean, therefore the site is secure."

**The Claude Security plugin you have installed** (v0.10.0 at last check — time-sensitive) is an **on-demand** tool: run `/claude-security`, pick a scan (whole codebase or recent changes) at a chosen effort tier; findings are challenged before being reported; it proposes patches you choose to apply. It is assistive. It is not a complete audit, and its output is suggestions, not proof. If a command or menu doesn't exist on your account/version, don't force it — the tool landscape shifts.

**Real controls (🛑 on client track, ✅ on practice):**
1. GitHub secret scanning + push protection, where available.
2. Dependabot alerts (+ security updates where appropriate).
3. CodeQL or equivalent code scanning, where available.
4. Required CI status checks on `main`.
5. Server-side input validation on every form and API route.
6. Environment-variable separation (local / preview / production).
7. Manual human review of authentication, forms, payments, API routes, and anything touching sensitive data.
8. No production secrets in screenshots, prompts, source files, or client-side code — ever.
9. An `.env.example` with variable names but no values; a real `.gitignore`.
10. If a credential ever gets committed: rotate it immediately; deleting the commit is not enough.

## B.7 Hosting: Cloudflare, done correctly

*(Your live v1 app stays on Vercel until v2 ships — migrating it is part of the v2 exercise, not a chore today.)*

**Static sites & Project Zero → Cloudflare Pages. ✅** Connect to GitHub; non-production branches get preview deployments automatically.

**Full-stack Next.js → Cloudflare Workers with the OpenNext adapter. ✅** For SSR, route handlers, Server Actions, middleware the adapter supports. Do not put a full-stack app on the static-Pages path. Before committing a client project to it (🛑): verify the required Next.js features and packages support the Workers runtime; identify Node-specific dependencies; test with Cloudflare's production-like preview (not just `next dev`); confirm image handling; document any platform limitation. Exact command names vary — check Cloudflare's current docs rather than memorised commands.

**Preview protection (🛑 for client work):** an obscure preview URL is *not* confidential. Protect client previews with Cloudflare Access (free tier covers this) or another real access control, and *test* that a logged-out browser can't open it. Never use real customer/production data in previews.

**Environments (🛑):** separate values for local / preview / production. Production secrets don't get copied into preview unless genuinely required and safe.

**Operations (✅):** Cloudflare Web Analytics; real-user performance monitoring; Worker logs/observability where relevant; Turnstile for form abuse — **verified on the server**, a visible widget alone protects nothing; DNS/domain management where appropriate.

**Rollback (🛑 before client handover):** know which previous deployment is stable, know how to restore it, and test or document that process.

## B.8 CI is the gate (client track)

🛑 GitHub Actions gets installed during the scaffold, and `main` requires the checks to pass. Minimum per client-project PR:

```
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Add as appropriate: Playwright smoke tests · axe accessibility smoke tests · unit/integration tests · bundle-size checks · Cloudflare-runtime preview checks.

A production PR does **not** merge merely because it looks right, CodeRabbit approved, a model said "done," or the deployment succeeded. A successful deployment proves something deployed — not that the product is correct.

---

# PART C — The 11 steps

*(Model names in these steps are ✅ recommended defaults, last verified July 23, 2026 — the badge system, B.1's philosophy, and B.3's diagnosis always take precedence over any specific name.)*

## Step 0 — Set up the production safety system (once per machine + once per project)

**In one sentence:** install the safety net — version control, checks, hosting, and previews — before any real building.

**Expectation-setting (🎓):** this step has no visible payoff. You won't see anything resembling a website at the end of it. That's correct, not a failure.

**Once per machine:** Git installed · GitHub account · Cloudflare account · your model tools (Claude Code; Kimi Code when doing visual client work; Codex) · the Claude Security plugin.

**Once per project:**
- **Practice project:** repository (public is fine *if* the content is genuinely non-sensitive — never make a client repo public just to get free tooling 🛑); `.gitignore`; clone locally; open in your tool; `docs/` folder; instruction files (`CLAUDE.md`/`AGENTS.md`) — on practice repos these may include the 🎓 auto-checkpoint habit; Cloudflare Pages connected for previews.
- **Client project (all of the above, plus 🛑):** private repository; protected `main` with required status checks (and "require approvals" OFF when you're solo — that setting assumes a second person and will lock you out of your own merges); GitHub Actions from day one; `.env.example`; secret scanning, push protection, Dependabot, CodeQL where available; Cloudflare Access on previews; lockfile committed; Node/package-manager versions pinned; CodeRabbit optional.

**The practice lap (do once, ever):** branch → small change → local check → commit → push → pull request → CI runs → Cloudflare preview → (optional AI review) → your check → merge → production deploys → know how you'd roll back. That loop is the entire game; everything after is the loop with different content.

**You're finished when:** the practice lap worked end to end and you watched each part happen.

## Step 1 — Define scope, success, and acceptance

**In one sentence:** write `/docs/SPEC.md` — what's being built, for whom, and how everyone will know it's done.

**Who (✅):** GPT-5.6 Sol at high reasoning; Fable 5 for unusually complex briefs. **Mode:** plan/chat — no code exists yet. 🛑 **Human approval is mandatory; a model's output is never automatically the contract.**

SPEC.md includes: business objective · audience · primary conversion · sitemap · every page and section with a one-line purpose · content status (final vs provisional) · functional requirements · integrations · data handling · SEO requirements · **accessibility target: WCAG 2.2 AA by default** (🛑 set it here, not at the end) · supported browsers/devices · performance budget · analytics · out-of-scope list · client approval stages · acceptance criteria · who approves launch · maintenance expectations.

**For client work, also settle now (🛑):** deadlines and review dates · revision limits · change-request process · content and asset responsibility · domain and hosting ownership · privacy requirements · portfolio permission. (Full checklist: Part D.3.)

**You're finished when:** a stranger could read SPEC.md and correctly describe what's being built and how success is judged.

## Step 2 — Lock the content and design direction

**In one sentence:** you (not any model) choose how it looks, feels, and reads — captured in `/docs/DESIGN.md`, `/docs/CONTENT.md`, and `/docs/refs/`.

**Who:** you, with Midjourney for imagery and any model as note-taker. **Why it can't be skipped (✅):** left alone, models drift toward the same average design — references are what force them off that path.

Do: collect 3–5 real reference sites (screenshot the *specific sections* you mean, not homepages — and note in DESIGN.md exactly which aspect each reference is for) · moodboards with consistent style · one display + one text typeface, **licence confirmed** (🛑 for client work) · colour system · spacing/component language · motion language in plain words · responsive priorities · accessibility considerations per component · banned patterns · content: final copy or clearly-marked provisional (CONTENT.md) · asset rights and AI-asset approval recorded.

**AI prototypes (✅):** tools like Claude Design may generate exploratory directions to react to — label them *exploratory material*, not authoritative reference code. Human taste is the final decision-maker; nothing from a prototype gets pasted into the repo.

**You're finished when:** a stranger reading DESIGN.md could describe the vibe in three words matching your intent, and every asset's rights are accounted for.

## Step 3 — Choose the architecture, hosting, and build the scaffold

**In one sentence:** pick the *right-sized* technology for this project's actual requirements, then build the empty-but-working foundation with CI and previews attached.

**Who (✅):** Sol or Opus for the architecture decision (plan mode first); Sonnet can execute a straightforward scaffold. Fable only if the architecture is genuinely unusual. **Expectation (🎓):** the result looks like almost nothing — an empty page that deploys. Correct, not broken.

🛑 **Do not default to Next.js.** Choose from requirements: plain HTML/CSS/JS · Astro · Next.js · a CMS — considering static vs server-rendered needs, forms/APIs, **Cloudflare runtime compatibility**, who edits content later, animation requirements, and maintenance burden. Record the decision and its reasons in `/docs/ARCHITECTURE.md`; motion rules in `/docs/MOTION.md`; operational notes (envs, deploy, rollback) in `/docs/OPERATIONS.md`.

Scaffold includes: folder structure · typecheck + lint + test setup · GitHub Actions wired (client track 🛑) · Cloudflare config + preview deployment · environment handling · error handling where relevant · metadata foundation · accessibility foundation (semantic landmarks, focus styles) · responsive foundation · production build verified.

**You're finished when:** CI passes **and** a Cloudflare preview loads. Both, not either.

## Step 4 — Build and approve a representative vertical slice

**In one sentence:** build ONE section or page completely — real content, real type, responsive, accessible, performant, previewed — and get it approved before mass production.

**Who (✅):** for premium client work, **this is where the bake-off runs** (B.2) and the winner builds the slice. Otherwise: Sonnet for straightforward, Sol for design-sensitive, K3 for reference-driven visual work.

The slice answers, cheaply: is the design direction translating? is the component approach sound? is the chosen model reliable *on this project*? is the animation direction realistic? does the responsive system work? is the client expecting something different? 🛑 Do not build the whole site before these are answered — this is the single best insurance in the playbook.

**You're finished when:** the slice passes lint/typecheck/tests/build, an accessibility smoke check, the Cloudflare preview, a real-phone look, and human (or client) approval.

## Step 5 — Build the remaining sections and pages

**In one sentence:** repeat the slice's proven approach across the site, in coherent feature groups.

**Who (✅):** the slice's winning model for visual sections; Sonnet for logic pieces; escalate per B.3. **Mode (🎓):** diff-review while learning; bounded auto-edit once a model has earned trust on this project.

✅ One PR per *understandable unit*, not per tiny section: navigation + global layout · homepage content sections · portfolio/work pages · about/services · footer + global CTAs. Each group passes: lint · typecheck · relevant tests · production build · accessibility smoke test · Cloudflare preview · desktop review · **real-phone review**. Visual feedback to models must be specific and measurable ("the heading is ~2× too small relative to the image — match the reference crop"), not "make it better."

## Step 6 — Build the signature interactions

**In one sentence:** the 2–3 "wow" moments — scroll sequences, hero animation, canvas work — built plan-first, one at a time, then hand-tuned by you on a real phone.

**Who (✅):** the strongest suitable model *for this interaction* — Sol, Fable, Opus, or the bake-off winner; a tiny prototype settles genuine doubt. 🎓 Don't spend a Fable credit because a step number says so — spend it when the interaction's difficulty justifies it.

Method (✅): plan mode first · written animation beats · one isolated interaction per branch · explicit mobile behaviour · explicit reduced-motion fallback · performance budget stated up front · cleanup requirements stated up front · real-device testing before merge.

**Animation rules (revised — honest versions):**
- ✅ *Prefer* transform and opacity for high-frequency animation — they're generally the safest performance choices. Other properties (layout, colour, filter) may be animated deliberately when the cost has been tested.
- 🛑 **One owner per animated property.** GSAP and Motion must never both control the same property on the same element — that's the real conflict.
- ✅ Motion by default for state-driven component animation; GSAP for timeline-heavy, scroll-driven, or highly coordinated sequences where it clearly helps. "One system per component" is a useful beginner simplification (🎓), not a technical law.
- 🛑 Every animated component: cleans up timelines, ScrollTriggers, and listeners; avoids duplicate setup on React rerenders; respects reduced motion; has a simplified/non-animated fallback; has mobile-specific behaviour where needed; never traps keyboard or screen-reader users; is tested on a representative lower-powered phone.

## Step 7 — Forms, integrations, content systems, and SEO

**In one sentence:** everything that makes the site *do* things — built with its tests, not with tests postponed.

**Who (✅):** Sonnet/Sol by task complexity; 🛑 human review on anything touching auth, payments, or personal data.

🛑 Every form: server-side validation · clear validation messages · success state · failure state · spam protection (Turnstile **verified server-side**) · rate limiting where appropriate · email delivery *tested* · logging or monitoring · privacy explanation · a retention decision · no secrets in browser code.

Where relevant: CMS · booking/API integrations · authentication · metadata + Open Graph · sitemap · robots · structured data · redirects · canonical URLs.

## Step 8 — Harden and test the entire product

**In one sentence:** the full-court press — automated and human — before anyone calls it finished.

Run: full CI · production build · Cloudflare-runtime preview · Playwright suite · accessibility automation (axe) **plus the human passes automation can't do**: keyboard-only pass · screen-reader pass · zoom/reflow (200%) · reduced-motion pass · responsive + cross-browser sweep · console-error check · broken-link check · form-delivery test · repeated Lighthouse runs under consistent conditions (✅ 90+ mobile is a sensible target for marketing sites — a target, not the sole gate) · bundle review · animation profiling (long main-thread tasks, layout shifts, memory growth during repeated navigation) · slower-network test · security checks per B.6 · dependency review · secret review.

Antigravity may add exploratory browser sweeps and recordings (✅) — supplementary to, never instead of, Playwright.

## Step 9 — Independent review, approval, and launch

**In one sentence:** a model that did not build it reviews it read-only; confirmed fixes go back to a builder; humans approve; then launch — with rollback ready.

**Who (✅):** cross-review — Sol reviews Claude-built work; Claude reviews Sol-built work; K3 can review visual fidelity. Reviewer is read-only for the initial report (enforced where possible, per B.4) and ranks findings **Blocker / High / Medium / Low / Preference-only**. 🛑 Preferences don't get fixed unless the human wants them.

Launch checklist (🛑 on client work): blockers + highs resolved · CI green · client approval in writing · domain + DNS verified · production env vars confirmed · analytics + privacy/consent settings confirmed · form delivery confirmed in production path · monitoring on (errors, uptime/form monitoring) · rollback confirmed · content freeze in effect (Part D.4) · accessibility acceptance done · custom 404/error pages exist · merge to `main` · **verify the actual production domain in a real browser.**

## Step 10 — Maintain, monitor, and handle emergencies

**Routine (✅):** issue → clarify acceptance criteria → branch → change → tests → preview → review → merge → verify production. Covers: dependency updates · security alerts · analytics + Core Web Vitals review (LCP, INP, CLS from real users) · error and form monitoring · content updates · broken-link checks · backup/export checks · keeping docs and ARCHITECTURE.md true.

**Hotfix path (🛑 memorise):** confirm the production defect → branch directly from `main` → smallest safe fix → focused tests + build → preview → merge → verify production → update any open feature branch from `main` → write down what happened.

**Fable in maintenance (✅):** not banned — simply unnecessary for normal maintenance, reserved for problems that justify it.

---

# PART D — Quick reference

## D.1 The one-glance table (✅ defaults, last verified July 23, 2026)

| Situation | Starting model/tool | Escalation / alternative | Mode |
|---|---|---|---|
| Routine coding task | Sonnet 5 | Sol or Opus after a *diagnosed* failure (B.3) | Ask, or bounded auto-edit |
| Complex architecture | GPT-5.6 Sol or Opus 4.8 | Fable 5 for exceptional complexity | Plan, then reviewed edits |
| Walkthrough app v2 build | GPT-5.6 Sol (Codex) | Fable 5 read-only review; K3 optional prototype | Plan, then branch edits |
| Reference-driven section | Project bake-off winner | K3 / Sol / Sonnet / Fable | Diff review |
| Complex animation | Sol / Fable / Opus, prototype decides | A different strong model reviews | Plan, then closely reviewed edits |
| Tests & documentation | Sonnet 5 | Sol for complex test architecture | Bounded auto-edit |
| Logic / integration | Sonnet or Sol | Opus/Fable for persistent hard problems | Ask or reviewed edits |
| Browser regression testing | Playwright | Antigravity for exploratory sweeps | Automated + report-only |
| PR quality review | CodeRabbit (optional) | Fresh-context model | Report first |
| Security | GitHub controls + CI + human review (B.6) | Specialist review where risk warrants | Enforced controls |
| Hosting: static site | Cloudflare Pages | Workers if runtime logic needed | Automated preview |
| Hosting: full-stack Next.js | Cloudflare Workers + OpenNext | Reconsider platform if incompatible | Production-like preview |
| Final cold review | A model that didn't build it | Second reviewer only for high-risk work | Read-only first |
| Human visual approval | You (client where relevant) | — | 🛑 No model replaces this |

## D.2 Dictionary (updated entries only — plain-English entries from v1 carry over)

- **CI (Continuous Integration):** robots on GitHub that run your checks (lint, types, tests, build) on every pull request. On the client track, `main` refuses merges until they pass. The real gate.
- **Cloudflare Pages:** hosting for static sites; connects to GitHub; every non-production branch gets a preview URL.
- **Cloudflare Workers + OpenNext:** how full-stack Next.js runs on Cloudflare. Needs a compatibility check before client commitments.
- **Cloudflare Access:** real login protection for preview URLs. Obscurity is not protection.
- **Turnstile:** Cloudflare's CAPTCHA-alternative for forms — only counts when verified on the server.
- **Vertical slice:** one section/page built completely to prove the approach before mass production.
- **Bake-off:** a small same-spec, same-reference model comparison on one section, when visual quality materially matters.
- **Claude Security plugin:** on-demand `/claude-security` scans; findings are suggestions, not proof (B.6).
- **Kimi Code:** Moonshot's official CLI for K3 — the supported route; runs in any terminal, including Antigravity's.

## D.3 Client delivery checklist (🛑 — settle before design or development)

Business objective · audience · primary conversion · page + feature inventory · integrations · content responsibility · asset responsibility · deadlines + review dates · revision limits · out-of-scope list · change-request process · acceptance criteria · launch approver · maintenance responsibility · accessibility target · browser/device support · analytics + privacy + SEO requirements · CMS/editing needs · domain ownership · hosting ownership · font/stock/image licensing · AI-asset approval · logo + brand files · portfolio permission.

## D.4 Content freeze & change control (🛑 for client work)

1. Draft scope approved → 2. Sitemap approved → 3. Design direction approved → 4. Core content approved (or clearly provisional) → 5. Vertical slice approved → 6. Remaining build → 7. **Content freeze before final QA** → 8. Anything new after freeze is a *documented change request* unless it fixes a defect. A client request is not automatically a small revision because it sounds small — compare to approved scope, estimate impact, raise it properly.

---

# PART E — Troubleshooting, costs, and Project Zero

## E.1 Troubleshooting by cause

**"It looks generic."** Weak references · vague DESIGN.md · generic content · no approved vertical slice · default component patterns overused. Fix the inputs, not the model.

**"It doesn't match the reference."** Reference too broad · wrong crop · missing measurements · wrong assets · model unsuited to this project (bake-off) · feedback not specific enough.

**"It's slow."** Check: bundle size · image sizes · font loading · layout shifts · long tasks · excessive JS · animation count · mobile variants · repeated animation setup · memory leaks · Cloudflare-runtime behaviour.

**"CI is failing."** 🛑 Never ask a model to silence the failure. Identify which check: lint · types · unit tests · browser tests · build · runtime compatibility · env vars — then fix that thing.

**"Cloudflare preview differs from local dev."** Test with the production-like preview runtime, then inspect: unsupported Node APIs · package compatibility · bindings · env vars · build config · caching · runtime logs.

**"A model keeps making it worse."** Stop → inspect the diff → preserve logs → revert if direction is unclear → shrink the task → reconfirm acceptance criteria → escalate only after diagnosing (B.3).

**"The client asked for a big change late."** D.4. Compare to scope → estimate impact → change request → update spec/design/deadline. Don't silently absorb it.

## E.2 Costs (last verified July 23, 2026 — all of this drifts; check official pages before purchase)

1. **Required infrastructure (free tiers cover the practice track):** GitHub · Git · Cloudflare (Pages/Access/Turnstile free tiers) · a Claude plan for Claude Code.
2. **Optional convenience:** CodeRabbit (free on public repos; paid for private) · Cursor or similar editors (a visual-diff/autocomplete convenience — overlaps with tools you own; still worth it *if* you find its interface materially faster) · Vercel (fine product; you're standardising on Cloudflare).
3. **Optional model upgrades:** higher Claude tiers · ChatGPT tiers above Plus.
4. **Per-project usage:** Kimi K3 API ($3/M in, $15/M out, $0.30 cached — pay-as-you-go; $10 of credit is a sensible first load); any other API metering. Kimi *memberships* ($19–$199, currently paused for new signups) do **not** include API access — different product.
5. **Client-billable:** premium fonts · stock · client-requested services — pass through, don't absorb.

## E.3 Project Zero — status and the v2 exercise

**Status: v1 is built, live, and yours.** It shipped through the full loop and taught you the loop. Nothing about this revision invalidates it.

**The v2 exercise (your next maintenance rep):** hand Part A of this document to GPT-5.6 Sol in Codex — plan first, one feature branch, coherent commits — building the badge system, settings, configurable credits, the projects shelf, the carried-over v2 features, CI, and the Cloudflare Pages migration. Then Fable 5, fresh context, read-only review against this document and the reference images, findings ranked Blocker→Preference. Sol implements confirmed findings. Merge, verify production on Cloudflare, retire the Vercel deployment. Optional: K3 builds one key screen as a disposable prototype *only if* the comparison would change the final design.

---

# CONSISTENCY CHECKLIST (verified for this document)

- Part A matches Parts B–E: badges, settings, credits, tracks, Cloudflare, and the Sol-builds/Fable-reviews pairing appear identically in both. ✓
- Model assignments are consistent everywhere and always labelled ✅ defaults with a verification date; no permanent-ranking language remains. ✓
- Cloudflare replaces Vercel throughout for new/client work; the one exception (v1 app remains on Vercel until the v2 migration) is stated deliberately in B.7 and E.3. ✓
- CodeRabbit is optional everywhere it appears. ✓
- CI is mandatory on the client track (B.8, Step 0, Step 3) and lightweight-but-present for Project Zero v2. ✓
- Project Zero v2's recommended builder is GPT-5.6 Sol, with Fable 5 as read-only reviewer, framed as a project decision. ✓
- Fable: capability-based role + honestly-labelled 🎓 personal allowance; the "exactly twice vs. third emergency use" contradiction is removed. ✓
- Kimi: strong visual candidate via official integrations; arena result dated; access status dated; no "categorically best" claim. ✓
- Security: plugin described accurately as on-demand and assistive; real controls listed; "clean scan ≠ secure" language used. ✓
- Animation rules: one-owner-per-property is the hard rule; transform/opacity is a preference; per-component separation is labelled 🎓. ✓
- Client delivery, content freeze, and change control are present (D.3, D.4, Steps 1/9/10). ✓
- No contradiction remains between the model budget (🎓 personal) and the escalation system (B.3 capability-based). ✓

# TIME-SENSITIVE CLAIMS TO REVERIFY LATER

1. All model roles, rankings and pairings in B.1/D.1 (verified July 23, 2026 — expect drift within months).
2. Kimi K3 access: consumer signups paused (July 19); API open; open weights due **July 27, 2026**; membership tiers/pricing.
3. All prices in E.2, including Kimi API rates and Sonnet's announced Sept 1 price change.
4. Claude Security plugin behaviour/commands (v0.10.0) and any newer Anthropic security products' availability on your plan.
5. Cloudflare's OpenNext adapter compatibility and preview-command names.
6. GitHub feature availability on your plan (secret scanning, push protection, CodeQL for private repos).
7. Codex/ChatGPT Plus reasoning tiers and limits; Claude Code app UI (mode toggles, plugin menu paths).
8. CodeRabbit free-tier terms for public repositories.
9. WCAG 2.2 as the current target (a 3.0 draft process exists; AA of the current standard remains the sensible default).
10. Whether Cursor or other editors have added capabilities that change the convenience calculus in E.2.
