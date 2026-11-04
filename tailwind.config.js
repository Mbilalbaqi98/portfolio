/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'edu-bg': '#F8F9FC',      // Warm off-white
        'edu-navy': '#14213D',    // Deep navy
        'edu-blue': '#3563E9',    // Electric blue
        'edu-cyan': '#A2D2FF',    // Soft cyan
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
