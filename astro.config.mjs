import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages 프로젝트 사이트: BASE_PATH=/저장소이름 (Actions에서 설정)
// 사용자 사이트(username.github.io): BASE_PATH=/ 또는 미설정
const base = process.env.BASE_PATH || '/';
const site =
  process.env.SITE_URL ||
  (base === '/' ? 'https://example.github.io' : `https://example.github.io${base.replace(/\/$/, '')}`);

export default defineConfig({
  site,
  base,
  integrations: [tailwind()],
});
