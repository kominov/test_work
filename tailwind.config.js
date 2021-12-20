module.exports = {
  mode: "jit",
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './components/**/*.{vue,js}',
    './nuxt.config.{js,ts}',
    './cms/**/*.vue',

  ],
  
  theme: {
    
    fontFamily: {
      'sans': ['FiraSans']
    },
    extend: {
      colors: {
        primary: '#34529d',
        secondary: '#ffd453',
      },
      screens: {
        '2xs': '319px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1000px',
        'xl': '1310px',
        '2xl': '1140px',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      transform: ['hover'],
      scale: ['hover'],
      borderRadius: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      fill: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
    },
  },
}
