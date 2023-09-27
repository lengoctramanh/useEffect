import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path'; // Thêm dòng này để import 'resolve'

import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: false,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],

  // port default
  server: {
    port: 5178,
  },

  // Default
  base: '/',

  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('./src/', import.meta.url))),
    },
  },
});
