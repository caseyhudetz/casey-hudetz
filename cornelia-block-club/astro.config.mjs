import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://caseyhudetz.github.io',
  base: '/cornelia-block-club',
  integrations: [tailwind()],
});
