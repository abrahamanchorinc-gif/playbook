## How to work in this repo

Before starting any coding task, commit the current state first (message:
"checkpoint before [task]"). This is my undo point — never skip it.

When a task is finished and I've confirmed it looks right, commit with a clear
message and push. Don't wait for me to ask.

If a change goes wrong, offer to revert to the last checkpoint rather than
patching on top of broken code.

Never force-push, never rewrite history, never delete branches without asking.

## Project rules

Before any task, read /docs/SPEC.md, /docs/DESIGN.md, /docs/ARCHITECTURE.md and
/docs/MOTION.md. Never violate them. Never mix GSAP and Motion in the same
component.
