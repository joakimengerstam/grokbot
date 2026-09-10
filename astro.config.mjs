// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

/** Same dates the pages declare as dateModified in their TechArticle schema.
 *  Kept here rather than derived from the build clock, so a rebuild with no
 *  content change does not claim the content changed. */
const LASTMOD = '2026-09-10';

// https://astro.build/config
export default defineConfig({
  site: 'https://grokbot.se',
  output: 'static',
  trailingSlash: 'always',

  /** The i18n move (commit 77f9efe) put the Swedish pages under /sv/ and left
   *  their old root URLs dead. Those four are exactly what Google has indexed,
   *  so they 404 in live search results. GitHub Pages cannot serve a 301, so
   *  these become meta-refresh pages with a canonical, which Google reads as a
   *  permanent redirect. Keep them: old URLs stay linked from the outside. */
  redirects: {
    '/installning/': '/sv/installning/',
    '/exempel/': '/sv/exempel/',
    '/om/': '/sv/om/',
    '/nyheter/': '/sv/nyheter/',
  },
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = LASTMOD;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
