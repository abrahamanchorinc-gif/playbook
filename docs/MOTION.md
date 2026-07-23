# The Walkthrough v2 — Motion

## Language

Motion is calm, tactile, and purposeful. It should feel like moving along a
physical trail and opening a well-made field guide.

## Implementation

- Use CSS transitions and keyframes for the Walkthrough interface.
- Do not add GSAP, Motion, or a 3D runtime to the Walkthrough itself.
- FORMA-9 panels may depict a Three.js/GSAP example through stills,
  storyboards, and lightweight CSS presentation.

## Rules

- One owner per animated property.
- Prefer transform and opacity for frequent animation.
- Never animate in a way that delays access to content or controls.
- Dialogs and drawers remain usable if animation is interrupted.
- Repeated renders must not duplicate listeners or timers.
- Timers are data features, not animation loops.
- Completion effects must be small, non-blocking, and announced in text.
- Phone layouts receive simpler movement and fewer simultaneous effects.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Disable bobbing, orbiting, drawing, parallax, and celebratory movement.
- Replace animated transitions with immediate state changes.
- Preserve colour, text, and status cues.
- FORMA-9 example panels show still keyframes.

## Performance

- No continuously running decorative animation off screen.
- Pause or omit animation when the page is hidden.
- Generated imagery is optimized before integration.
- Avoid layout animation and large filter animation on phone.
