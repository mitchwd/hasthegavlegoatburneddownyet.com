import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    port: process.env.PORT,
  },
  vercel: {
    // optional configuration options, see "Advanced usage" below for details
  },
})
