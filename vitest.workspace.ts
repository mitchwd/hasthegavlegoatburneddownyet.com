import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    test: {
      name: 'component',
      include: [
        'src/*.{test,spec}.{ts,tsx}',
        'src/**/*.{test,spec}.{ts,tsx}',
      ],
      browser: {
        enabled: true,
        provider: 'playwright',
        // headless: true, // This is set in the package.json script instead
        instances: [
          { browser: 'chromium' },
          { browser: 'firefox' },
          { browser: 'webkit' },
        ],
      },
    },
  },
])
