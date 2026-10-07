import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Needed so Astro.site resolves absolute URLs (JSON-LD) instead of localhost.
  site: 'https://www.novatools.io',
  integrations: [mdx()],
  server: { port: 4330, host: true },
  compressHTML: true
});
