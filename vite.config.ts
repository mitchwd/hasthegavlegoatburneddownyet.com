import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['chromium-bidi', 'playwright'],
  },
  plugins: [react(), tailwindcss()],
  server: {
    port: 4173,
  },
});
