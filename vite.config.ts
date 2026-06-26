import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel(), tailwindcss()],
  server: {
    port: 4173,
  },
  //   test: {
  //   name: 'component',
  //   browser: {
  //     enabled: true,
  //     provider: playwright(),
  //     instances: [
  //       {
  //         browser: 'chromium',
  //         setupFiles: './src/setup-tests.ts',
  //       },
  //     ],
  //   },
  //   globals: true,
  //   css: true,
  //   coverage: {
  //     provider: 'istanbul',
  //     include: ['src/**/*.{ts,tsx}'],
  //     exclude: ['src/main.tsx', 'coverage/**', 'dist/**'],
  //     reporter: ['html', 'text', 'json-summary', 'json', 'lcovonly'],
  //     reportOnFailure: true,
  //   },
  //   // typecheck: {
  //   //   enabled: true,
  //   // },
  //   includeTaskLocation: true,
  // },
  optimizeDeps: {
    exclude: ['chromium-bidi', 'playwright'],
  },
});
