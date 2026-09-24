import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://am-digital-agency.purple-creek-1326.chatgpt.site',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  security: { checkOrigin: true },
});
