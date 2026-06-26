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
  optimizeDeps: {
    exclude: ['chromium-bidi', 'playwright'],
  },
});
