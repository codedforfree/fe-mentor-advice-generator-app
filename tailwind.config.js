module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    extend: {
      colors: {
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        sans: ['Manrope']
      },
      fontSize: {
        'fm-quote': ['24px', '32.78px'],
        'fm-quote-lg': ['28px', '38.25px'],
      }
    },
  },
  plugins: [],
}
