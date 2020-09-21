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
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
