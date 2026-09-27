/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B1F24',
        inksoft: '#5E6772',
        mist: '#F3F5F8',
        night: '#161316',
        yalla: {
          red: {
            DEFAULT: '#E10600',
            dark: '#B10500'
          },
          yellow: '#F5B301'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'sans-serif'],
        display: ['Montserrat', 'Manrope', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 40px rgba(22, 19, 22, 0.08)'
      }
    }
  },
  plugins: []
};
