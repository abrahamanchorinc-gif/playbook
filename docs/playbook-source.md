# The Visual Playbook — Complete Source Document

**This file replaces every previous document.** It has two jobs:
1. It is your complete, readable playbook on its own.
2. It is the exact content you hand to Kimi K3 so it can build the visual version. Part A tells Kimi how. Parts B–E are the content.

Prices in USD, checked July 22, 2026.

---

# PART A — Instructions for the builder: build "The Walkthrough" (an interactive guided app)

*(Human: when you do Project Zero, paste this ENTIRE file to the builder — Kimi K3, or Fable 5 standing in — and say: "Build the app described in Part A using the content in Parts B to E.")*

Builder: you are building a single, self-contained **index.html** file — all CSS and JavaScript inline, no build step, no external services — that turns this playbook into an interactive guided walkthrough game. It will be deployed on Vercel as-is. Save all progress in the browser's localStorage so the player can close the tab any time and resume exactly where they left off.

**The player:** a beginner who loses track of where they are, reaches for the expensive model when anxious, forgets the Git safety net, learns visually, and wants to master this — every mechanic below exists to fix one of those. The tone is a calm, confident guide: game-like satisfaction, never childish.

**The one law: show everything, hide nothing.** The current task is huge and prominent; everything else may be collapsed for calm, but must always be reachable and fully readable — no information locked behind progress, ever.

**Use the text in Parts B–E word for word** for all step content, rules, tables, dictionary and troubleshooting. Do not paraphrase, shorten, or "improve" it. Do not shorten the prompts. Do not invent content.

**Colour code (used everywhere, consistently):**
| Who | Colour |
|---|---|
| Sonnet 5 | Blue |
| Opus 4.8 | Purple |
| Fable 5 | Coral red |
| Kimi K3 | Teal |
| Codex (GPT-5.6 Sol) | Pink |
| Gemini / Antigravity | Amber |
| You (the human) / no model | Grey |

**Screens:**
1. **Setup (first run only):** asks the project variables once — project name, site idea (a paragraph), audience, the one feeling, rough section list. Every prompt in the whole app auto-fills these into its brackets from then on. An "edit variables" control exists later.
2. **Main screen — "You are here":** always exactly one current task, large: the step name, the task text, and three badges — MODEL (in its colour), EFFORT, MODE (PLAN / ASK / AUTO / READ-ONLY). One primary button: **Copy the prompt**. Secondary: **I'm stuck** and **Done → next**. Everything else on screen is quiet.
3. **The map:** the 11 steps as a progress path, colour-coded by model, current position marked, completed steps ticked. Tapping any step expands its full card containing all nine fields listed below.
4. **Reference drawer:** the Three Rules, the Ladder, the Switching Guide, the Modes guide, the cheat table, the dictionary, and "When things go wrong" — all present in full, collapsible.

**Core mechanics:**
- **Gated checklists.** Each step's "Do this" actions are tickable tasks, and each step ends with gate items taken from its "You are finished when" (e.g. "CodeRabbit commented", "Preview link loads", "Checked on my real phone"). A step cannot complete until its gates are ticked. Why: the loop is the real safety; the app enforces the loop.
- **Copy-prompt on every task**, auto-filled with the project variables. The pre-flight confirm (v2) adds three ticks before copying a build prompt: on a branch? committed? mode set to [badge]?
- **"I'm stuck" on every task.** Copies a help prompt pre-loaded with context: *"I'm following my website playbook. Step [N]: [step name]. Current task: [task text]. Expected model / effort / mode: [badges]. What's happening instead: [player describes here]. Guide me one small action at a time and wait for me between actions."* Pasting it into Claude (Sonnet) produces guided help with zero explaining.
- **The Ladder widget with strike counter.** Three rungs, current model highlighted. An **It failed** button records a strike on the current task. Strike 1 → show: "Improve the prompt: add the exact error message and a screenshot, make the task smaller. Try once more." Strike 2 → move the highlight up one rung, update the MODEL badge, and offer a pre-written escalation prompt. A **Solved — back to Sonnet** button resets the rung. Why: this automates Rule 3 so the player never argues with a model for an hour again.
- **Fable coins.** Two coin tokens always visible. Steps 1 and 5 each spend one, with a small satisfying animation. Any attempt to assign Fable elsewhere triggers: "Rule 2 — Fable opens twice per project. This isn't one of them." Why: it turns the budget the player finds hardest to keep into something visible and fun.
- **Progress and finish.** Completing a step advances the map with a satisfying moment. Completing Step 9 shows the finish screen: a trophy, a field for the live URL, and **Start next project** — which resets task state, keeps the variables editable, and adds the finished site to a small shelf of completed projects.
- **Notes seed.** Each step has a small "what went wrong / what worked" box and a **Copy all notes** button that outputs them formatted for NOTES.md. Why: it automates the mastery habit in Part 9.
- **Fable session timer.** When a Fable task begins, a gentle one-hour countdown appears ("one sitting").

