import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sotemi.github.io',
  base: '/ProfiJeraby/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});