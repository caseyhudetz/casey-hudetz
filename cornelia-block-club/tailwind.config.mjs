/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E5A4C',
          light: '#4A8B75',
        },
        accent: {
          DEFAULT: '#E07A3D',
          light: '#F4A574',
        },
        bg: {
          DEFAULT: '#FAF8F5',
          alt: '#F0EDE8',
        },
        text: {
          DEFAULT: '#2C2C2C',
          muted: '#6B6B6B',
        },
        chicago: {
          blue: '#41B6E6',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Source Sans 3', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
