import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@layout': path.resolve(__dirname, 'src/layout')
    }
  }
});