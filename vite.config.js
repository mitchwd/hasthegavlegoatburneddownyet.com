import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';
import { env } from 'node:process';
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel(), tailwindcss()],
  server: {
    port: env.PORT,
  },
  vercel: {
    // optional configuration options, see "Advanced usage" below for details
  },
})
