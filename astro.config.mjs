// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://yingray.github.io",
  base: "/music-creator",
  vite: {
    plugins: [tailwindcss()]
  }
});
