import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.profijeraby.cz',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
