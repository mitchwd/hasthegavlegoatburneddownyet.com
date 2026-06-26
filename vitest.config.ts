import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

// https://vitest.dev/config
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      browser: {
        enabled: true,
        instances: [
          {
            browser: 'chromium',
            setupFiles: './src/setup-tests.ts',
          },
        ],
        provider: playwright(),
      },
      coverage: {
        exclude: ['src/main.tsx', 'coverage/**', 'dist/**'],
        include: ['src/**/*.{ts,tsx}'],
        provider: 'istanbul',
        reportOnFailure: true,
        reporter: ['html', 'text', 'json-summary', 'json', 'lcovonly'],
      },
      css: true,
      globals: true,
      includeTaskLocation: true,
      name: 'component',
    },
  }),
);
