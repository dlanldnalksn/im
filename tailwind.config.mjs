/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        imc: {
          primary: '#4a3a7a',
          'primary-light': '#5a4a8a',
          navy: '#1a2b4c',
          blue: '#0052a4',
          accent: '#7fb8d9',
          ink: '#1a1a1a',
          muted: '#525252',
          border: '#e5e7eb',
          cream: '#f9f6fc',
          notice: '#fff8e7',
          'notice-border': '#e8d9a3',
          danger: '#8b2a2a',
          link: '#0052a4',
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
