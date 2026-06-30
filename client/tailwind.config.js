/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dirtyBlack: '#bc986a',
        dirtyWhite: 'fbeec1',
        dirtyBrown: '#daad86',
        mainColor:'659dbd',
        secondaryColor:'8D8741',
      }
    },
  },
  plugins: [],
}