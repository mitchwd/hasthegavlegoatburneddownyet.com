/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { env } from 'process';
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel(), tailwindcss()],
  server: {
    //@ts-expect-error Port should always be a string
    port: env.PORT,
  },
  test: {
    globals: true,
    css: true,
    coverage: {
      enabled: true,
      provider: 'istanbul',
			all: true,
      include: ['src/**'],
      exclude: ['src/App.spec.tsx'],
			reporter: ['html', 'text', 'json-summary', 'json'],
			reportOnFailure: true,
    },
    includeTaskLocation: true
  },
  vercel: {},
});
