// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL is set by the GitHub Pages deploy workflow; the fallback keeps local builds working.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.github.io',
  integrations: [sitemap()],
});
