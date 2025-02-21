/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      princepsBlue: '#0053A6',
      princepsLightBlue: '#F2F6FA',
      princepsBlack_1: '#44444B',
      princepsBlack_2: '#121212',
      princepsGrey_1: '#5E5F6E',
      princepsGrey_2: '#44444B',
      princepsWhite: '#FFFFFF',
      princepsBorderGrey_1: '#ECF0F3',
      princepsBorderGrey_2: '#EFEFEF',
    },
    fontFamily: {
      euclidCircular: ['EuclidCircular', 'serif'],
      switzer: ['Switzer', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

