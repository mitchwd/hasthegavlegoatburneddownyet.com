import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

// https://vitest.dev/config
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: 'component',
      browser: {
        enabled: true,
        provider: playwright(),
        instances: [
          {
            browser: 'chromium',
            setupFiles: './src/setup-tests.ts',
          },
        ],
      },
      globals: true,
      css: true,
      coverage: {
        provider: 'istanbul',
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/main.tsx', 'coverage/**', 'dist/**'],
        reporter: ['html', 'text', 'json-summary', 'json', 'lcovonly'],
        reportOnFailure: true,
      },
      // typecheck: {
      //   enabled: true,
      // },
      includeTaskLocation: true,
    },
  }),
);
