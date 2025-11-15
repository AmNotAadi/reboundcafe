## Rebound Café Experience

High-end café microsite built with Next.js 16 App Router, Tailwind CSS, and custom UI primitives. Features a cinematic hero video, luxury typography, interactive gallery modal, Instagram mosaic, menu highlights, and dedicated About/Menu/Gallery/Contact routes.

## Tech Stack

- Next.js 16 (App Router, TypeScript, Server Components)
- Tailwind CSS 4 preview build
- Radix UI icons, Lucide for accent glyphs
- Custom design tokens + theme toggle with persistent modal

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 and iterate on any file under `src/app` or `src/components`. The dev server automatically reloads.

### Lint & Build

```bash
npm run lint
npm run build
```

## Deploying to Cloudflare Pages

This repo ships with a `wrangler.toml`, a lightweight `functions/_middleware.ts`, **and** `next-on-pages.config.mjs` (used by `@cloudflare/next-on-pages`) that all set `compatibility_flags = ["nodejs_compat"]`, which Cloudflare Pages requires to run modern Next.js/Node APIs. You have two options:

1. **Cloudflare Dashboard (recommended)**
	- Framework preset: **Next.js**
	- Enable *Advanced Mode* → Functions directory `.vercel/functions`
	- Build command: `npm run pages:build`
	- Output directory: `.vercel/output/static`
	- The build uses `next-on-pages` + `next-on-pages.config.mjs`, so the `nodejs_compat` flag is enforced automatically. Double-check under *Settings → Functions → Compatibility flags* that it shows up as active after first deploy.

2. **wrangler CLI / CI**
	- Install dependencies (`npm install`)
	- Run `npm run pages:build` (builds Next + generates `.vercel/output/**/*`)
	- Deploy with `npx wrangler pages deploy .vercel/output/static --functions .vercel/functions`

If you see `Node.JS Compatibility Error: no nodejs_compat compatibility flag set`, ensure the deployment is using `npm run pages:build`, the generated `.vercel/functions` directory is configured in Pages, and the project contains the latest `next-on-pages.config.mjs` file.

> **Windows note:** The `@cloudflare/next-on-pages` CLI shells out to the Vercel CLI, which currently requires a Unix shell. Run `npm run pages:build` from WSL or a Linux/macOS CI runner when testing locally; Cloudflare's build environment already satisfies this requirement.

## Optional Enhancements

- Wire `@cloudflare/next-on-pages` for zero-config edge rendering.
- Connect Instagram API once tokens are available.
- Add CMS integration (Contentful/Sanity) by replacing the static data in `src/lib/content.ts`.
