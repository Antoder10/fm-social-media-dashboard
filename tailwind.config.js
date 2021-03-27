module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['border-facebook', 'border-twitter', 'border-instagram', 'border-youtube']
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Dark-Theme
        'very-dark-blue': 'hsl(230,17%,14%)',
        'very-dark-blue-top': 'hsl(232,19%,15%)',
        'dark-desaturated-blue': 'hsl(228,28%,20%)',
        'desaturated-blue': 'hsl(228,41%,34%)',
        // Light-Theme
        'very-pale-blue': 'hsl(225,100%,98%)',
        'light-grayish-blue': 'hsl(232,6%,94%)',
        'dark-grayish-blue': 'hsl(237,16%,47%)',
        'very-dark-blue': 'hsl(230,17%,14%)',
        // Social Colors
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram': 'hsl(329, 70%, 58%)',
        'youtube': 'hsl(348, 97%, 39%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
