import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://am-digital-agency.vuhuuhao.chatgpt.site',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  security: { checkOrigin: true },
});
