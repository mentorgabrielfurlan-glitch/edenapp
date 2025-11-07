/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f0',
          100: '#e1efe1',
          200: '#c3dfc3',
          300: '#a5cfa5',
          400: '#87bf87',
          500: '#69af69',
          600: '#4a8f4a',
          700: '#2d5016',
          800: '#1e3610',
          900: '#0f1b08',
        },
        sage: {
          50: '#f8faf8',
          100: '#f1f5f1',
          200: '#e3ebe3',
          300: '#d5e1d5',
          400: '#c7d7c7',
          500: '#b9cdb9',
          600: '#8fa98f',
          700: '#657f65',
          800: '#3b553b',
          900: '#1d2a1d',
        },
      },
    },
  },
}
