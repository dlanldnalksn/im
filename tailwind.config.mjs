/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        imc: {
          primary: '#0a3d62',
          'primary-light': '#1e4d6e',
          'primary-muted': '#2a5a7a',
          accent: '#7fb8d9',
          ink: '#1a1a1a',
          muted: '#666666',
          border: '#e5e7eb',
          cream: '#fafaf7',
          notice: '#fff8e7',
          'notice-border': '#e8d9a3',
          danger: '#8b2a2a',
          link: '#0a3d62',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"Nanum Gothic Coding"', 'Courier New', 'monospace'],
        serif: ['"Nanum Myeongjo"', '"Noto Serif KR"', 'serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      boxShadow: {
        site: '0 0 30px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
