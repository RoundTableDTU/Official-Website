/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'orange': 'rgba(255, 153, 0, 1)',
          'yellow': 'rgba(211, 168, 66, 1)',
          'black': '#0a0702',
        },
        muted: {
          'orange': 'rgba(255, 153, 0, 0.3)',
          'yellow': 'rgba(211, 168, 66, 0.2)'
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'primary-orange-outer': '10px 10px 50px 3px rgba(255, 153, 0, 0.3)',
        'primary-orange-inner': 'inset 10px 10px 50px 3px rgba(255, 153, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

// primaryOrange: '5px 10px 3px 3px rgba(255, 153, 0, 0.5)',