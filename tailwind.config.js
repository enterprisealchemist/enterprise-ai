/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#001219',
        'avocado': '#669900',
        'yellow-green': '#99cc33',
        'mindaro': '#ccee66',
        'lapis-lazuli': '#006699',
        'celestial-blue': '#3399cc',
        'murrey': '#990066',
        'red-violet': '#cc3399',
        'pumpkin': '#ff6600',
        'orange-peel': '#ff9900',
        'jonquil': '#ffcc00',
        'white': {
          DEFAULT: '#ffffff',
          'off': '#f7f7f7',
          'cream': '#fdfbf6',
        },
        'gray': {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}