# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal brand site for Imtiaz Chowdhury (cloud architect). Astro static site, deployed to GitHub Pages.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321 (drafts visible)
npm run build     # production build to dist/ (drafts excluded)
npm run preview   # serve dist/
npm run check     # astro type/content check
```

No test suite. Verify changes with `npm run build`; a content-schema mismatch fails the build.

## Architecture

- **Content lives in Markdown collections** defined in `src/content.config.ts`:
  - `src/content/work/*.md` = case studies. Frontmatter: `title, org, period, summary, metrics[{value,label}], stack[], order`. `order` controls listing order, and the first 3 appear on the home page.
  - `src/content/writing/*.md` = essays. Frontmatter: `title, date, summary, draft`. `draft: true` shows in dev only (filter in `src/lib.ts`), and those posts are excluded from the build and RSS.
  - The file name is the URL slug (`/work/<id>/`, `/writing/<id>/`).
- `src/site.ts` holds the name, contact details and nav. Every page reads them from there.
- `src/layouts/Base.astro` provides the `<head>` (SEO/OG tags, fonts), header and footer. Every page wraps in it.
- `src/styles/global.css` holds the design tokens as CSS variables on `:root`, with dark mode via `prefers-color-scheme`. Shared classes: `.list`, `.metrics`, `.section-head`, `.prose`, `.eyebrow`, `.lede`, `.tags`.
- Zero client-side JS. Keep it that way unless there's a real need.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` (withastro/action → deploy-pages). The workflow passes `SITE_URL` from `configure-pages` into `astro.config.mjs`, so canonical URLs, the sitemap and RSS pick up the real domain. A custom domain later needs `public/CNAME` plus a DNS change, with no config edit. The repo's Settings → Pages → Source must be "GitHub Actions".

## Content rules

- The source of truth for career facts is the Markdown resumes in `~/Documents/Documents/Imtiaz-mac-backup/Career/resume-2026-08/`. Don't invent claims or metrics.
- **Never publish** the phone number, street address or ZIP code. Contact is email + LinkedIn only.
- Keep Oracle work at architecture level: no internal incident counts, org sizes or other non-public detail.
- Never publish an essay in Imtiaz's voice without his approval. New posts start as `draft: true`.
