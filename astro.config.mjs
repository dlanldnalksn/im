import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE_PATH || '/';
const site =
  process.env.SITE_URL ||
  (base === '/' ? 'https://example.github.io' : `https://example.github.io${base.replace(/\/$/, '')}`);

export default defineConfig({
  site,
  base,
  // GitHub Pages: /im/intranet/ 처럼 끝 슬래시 통일 (imintranet 오류 방지)
  trailingSlash: 'always',
  build: {
    // CSS 파일 해시 변경 시 뒤로가기·캐시 페이지가 깨지는 문제 방지
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
    },
  },
});
