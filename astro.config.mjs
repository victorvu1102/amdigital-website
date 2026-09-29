import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://am-digital-agency.vuhuuhao.chatgpt.site';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/contact/thanks/') })],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  security: { checkOrigin: true },
});
