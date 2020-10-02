const { colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    borderWidth: ['responsive', 'last'],
    padding: ['responsive', 'last', 'even'],
    width: ['responsive', 'last', 'even', 'odd'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textAlign: ['responsive', 'even'],
  },
  plugins: [],
}
