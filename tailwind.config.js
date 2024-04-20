/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'avenir': ['Avenir Next', 'sans-serif'],
      },
    },
    screens: {
      'sm': { 'min': '320px' },
      'md': { 'min': '767px' },
      'lg': { 'min': '1024px' },
    }
  },

  plugins: [],
}