**Every expanded step card contains these fields, in this order, always:**
1. Step number and name
2. "In one sentence" — what this step is
3. "Why this step exists"
4. "Who does it" — model, effort, **mode**, where, and how to select each. Show the model's colour prominently, and the mode as a badge: PLAN / ASK / AUTO / READ-ONLY
5. "Do this" — the numbered actions, as the tickable tasks
6. The copy-paste prompt(s), each in a monospace block with a copy button
7. "You are finished when" — rendered as the step's gate items
8. "Then" — what to close, what to open, which step is next
9. "If it goes wrong" (only where the content provides it)

**Build order — v1 before anything else:** v1 = setup screen, main screen, map, gated checklists, auto-filled copy prompts, "I'm stuck" prompts, the Ladder with strikes, Fable coins, localStorage saving. **v2** (only after v1 works end to end) = pre-flight confirms, session timer, celebrations, notes export, the completed-projects shelf. Why the split: the player ships v1 in one evening inside the full loop — and building v2 later becomes their first real Step 10 maintenance practice, on their own product.

Also: works beautifully on a phone, large readable type, and every player-facing word in plain English matching the tone of this document.

---

# PART B — Read this first (the rules of the whole system)

## B.1 The Three Rules

**Rule 1 — Sonnet is home.** Sonnet 5 is your everyday model. Every task starts with Sonnet on its normal setting. Using Opus or Fable is a short visit for a specific hard job; when the job is done, you come straight back to Sonnet.

**Rule 2 — Fable opens exactly twice per project.** Fable 5 is your smartest and most expensive model, and its usage allowance runs out fast. In a whole project you open it exactly two times: Step 1 (writing the plan) and Step 5 (the big animations). Any other Fable use means you have slipped back into your old habit — the one that kept eating your usage.

**Rule 3 — Two strikes, then climb.** A model gets two tries at any task. Between try one and try two, you improve your instructions: add the exact error message, add a screenshot, make the task smaller. If try two also fails, you move up one rung of the ladder. You never argue with a model for an hour.

**The safety net under all three rules:** before giving any model a task, save your game (in Git this is called a *commit* — see the dictionary). If the model breaks something, do not ask it to fix its own mess. Load your save (*revert*) and give a smaller, clearer task instead.

## B.2 The Ladder — which Claude do I pick?

Picture three rungs, bottom to top:

- **Bottom rung: Sonnet 5 (blue) — home base.** You start every task here. About 80% of all work never leaves this rung.
- **Middle rung: Opus 4.8 (purple) — the heavy lifter.** You climb here when Sonnet has failed twice, or when the job is big and careful by nature.
- **Top rung: Fable 5 (coral red) — the genius.** Only Step 1, Step 5, or a genuine emergency where Sonnet AND Opus have each failed twice on the same problem.

And one arrow pointing back down, labelled: **"Solved? Go straight back to Sonnet."**

## B.3 The Switching Guide (with real examples)

| If the task is... | Use | At what effort | Why |
|---|---|---|---|
| Change text, colours, spacing, images | Sonnet 5 | Normal | Easy work; the cheap model does it perfectly |
| A small bug ("this button doesn't work") | Sonnet 5 | Normal | Start at home; it usually solves it |
| Write tests, write comments, explain code to you | Sonnet 5 | Normal | Routine work |
| Sonnet got the same task wrong twice | Opus 4.8 | Normal | Two strikes — climb one rung |
| A job that touches many files at once (renaming something used everywhere, reorganising folders) | Opus 4.8 | High | Big careful jobs need the stronger model thinking longer |
| The one-time skeleton build (Step 3) | Opus 4.8 | High | Foundation work — start here directly, skip Sonnet for this one |
| A nasty bug that survived Opus on normal | Opus 4.8 | High | Same model, more thinking time |
| Sonnet failed twice AND Opus failed twice | Fable 5 | Don't touch its dial | Genuine emergency — Fable's third permitted use |
| Writing the project plan (Step 1) | Fable 5 | Don't touch its dial | Planning mistakes multiply into everything after, so use the best brain |
| The big animations (Step 5) | Fable 5 | Don't touch its dial | The hardest, most valuable code in the project |
| The moment any hard problem is solved | Back to Sonnet 5 | Normal | Rule 1 — come home |

**How to actually change effort:** in Claude Code, type `/model` to pick Sonnet, Opus, or Fable. If your version shows a thinking or effort option next to the model, that is the dial — normal for everyday, high when this guide says high. If you cannot find any dial, simply add the words **"think hard about this"** to your request — Claude Code treats that as the instruction to think longer. For Fable 5: it manages its own thinking depth, so never worry about its dial — your only job with Fable is keeping the task small.

**What effort is:** thinking time before answering. More effort = smarter on genuinely hard problems, but slower, and it burns your usage allowance much faster. More effort does NOT fix vague instructions or an oversized task. Small clear task on normal beats giant task on maximum, every single time.

## B.4 The Modes — how much freedom the model gets while it works

Model answers "who." Effort answers "how hard they think." **Mode answers "how much are you watching while they work?"** Every coding tool has some version of the same three modes, whatever names it uses. The idea that makes all of this make sense: **the yes-button was never your real safety.** Your real safety is the branch you're on, the commit behind you, and the pull-request review at the end. Mode only controls how closely you watch *during* the work.

