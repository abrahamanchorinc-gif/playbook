# The Walkthrough v2 — Design Direction

## Intent

The product should feel like a calm premium field guide: tactile, deliberate,
and encouraging. It should retain v1’s recognizable dark foundation and model
colours while moving beyond “text in coloured boxes.”

Three words: **cinematic · legible · progressive**.

## Reference interpretation

- `docs/refs/ref-1.png`: clear task hierarchy, generous spacing, restrained
  completion states, and readable progress.
- `docs/refs/ref-2.png`: a journey that invites exploration, strong spatial
  progression, and an unmistakable current position.

These are continuity references, not layouts to copy.

## Product colour system

- Ink: `#091217`
- Deep navy: `#0F1D25`
- Raised navy: `#172832`
- Paper: `#F4F1E8`
- Mist: `#A6B8C1`
- Progress lime: `#C7F36B`
- Focus gold: `#FFD166`
- Danger coral: `#FF7468`

The existing model palette remains semantic:

- Sonnet blue
- Opus purple
- Fable coral
- Kimi teal
- Codex/Sol pink
- Gemini/Antigravity amber
- Human grey

Model colours identify responsibility. They do not become background colours
for whole screens.

## Typography

- Display: a bold geometric/grotesque treatment with compact tracking.
- Body: a highly legible humanist sans-serif.
- Mono: prompts, paths, and artifact labels only.
- Bold is reserved for hierarchy, actions, and critical distinctions.

The implementation may use the system font stack if external font files would
add fragility. Hierarchy, scale, measure, and spacing matter more than a
particular typeface.

## Layout

Desktop uses three zones:

1. Stable navigation and project identity.
2. The current task or map.
3. The illustrative example and context tools.

Phone uses:

- A compact sticky top status.
- One-column task flow.
- The illustrative example immediately after the current task.
- A persistent bottom navigation.

The current task must dominate. Reference material and settings must never
compete with it.

## Components

- Journey nodes: dimensional but restrained, with clear completed/current/future
  states.
- Canonical badge: compact icon, label, and accessible text.
- Task card: one task, generous measure, explicit action hierarchy.
- Preview sheet: warm summary, visual glimpse, and one “Show full detail”
  action.
- Example panel: persistent “Illustrative example · fictional project” label,
  filled prompt, artifact, and caption.
- Cards use borders, inset highlights, and tonal contrast rather than glass
  blur as the default style.

## FORMA-9 visual identity

FORMA-9 is a fictional premium peptide-research storefront.

- Palette: mineral black, pearl, electric cyan, ultraviolet, and controlled
  spectral highlights.
- Imagery: glass vials, molecular sculptures, chrome, refraction, dark studio
  lighting, and clinical precision without sterile stock-photo clichés.
- Composition: large negative space, close material detail, dramatic scale,
  and editorial product framing.
- Interface: strong grid, large type, technical micro-labels, cinematic product
  reveals, and calm commerce patterns.
- Products use fictional identifiers and make no health claims.

Every FORMA-9 image must share the same materials, palette, lighting, subject
language, and wordmark treatment. Exact UI text is rendered in HTML/CSS, not
inside generated images.

## Banned patterns

- Generic purple-glow SaaS dashboards.
- Decorative glass cards without hierarchy.
- Unrelated one-off generated images.
- Dense text over noisy artwork.
- Motion that delays reading or blocks input.
- Tiny uppercase body copy.
- Medical promises, dosage information, or real-product endorsements.
- Presenting FORMA-9 as a real client or live business.
