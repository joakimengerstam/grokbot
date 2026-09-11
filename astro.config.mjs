// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

/** Same dates the pages declare as dateModified in their TechArticle schema.
 *  Kept here rather than derived from the build clock, so a rebuild with no
 *  content change does not claim the content changed. */
const LASTMOD = '2026-09-10';

/** Pre-i18n Swedish URLs, kept alive as permanent-move stubs. */
const MOVED = ['/installning/', '/exempel/', '/om/', '/nyheter/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://grokbot.se',
  output: 'static',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      // the four /installning/ /exempel/ /om/ /nyheter/ stubs are permanent-move
      // pages, not content. they must not be advertised as canonical URLs.
      filter: (page) => !MOVED.some((p) => page === `https://grokbot.se${p}`),
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
