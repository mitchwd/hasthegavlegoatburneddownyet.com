/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel(), tailwindcss()],
  server: {
    port: 4173,
  },
  test: {
    globals: true,
    css: true,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx'],
			reporter: ['html', 'text', 'json-summary', 'json'],
			reportOnFailure: true,
    },
    includeTaskLocation: true,
  },
  vercel: {},
  optimizeDeps: {
    exclude: [
      'chromium-bidi',
      'playwright'
    ]
  }
});
