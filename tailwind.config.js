/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        englishFont: ['Inter', 'Koh Santepheap', 'sans-serif', 'serif'], // Custom font family
        dragon: ['Dragon Hunter', 'sans-serif'], // Adding the Dragon Hunter font
      },
    },
  },
  plugins: [],
}

