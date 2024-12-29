// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@layout': '/src/layout',  // Adjust the directory if needed
      },
    },
  },
});