**1. PLAN mode (look and think only).** The model can read your project and think, but it physically cannot change a file or run anything. It produces a plan; nothing happens until you approve it.
**Use it whenever the decision is expensive** — before the skeleton, before a wow animation, whenever "what exactly should we build?" hasn't been agreed yet.
**Why:** a wrong plan costs one conversation to fix; wrong code costs hours. Plan mode also makes it impossible for an eager model to "helpfully" start building before you've agreed — which is exactly how expensive Fable usage used to vanish.

**2. ASK-each-time (the normal, default mode).** The model proposes every single file change and every command, and waits for your yes before doing it.
**Use it while you're learning, and for delicate code.**
**Why:** watching each change land is how you learn to read code — and on delicate work, you catch a wrong direction after one file instead of after ten.

**3. AUTO-accept edits.** The model applies file changes by itself without asking each time. It still pauses to ask before bigger actions, like installing packages or running commands.
**Use it for mechanical, well-defined work on a branch** — scaffolding, performance passes, writing tests.
**Why:** clicking yes forty times on boilerplate teaches you nothing and protects you from nothing — the branch, the preview link, and CodeRabbit are doing the protecting. Auto-accept just removes friction where your attention adds no value.

**4. The banned mode: full auto / "skip permissions."** Some tools offer a mode where nothing is asked at all, commands included.
**Never use it, at any stage.** One bad command can delete work or leak your API key, and the minutes it saves are never worth that. If a tool offers it, the answer is no.

**How to switch, per tool:**
- **Claude Code:** press **Shift+Tab** to cycle between the modes — the current one is shown at the bottom of the panel. (Exact names vary a little by version; the three ideas above are always there.)
- **Cursor (for K3):** the chat panel has a mode picker. The ask-questions-only option is its plan mode. The agent option proposes edits as **diffs** — before/after views you accept or reject one at a time (that's ask-each-time) — or can be set to apply them automatically (that's auto-accept).
- **Codex:** when it offers approval levels, pick the review/suggest level for inspecting, and edits-on-a-branch for fixing. Never its full-auto level.
- **Antigravity:** always used report-only in this playbook, which is its read-only posture.

**The whole section in one line:** PLAN when deciding · ASK when learning or the code is delicate · AUTO when the work is mechanical and a branch + commit sit behind it · full auto never.

---

# PART C — The 11 steps

## Step 0 — Set up your tools

**In one sentence:** install and connect all seven tools, one time only, before your first project — you will never repeat this step.

**Why this step exists:** every later step assumes the tools are connected. Doing it once now means every future project starts in minutes.

