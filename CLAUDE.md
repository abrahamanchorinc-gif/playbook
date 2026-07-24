## Golden rule — model, effort, and mode come first

Before acting on ANY prompt, no matter how small, your first output is a
three-part verdict: **MODEL / EFFORT / MODE**, each one named exactly, plus a
one-line why. Never leave any of the three vague ("high-ish", "probably ask
mode") — pick the specific value every time.

**MODEL — route by difficulty:**
- **Sonnet 5** — the default. Text and content edits, small fixes, git
  chores, docs updates, explanations, anything routine.
- **Opus 4.8** — big careful jobs: changes touching many files at once,
  architecture decisions, a bug that survived two Sonnet attempts.
- **Fable 5** — only the genuinely hardest work: building a whole app or
  signature animation from scratch, or an emergency where Sonnet AND Opus
  have each failed twice on the same problem.

**EFFORT — how long the model should think:**
- **Low** — trivial, mechanical, obviously correct (typo fix, one-line
  config change, renaming a variable).
- **Medium (normal)** — everyday tasks with a clear answer; this is the
  default for most Sonnet work.
- **High** — foundational or multi-file work, a stubborn bug, anything
  where a wrong first move is expensive (matches the playbook's "high"
  effort for Opus).
- **Max / ultracode** — reserved for the same rare tier as Fable 5 itself:
  ground-up builds, or genuine emergencies after two Sonnet + two Opus
  failures. Never use max effort to compensate for a vague prompt — fix the
  prompt instead.

**MODE — how much freedom the model gets while it works:**
- **PLAN** — look and think only, cannot touch files or run anything.
  Use whenever the decision is expensive and nothing has been agreed yet.
- **ASK-each-time** — proposes every file change and command, waits for a
  yes. The default while learning or on delicate code.
- **AUTO-accept** — applies file edits itself, still asks before commands.
  Use only for mechanical, well-defined work on a branch you're watching.
- **Bypass permissions / full-auto is BANNED.** Never recommend it, at any
  effort or stakes level — no exceptions.

If the current model/effort/mode already match, say so in one line and
proceed. If any of the three is wrong, name the correct MODEL / EFFORT /
MODE and STOP COMPLETELY — do not start the work, and do not answer the
substance of the prompt either, even if the answer is quick or already
known. The verdict is the entire response. (This closes a real gap: I used
to flag the mismatch and then answer anyway, which defeats the point.)

**If I don't switch:** on my very next message in that same thread, before
doing anything else, ask why and encourage the switch again — restate which
MODEL / EFFORT / MODE is correct and why it matters for this task. Only
proceed — on the unmatched setting, and only then answering the actual
prompt — if I explicitly say something like "no, don't switch, just use
this" for that turn. That override is one-time — it applies to that single
task only. The moment that turn is done, go straight back to giving the
full verdict and stopping again if unmatched, no matter how many turns
it's been since the last switch discussion. Never silently drop back into
skipping the check, and never treat a past override as standing permission.

Never silently do easy work on an expensive model, at high effort, or in a
looser mode than the task needs.

**Copyable prompts always go in a code block.** Any time you write a prompt
meant to be copied and reused — for another AI tool, or saved for later —
put it inside a fenced code block (triple backticks), never as plain
paragraph text. The code block is what renders with a copy button; nothing
else does.

## How to work in this repo

**This repo is on the practice track (WEB_PROJECT_PLAYBOOK.md Section 9).** The
habits below are the personal auto-checkpoint habit for practice repos
specifically — they exist because I asked to stop thinking about Git while
learning. They are not universal engineering rules.

Before starting any coding task, commit the current state first (message:
"checkpoint before [task]"). This is my undo point — never skip it.

When a task is finished and I've confirmed it looks right, commit with a clear
message and push. Don't wait for me to ask.

If a change goes wrong, offer to revert to the last checkpoint rather than
patching on top of broken code.

Never force-push, never rewrite history, never delete branches without asking.

**Client repos use the client production track instead (WEB_PROJECT_PLAYBOOK.md
Sections 9 and 12):** protected `main`, pull requests, required CI checks,
human approval before merge, no silent auto-checkpoint-and-push. Do not apply
this repo's practice-track habits to a client repo — check that project's own
`/docs/PLAYBOOK.md` instead.

## Project rules

This repo's job is maintaining `WEB_PROJECT_PLAYBOOK.md` itself — the master
manual copied into every new website project. There is no separate
SPEC/DESIGN/ARCHITECTURE/MOTION set here; those get created per-project when
the playbook is used to build an actual site.
