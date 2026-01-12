/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        'vici-red': '#C00218',
        'vici-black': '#1C1C1C',
        'vici-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}