**Who does it:** You (grey), with ChatGPT (your tutor) open beside you on its normal setting. No coding models are used yet. Time: one relaxed afternoon. **Mode for the practice lap: ASK-each-time** (Claude Code's default — touch nothing). Why: the entire point of Step 0 is watching what every single action does; approving each one IS the lesson.

**Do this:**
1. Make a GitHub account at github.com. Create one empty *repository* — that's the online home of a project's code. Call it anything.
2. In that repository's settings, turn on protection for the `main` *branch* (the "real" version of your code). Protection means nothing changes the real version without going through a *pull request* — a reviewed proposal. If you can't find the toggle, use the tutor prompt below.
3. Download and install Cursor (cursor.com) — the program where code gets written. Sign in. Use "Open Folder / Clone Repository" to open your GitHub repository in it.
4. In Cursor's settings, find the models section and paste in your Kimi K3 API key — the password string from your Kimi account. After this, "Kimi K3" appears in Cursor's model picker. Never paste this key anywhere except Cursor's settings.
5. Open Cursor's terminal — the text panel at the bottom (View menu → Terminal if hidden). Install Claude Code there and sign in with your Claude Max account. Once it's running, type `/model` — you'll see Sonnet 5, Opus 4.8, and Fable 5. That command is your model switch for all Claude work.
6. Go to coderabbit.ai, sign in with GitHub, and install it on your repository. That's all — from now on it automatically comments on every pull request you open. You never "run" it.
7. Go to vercel.com, sign in with GitHub, and import your repository. From now on, every pull request automatically gets a private preview link, and anything merged into `main` goes live.
8. Install Antigravity (Google's tool) and sign in. Leave it alone for now — it's only used for checking, much later.
9. In your project, create a folder named `docs`. This is the **shared notebook**. Models cannot read each other's chats — the ONLY way they stay coordinated is by reading the files in this folder before every task.
10. In the project's main folder, create a file named `CLAUDE.md`, and an identical copy named `AGENTS.md`, both containing exactly this: *"Before any task, read /docs/SPEC.md, /docs/DESIGN.md, /docs/ARCHITECTURE.md and /docs/MOTION.md. Never violate them. Never mix GSAP and Motion in the same component."* (Those four files don't exist yet — Steps 1, 2 and 3 create them. Claude reads CLAUDE.md automatically; the other tools read AGENTS.md.)

**Copy-paste prompt (use in ChatGPT whenever stuck):**
```
I'm on [Mac / Windows]. I'm setting up [tool name]. Right now my screen shows [describe it]. Tell me exactly what to click or type next, one action at a time.
```

**Then do the practice lap — do not skip it.** In Claude Code (Sonnet), say: *"Create a branch called test, add a file called hello.txt containing the word hi, commit it, push it, and open a pull request."* Then watch: CodeRabbit comments on the pull request, and Vercel attaches a preview link. Press merge on GitHub. That loop — **branch → change → pull request → robot review → your approval → merge** — is the entire game. Every step from here on is that loop with different content.

**You are finished when:** the practice lap worked end to end and you saw the CodeRabbit comment and the Vercel preview link with your own eyes.

**Then:** go to Step 1.

---

## Step 1 — Write the plan

**In one sentence:** tell Fable 5 your idea and turn it into a written plan file called SPEC.md that every other model will follow.

**Why this step exists:** every model works from written instructions, and mistakes in the plan multiply into everything built afterwards — so the plan is made by your best brain, once, and saved where all models can read it.

**A sentence you need:** Fable 5 is opened exactly twice per whole project (Rule 2). **This is the first of those two times.**

**Who does it:** Fable 5 (coral red). Where: the Claude app, or Claude Code with `/model` set to Fable 5. Don't touch any effort dial — Fable manages itself. Time: under one hour, one sitting. **Mode: PLAN.** In Claude Code, press Shift+Tab until the bottom of the panel says plan. Why: the plan IS the product of this step, and plan mode makes it physically impossible for Fable to start building the site early — which is exactly how expensive Fable usage used to vanish. (If you use the Claude app instead, there's no mode to set; the app can't touch your files anyway.)

**Do this:**
1. Paste prompt 1 below with your details filled in.
2. Fable will ask you up to five questions. Answer them honestly — "I don't know, you decide" is an allowed answer.
3. Paste prompt 2.
4. Read the SPEC.md it wrote. **Change anything you don't like — especially the wording.** AI writing is a draft; your taste is final.
5. Switch to ASK-each-time (Shift+Tab) for one action, and ask Claude Code: *"Save this as /docs/SPEC.md and commit it with the message 'add spec'."* Approve the save when it asks. Why the switch: plan mode can't write files — saving is the one moment this step needs hands.

**Copy-paste prompt 1:**
```
You are my lead architect. My website idea: [describe it]. It is for: [audience]. The single feeling a visitor should get: [one feeling]. Pages and sections I imagine: [rough list]. Before writing anything, ask me up to 5 questions that would improve the plan.
```

**Copy-paste prompt 2:**
```
Now write /docs/SPEC.md containing: a page map, every section with a one-sentence purpose, draft text for each section, and success criteria for the finished site.
```

**You are finished when:** you can describe every section of the site out loud in one sentence each, without looking.

**Then:** **close Fable 5 completely.** It stays closed until Step 5. Go to Step 2.

---

## Step 2 — Pick the look

**In one sentence:** you (not any AI) choose exactly how the site should look and feel, and save that decision as pictures and a file called DESIGN.md.

**Why this step exists:** left alone, every AI model drifts toward the same average design — that is why your old sites looked "AI-generated." Real reference pictures are the only thing that forces a model off that path. This is the single most important step for premium results.

**Who does it:** You (grey) + Midjourney for imagery. Sonnet 5 (blue, normal) only as your note-taker at the end. Time: half a day minimum. Rushing this step wastes every step after it. **Mode: ASK-each-time** for Sonnet's single file save — trivial here, but the habit is the point.

**Do this:**
1. Browse awwwards.com and godly.website. Find 3–5 sites that create the feeling you want.
2. Screenshot the **specific sections** you love — a hero, a menu, a gallery — not whole pages. Save the screenshots into `docs/refs/` in your project.
3. In Midjourney, create moodboards: colour worlds, textures, hero imagery. Use its style-reference feature so all images match each other.
4. Choose one display font (for headlines) and one text font (for paragraphs) — properly licensed. Choose your colour palette.
5. Write your **motion language** in ordinary words. Examples: "heavy, slow, cinematic — things settle like stone" or "light, springy, playful — things bounce into place."
6. Give all your notes to Sonnet 5 with the prompt below, then commit the file it writes.

**Copy-paste prompt (Sonnet 5):**
```
Turn these notes into /docs/DESIGN.md: fonts [names], colours [values], motion language: [your words], and a banned list: no purple-glow-on-dark, no floating glass cards, no generic 3D blobs, no default component-library look for hero sections.
```

**One permanent change from your old habit:** no more AI-generated website mockups as references. An AI's guess at a website fed into another AI doubles the generic look. Real, human-made award sites only.

**You are finished when:** a stranger reading DESIGN.md could describe your vibe in three words that match what's in your head.

**Then:** go to Step 3.

---

## Step 3 — Build the skeleton

**In one sentence:** Opus 4.8 sets up the empty but working project — the folder structure, the tools, and the rulebook files — with no visible sections yet.

**Why this step exists:** everything later hangs on this foundation, so it's built once, carefully, by the strong model, and its rules are written down so no later model can wander off and structure things differently.

**Who does it:** Opus 4.8 (purple) on **high** effort — go straight to Opus for this one, don't start at Sonnet. Where: Claude Code inside Cursor's terminal (`/model` → Opus 4.8, pick the high thinking option, or add "think hard about this" to the prompt). Time: an hour or two, mostly waiting. **Mode: PLAN first, then AUTO-accept edits.** Why both: the *decisions* in a skeleton are the expensive part — plan them, read them, approve them. But the *typing* is dozens of boilerplate files, and approving each one teaches you nothing; the branch, the preview link, and CodeRabbit are the real safety here, not the yes button.

**Do this:**
1. In Claude Code: *"Create a branch called scaffold."*
2. Press Shift+Tab until you're in **PLAN mode**. Paste the prompt below with this sentence added at the top: *"First present your plan for this scaffold and wait for my approval before building anything."*
3. Read the plan. Paste anything confusing into ChatGPT: *"Explain this plan like I'm new — any red flags?"* Happy? Approve it.
4. Switch to **AUTO-accept edits** (Shift+Tab) and let it build. It will still pause before bigger actions like installing packages — read those and say yes consciously; a command is an action on your computer.
5. When it finishes: *"Commit everything, push, and open a pull request."*
6. Open the Vercel preview link — an empty skeleton page should load without errors.
7. Read CodeRabbit's comments. Paste any you don't understand into Sonnet: *"Explain this like I'm new, and tell me if it matters."* Fix what matters, then merge.

**Copy-paste prompt (Opus 4.8, high):**
```
Read /docs/SPEC.md and /docs/DESIGN.md. Think hard about this. Set up a Next.js project with Tailwind, using Motion for small component animations and GSAP for large scroll-driven moments. Add React Three Fiber only if the spec requires 3D. Then write two files: /docs/ARCHITECTURE.md (folder layout, naming rules, where animation code lives) and /docs/MOTION.md containing these hard rules: Motion for small component animations only; GSAP and 3D only inside isolated sections with full cleanup when they unmount; animate transform and opacity only; every animation respects the user's reduced-motion setting; mobile gets its own animation settings from day one via matchMedia. Build a deployable empty skeleton — no real sections yet.
```

**You are finished when:** the empty skeleton loads on a Vercel preview link, and ARCHITECTURE.md and MOTION.md exist in `/docs`.

**Then:** switch to Kimi K3 in Cursor's chat panel. Go to Step 4.

---

## Step 4 — Build the sections, one at a time

**In one sentence:** Kimi K3 builds each visible piece of the site (hero, features, gallery, footer...) one at a time, always copying from one of your reference screenshots.

**Why this step exists:** building one small section at a time, each locked in by a review before the next begins, is what keeps quality high — the opposite of your old "generate the whole site at once, then tweak forever" habit. K3 does this step because it is currently the world's best model at matching a reference picture.

**Who does it:** Kimi K3 (teal), normal setting, in Cursor's chat panel with K3 selected from the model picker. You (grey) approve each section. Time: this is where most of the project hours go. Repeat the recipe below once per section. **Mode: Cursor's agent with diff review** — K3 proposes each change as a diff (a before/after view) and you accept or reject it. Why: for looks, *your eye* is the quality gate, and you don't yet know K3's habits — watching is how trust gets earned. After a few sections go smoothly, letting it auto-apply within the branch is fine, because the pull request and the real-phone check still guard the result. Any logic piece that goes to Sonnet: ASK-each-time in Claude Code — small delicate work gets watched.

**The recipe — repeat for every section:**
1. In Claude Code: *"Create a branch called section-hero"* (swap in each section's name).
2. In Cursor's chat with K3 selected: attach **one** reference screenshot from `docs/refs/`, and paste the prompt below with the blanks filled.
3. Look at the result in your dev server (the private local preview — Cursor/K3 will tell you the localhost address). Not right? Tell K3 *specifically* what's off: "the heading is much bigger relative to the image in the reference — match that." It compares screenshots and adjusts.
4. Optional but excellent: in Antigravity (amber), ask its agent to open your dev server and screenshot the section at phone width and desktop width, so you can compare against the reference side by side without squinting.
5. Happy? In Claude Code: *"Commit, push, open a pull request."* Read CodeRabbit's comments. **Open the Vercel preview link on your actual phone and look at it.** Then merge.
6. Next section — back to action 1.

**Copy-paste prompt (Kimi K3):**
```
Read /docs/DESIGN.md and /docs/MOTION.md. Build the [hero] section. Its purpose from the spec: [paste that section's one-sentence purpose and draft text from SPEC.md]. Match the attached reference image's layout and feel. It must work at desktop and phone widths. Use small Motion animations only — no GSAP in this section.
```

**If it goes wrong:**
- **K3 gets the LOOK wrong twice** → the problem is your reference, nine times out of ten. Crop the screenshot tighter to exactly the part you mean, or draw an arrow on it. Do not climb the ladder for looks — Opus and Fable are worse than K3 at this.
- **The broken part is LOGIC** (a form, saving data — anything about *working* rather than *looking*) → that's not K3's lane. Take just that piece to Sonnet 5 (blue, normal) in Claude Code.
- **A section seems to need Opus or Fable** → the section is too big. Split it into two smaller sections instead.
- **Kimi K3 is unavailable** → Sonnet 5 (blue, normal) builds sections instead. The recipe and the reference screenshots stay exactly the same — only the builder changes.

**You are finished when:** every section from SPEC.md is merged and looks right on your real phone.

**Then:** reopen Fable 5 — **the second and final of its two permitted uses.** Go to Step 5.

---## Step 5 — The wow moments

**In one sentence:** Fable 5 builds the two or three signature animations that make the site feel premium (the scroll-driven hero, a pinned sequence, maybe a 3D scene) — then you personally fine-tune the timing by hand on a real phone.

**Why this step exists:** these moments are the hardest code in the project AND the part visitors actually feel. The hardest code goes to the smartest model; the feel goes to the only one with taste — you. This hour of human fiddling is the entire difference between "nice site" and "out of this world."

**A sentence you need:** this is **the second of Fable 5's two permitted uses.** After this step, Fable stays closed for the rest of the project, including all maintenance, forever.

**Who does it:** Fable 5 (coral red) writes it → Sonnet 5 (blue) cleans it → You (grey) tune it. Where: Claude Code (`/model` → Fable 5). Time: budget half a day per moment. One branch per moment. **Mode: PLAN first, then ASK-each-time — never auto-accept in this step.** Why: this is the most delicate code in the whole project, it's the single best learning moment in the whole project, and Fable is expensive — ask-each-time means you catch a wrong direction after one file, not after ten.

**Do this (repeat per wow moment):**
1. In Claude Code: *"Create a branch called wow-hero."*
2. Shift+Tab to **PLAN mode** and ask: *"Before writing any code, describe the structure of the animation you'll build and how it follows MOTION.md."* Read it. Approve it.
3. Shift+Tab to **ASK-each-time**, then paste the prompt below with your beats filled in, approving each change as it comes.
4. When it works: **close Fable.** Switch `/model` to Sonnet and say: *"Clean this up and add plain-English comments explaining what every number in the animation timeline controls."*
5. **The human part.** Open the preview on a real phone. Change the numbers yourself — duration, delay, easing, overlap. Nudge, scroll, feel, repeat. Whenever curious, ask Sonnet: *"What does changing this number do?"* (This is also how you learn.)
6. *"Commit, push, open a pull request."* CodeRabbit, real-phone check, merge. Next moment → back to 1.

**Copy-paste prompt (Fable 5):**
```
Read /docs/MOTION.md. Build [the pinned hero scroll sequence]: [describe it beat by beat — for example: "as you scroll, the title splits apart, the product rotates into view, then everything settles into place"]. Use GSAP ScrollTrigger in an isolated component, full cleanup when it unmounts, a mobile variant via matchMedia, and respect the reduced-motion setting.
```

**You are finished when:** scrolling feels perfectly smooth (a steady 60 frames per second) on a mid-range phone — not just on your computer.

**Then:** close Fable 5 for the rest of the project. Back home to Sonnet. Go to Step 6.

---

## Step 6 — Phone and speed check

**In one sentence:** make the site fast and smooth on ordinary phones, and prove it with a score.

**Why this step exists:** most visitors are on phones, and a premium-looking site that stutters reads as cheap. Speed is measurable, so this step has a number to hit.

**Who does it:** Sonnet 5 (blue), normal. Climb to Opus 4.8 (purple, high) only if one specific speed problem survives two Sonnet attempts. Where: Claude Code, on a branch. **Mode: AUTO-accept edits.** Why: this is mechanical, well-defined work, and the gate here is a number — the Lighthouse score — not your yes-clicks.

**Do this:**
1. Paste the prompt below.
2. Test on one iPhone and one mid-range Android if you possibly can.
3. Pull request, CodeRabbit, merge.

**Copy-paste prompt (Sonnet 5):**
```
Do a performance pass on the whole site: reduce how many things animate at once on small screens, lazy-load anything heavy such as 3D, verify the reduced-motion setting genuinely calms the entire site, and use next/image for all images. Then run Lighthouse and report the mobile scores.
```

**You are finished when:** the Lighthouse mobile performance score is **90 or higher**.

**Then:** switch companies for fresh eyes. Go to Step 7.

---

## Step 7 — Fresh-eyes review

**In one sentence:** Codex — a model that has never seen this code — inspects everything and reports what the builders missed.

**Why this step exists:** a model reviewing its own work excuses its own mistakes, exactly like a person proofreading their own essay. A different company's model has no loyalty to the code.

**Who does it:** Codex running GPT-5.6 Sol (pink), at the highest effort setting your ChatGPT Plus plan offers. Where: Codex, pointed at your GitHub repository. Then Gemini in Antigravity (amber) for one final sweep. **Mode: READ-ONLY for the review itself, then edits-on-a-branch only for its mechanical-fix list. Never Codex's full-auto option.** Why: an inspector must not touch anything while inspecting — hands-off is exactly what makes the eyes fresh — and the fixes it *is* allowed to make stay small, on a branch, behind the same pull-request gate as everything else.

**Do this:**
1. Paste the prompt below into Codex.
2. Its small mechanical fixes → it opens a branch and pull request → CodeRabbit → you merge.
3. Anything *structural* it flagged (how the code is organised) → take to Opus 4.8 in Claude Code. Claude owns the architecture; the inspector does not remodel the house.
4. Then in Antigravity: ask a Gemini agent to sweep the entire project in one pass (it can hold all of it at once) for cross-browser problems and leftover junk — **report only, no fixing.** Route its findings to Sonnet or K3 depending on whose lane it is.

**Copy-paste prompt (Codex):**
```
Cold-review this repository you have never seen. Hunt specifically for: animation cleanup leaks (GSAP / Three.js), hydration errors, accessibility failures, dead code, performance problems. Rank findings by severity. Fix ONLY small mechanical issues on a branch. For anything structural, describe it but do not restructure.
```

**You are finished when:** Codex's severity list is empty of high items, and the Gemini sweep report has been handled.

**Then:** go to Step 8.

---

## Step 8 — Test everything

**In one sentence:** robots and you together prove every page works, everyone can use it, and search engines can find it.

**Why this step exists:** "it worked when I looked" is not proof. Tests are proof that survives every future change.

**Who does it:** Sonnet 5 (blue, normal) in Claude Code, plus Antigravity (amber), plus you (grey) for one keyboard pass. **Mode: AUTO-accept edits on the branch — but still read and approve the commands that run the tests.** Why: the tests themselves are the gate in this step, so watching every edit adds nothing; a command, though, is an action on your computer, so commands always get a conscious yes.

**Do this:**
1. Sonnet: *"Write Playwright tests: every page loads, navigation works, forms submit, no console errors. Run them and fix any failures."*
2. Sonnet: *"Run an accessibility check with axe and fix critical issues: alt text, focus states, colour contrast."* Then, yourself: put the mouse away and go through the whole site using only Tab and Enter. Can you reach and use everything?
3. Sonnet: *"Add SEO basics: title and description for every page, an OpenGraph share image, a sitemap, and a robots file."* Make the share image in Midjourney so it matches your brand.
4. Antigravity: have its agent click through every page at phone and desktop sizes and save the recording — your proof that everything works.

**You are finished when:** tests pass, the keyboard pass works, and the Antigravity recording exists.

**Then:** go to Step 9.

---

## Step 9 — Ship it

**In one sentence:** merge the final pull request and the site goes live automatically.

**Who does it:** You (grey). No model needed.

**Do this:**
1. Merge into `main` on GitHub. Vercel puts it live on its own — that's what you connected in Step 0.
2. In Vercel, turn on Analytics and Speed Insights so you can see real visitors and real-world speed.
3. Stuck on any setting → ChatGPT tutor prompt from Step 0.

**You are finished when:** the live URL loads on your phone and Analytics shows your own visit.

**Then:** go to Step 10 — and stay there forever.

---

## Step 10 — Keep it alive (forever)

**In one sentence:** every future change, no matter how small, uses Sonnet 5 and the same loop: branch → change → pull request → CodeRabbit → your check on a real phone → merge.

**Why this step exists:** sites die by accumulating careless changes. The loop makes carelessness impossible.

**Who does it:** Sonnet 5 (blue, normal) for everything. Climb the ladder only by Rule 3. **Fable 5 does not exist in maintenance — ever.** **Mode by default: ASK-each-time** for anything touching the live site — small changes deserve small attention. Drop to AUTO-accept only for repetitive chores you have already watched succeed before.

**One extra rule:** if a change would break something written in MOTION.md or ARCHITECTURE.md, the change goes to Opus 4.8 first, and Opus updates the rulebook file in the same pull request — so the written rules never drift from the real code.

---

# PART D — Quick reference

## D.1 The one-glance table

| Situation | Use | Setting | Mode | Where |
|---|---|---|---|---|
| Any new coding task | Sonnet 5 (blue) | Normal | ASK-each-time | Claude Code in Cursor |
| Sonnet failed the same task twice | Opus 4.8 (purple) | Normal, then High | ASK-each-time | Claude Code |
| Big careful job: skeleton, many files at once, stubborn bug | Opus 4.8 (purple) | High | PLAN first, then AUTO | Claude Code |
| Sonnet and Opus each failed twice | Fable 5 (coral) | Leave its dial alone | PLAN first, then ASK | Claude Code, short visit |
| The project plan — once per project | Fable 5 (coral) | Leave its dial alone | PLAN | Claude app / Claude Code |
| The wow animations — once per project | Fable 5 (coral) | Leave its dial alone | PLAN, then ASK | Claude Code |
| Building a section from a reference image | Kimi K3 (teal) | Normal | Agent with diff review | Cursor chat panel |
| A section's forms or logic | Sonnet 5 (blue) | Normal | ASK-each-time | Claude Code |
| End-of-project cold review | Codex / GPT-5.6 Sol (pink) | Highest available | READ-ONLY, then edits on a branch | Codex |
| Whole-project sweep, browser screenshots | Gemini (amber) | — | READ-ONLY (report-only) | Antigravity |
| "Explain this to me like I'm new" | ChatGPT or Sonnet | Normal | Just chat | Chat |

## D.2 Dictionary

- **Repository (repo)** — the online home of one project's code, on GitHub.
- **Branch** — a separate save file of the project where you experiment safely. `main` is the real version.
- **Commit** — a save point. Made constantly.
- **Push** — send your saves up to GitHub.
- **Pull request (PR)** — a proposal to add your branch's changes into `main`. Shows every changed line. CodeRabbit comments on it; you press merge.
- **Merge** — accept a pull request. The change becomes real.
- **Revert** — load an earlier save point, throwing away a bad change.
- **Terminal** — the text window where you type commands. About ten commands cover everything.
- **Claude Code** — Claude living in the terminal; reads your project, edits files, runs commands. `/model` switches between Sonnet, Opus, Fable.
- **API key** — a password string that lets a tool bill your account. Goes in Cursor's settings and nowhere else, ever.
- **Dev server / localhost** — your site running privately on your own computer while you build.
- **Effort / thinking / reasoning** — how long a model thinks before answering. See Part B.3.
- **Mode** — how much freedom a model has while it works: PLAN (look and think only, can't touch files), ASK-each-time (proposes every change and waits for your yes), AUTO-accept (applies file edits itself, still asks before bigger actions like commands). Full guide with the whys: Part B.4.
- **Diff** — a before/after view of a proposed change, shown line by line. Cursor shows K3's work as diffs for you to accept or reject.
- **Full auto / "skip permissions"** — the banned mode where a tool asks nothing at all, commands included. Never used, at any stage.
- **Lighthouse** — a free scoring robot for site speed. You want 90+ on mobile.
- **Playwright** — a robot that clicks through your site checking things work.
- **axe** — a robot that checks accessibility.
- **Hydration error** — a common Next.js bug where the page the server sent and the page the browser built disagree; Codex hunts these in Step 7.
- **GSAP / Motion / React Three Fiber** — the animation and 3D toolkits. The rule that matters: never both GSAP and Motion in the same component (it causes conflicts) — MOTION.md enforces it.

# PART E — Problems and costs

## E.1 When things go wrong

- **"It looks AI-generated."** You rushed Step 2. Go back, collect better references, tighten DESIGN.md. No model can fix taste that was never written down.
- **"Scrolling stutters on my phone."** Too many things animating at once. Sonnet: cut animated elements on mobile and check nothing re-renders during scroll.
- **"The model made it worse and now things are broken."** Stop. Revert to the last save. Give a smaller task with clearer instructions. Two strikes → climb. Never ask a model to fix its own mess on top of the mess.
- **"Two models disagree about how code should be organised."** Claude (Opus) is the architect and ARCHITECTURE.md is law. The other model's branch gets redone to match. No exceptions, no negotiation.
- **"My Fable usage is gone again."** You opened Fable outside Steps 1 and 5. That is the old habit. Rule 2 exists precisely because of it.
- **"CodeRabbit said something I don't understand."** Paste it to Sonnet: *"Explain this like I'm new, and tell me if it matters."* Most comments are minor; the ones that matter, Sonnet fixes on the same branch.
- **"I don't know which model this task needs."** It needs Sonnet. That is always the answer to this question (Rule 1). The ladder exists for what happens after.

## E.2 Costs (USD, checked July 22, 2026)

Already paying: Claude Max 20x ($200/mo) · ChatGPT Plus ($20/mo) · Kimi K3 usage (~$5–20 per site) · Antigravity (free).
Added: Cursor Pro ($20) + Midjourney ($10–30) + CodeRabbit (~$12–30) + Vercel Pro ($20) ≈ **$62–90/mo extra**.
Do not buy: ChatGPT Pro, Lovable, Bolt, v0, Windsurf, paid Gemini — every one overlaps with something you already own.

## E.3 Project Zero — your first real act

Hand this ENTIRE file to Kimi K3 and say: **"Build the app described in Part A using the content in Parts B to E."** Do it inside the full loop: new repo called `playbook`, Step 0 for real, one branch, pull request, CodeRabbit, merge, Vercel preview. An evening's work, pocket-change cost — and at the end you own a live, interactive walkthrough of your own system, and you've practised every mechanic that everything else depends on. Build v1 only; v2 becomes your first Step 10 maintenance practice later.

**If Kimi K3 is unavailable:** use Fable 5 in Claude Code as the stand-in builder — it is the #2 frontend model on the same leaderboard K3 tops, it *won* the interactive category there (which is exactly what this app is), and Project Zero doesn't otherwise use Fable, so this legitimately spends one of its two permitted openings (Rule 2 intact). Say: *"You are standing in for Kimi K3. Build the app described in Part A using the content in Parts B to E."* One branch, one session, then close Fable. Budget alternative that leaves Fable untouched: Sonnet 5 first, Opus 4.8 on high if the result falls short. Whichever model builds it, attach one or two screenshots of app or dashboard designs whose look you like — references keep every builder from drifting generic, not just K3.
