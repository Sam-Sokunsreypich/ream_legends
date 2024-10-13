/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dafont: ['Dafont', 'serif'], // Custom font with fallback
      },
    },
  },
  plugins: [],
}

