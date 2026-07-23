# The Walkthrough v2 — Operations

## Environments

- Local: the repository’s static development server.
- Preview: Cloudflare Pages branch deployment.
- Production: Cloudflare Pages `main` deployment.
- Legacy: the existing Vercel production deployment remains live until the
  Cloudflare production verification is complete.

## Checks

Before a task commit:

- HTML validation
- canonical content fidelity
- link check
- Playwright smoke tests
- phone and desktop visual check where relevant
- no unexpected console errors

## Deployment

Cloudflare Pages should run `npm run build` and publish `dist/`. The build
copies only `index.html`, `_headers`, the illustrative assets, and the canonical
playbook source. Supporting tests and internal documentation are not deployed.

Repository settings:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Preview deployments: enabled for feature branches and pull requests

Production deployment is not considered complete until:

- the production URL loads in a real browser
- setup and resume work after reload
- the current task, map, reference, settings, and example panels work
- phone and desktop layouts are usable
- reduced motion is verified
- there are no console errors

## Rollback

1. Identify the last known-good Cloudflare deployment.
2. Promote or restore that deployment through Cloudflare Pages.
3. Verify the production URL in a logged-out browser.
4. Preserve the failed deployment and logs for diagnosis.
5. Keep the Vercel v1 deployment available until the v2 production acceptance
   is complete.

## Vercel retirement

Retirement is a separate, explicitly confirmed action after Cloudflare v2 has
passed production acceptance. Never delete the Vercel project or change DNS as
part of an unreviewed build command.
