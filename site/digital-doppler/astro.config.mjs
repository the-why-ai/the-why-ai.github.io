// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-why-ai.github.io',
  integrations: [sitemap()],
  base: '/site/digital-doppler'
});
