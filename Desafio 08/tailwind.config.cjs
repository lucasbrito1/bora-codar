/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#292738',
        card: '#363447',
        circle: '#4A4556',
      },
      backgroundImage: {
        violetGradient: 'linear-gradient(121.94deg, #CE9FFC 15.98%, #7367F0 82.85%)',
        blueGradient: 'linear-gradient(180deg, #90F7EC 0%, #32CCBC 100%)'
      },
      boxShadow: {
        'cardShadow': '3px 4px 26px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}