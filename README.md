# The Walkthrough

An interactive, local-first field guide for following The Visual Playbook one
task at a time.

## Local development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4173`.

## Verification

```bash
npm test
npm run build
```

The checks verify the canonical source contract, local asset references, HTML,
desktop and phone behavior, accessibility, persistence, preview locking,
gates, notes, projects, model settings, frontier-session state, v1 migration,
keyboard dialogs, and reduced-motion layout.

## Cloudflare Pages

Use:

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Branch deployments remain previews. Do not retire the existing Vercel v1
deployment or change production DNS until the Cloudflare production URL has
passed the acceptance checklist in `docs/OPERATIONS.md`.

## Illustrative project

FORMA-9 is a fictional premium peptide-storefront concept used only as a
continuous teaching example. It is clearly labelled in the app as fictional
and AI-generated, and it contains no real products, checkout, dosage advice,
or medical claims.
