/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#32213A',
        'space-cadet': '#383B53',
        'paynes-gray': '#66717E',
        'pearl': '#D4D6B9',
        'sage': '#D1CAA1',
      },
    },
  },
  plugins: [],
}