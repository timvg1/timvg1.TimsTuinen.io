/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#cddccc',
          300: '#aac4a8',
          400: '#80a67d',
          500: '#5e875b',
          600: '#496b47',
          700: '#3b5539',
          800: '#304630',
          900: '#28392a'
        },
        mint: {
          50: '#f0faf5',
          100: '#dcf4e9',
          200: '#bbe8d4',
          300: '#8dd5b6',
          400: '#57bb92',
          500: '#33a074',
          600: '#238c60',
          700: '#1c7050',
          800: '#1a5b42',
          900: '#174b38'
        },
        cream: '#fafaf7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px'
      },
    }
  },
  plugins: [],
}
