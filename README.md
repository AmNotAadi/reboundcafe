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

This repo ships with a `wrangler.toml` that sets `compatibility_flags = ["nodejs_compat"]`, which Cloudflare Pages requires to run modern Next.js/Node APIs. You have two options:

1. **Cloudflare Dashboard**
	- Framework preset: **Next.js**
	- Build command: `npm run build`
	- Output directory: `.vercel/output/static` (handled automatically by preset)
	- Under *Settings → Functions → Compatibility flags*, ensure `nodejs_compat` is enabled (the `wrangler.toml` does this if detected).

2. **wrangler CLI / CI**
	- Install dependencies (`npm install`)
	- Run `npx wrangler pages deploy .vercel/output/static` after `npm run build`, or adopt `npx @cloudflare/next-on-pages@latest build` for edge-native output.

If you see `Node.JS Compatibility Error: no nodejs_compat compatibility flag set`, confirm the deploy picked up the `wrangler.toml` or manually add the flag in the Pages dashboard.

## Optional Enhancements

- Wire `@cloudflare/next-on-pages` for zero-config edge rendering.
- Connect Instagram API once tokens are available.
- Add CMS integration (Contentful/Sanity) by replacing the static data in `src/lib/content.ts`.
