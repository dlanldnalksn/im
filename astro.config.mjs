import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE_PATH || '/';
const site =
  process.env.SITE_URL ||
  (base === '/' ? 'https://example.github.io' : `https://example.github.io${base.replace(/\/$/, '')}`);

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
