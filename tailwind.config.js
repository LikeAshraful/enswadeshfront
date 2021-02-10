module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#0072D6',
          2: '#385C8E',
        },
        orange: {
          1: '#FF5100',
        },
        green: {
          1: '#EBF5EE',
          2: '#DFFFE3',
          3: '#BAFFD8',
          4: '#163A24',
          5: '#0D2316',
        },
        gray: {
          1: '#DFFCFF',
          2: '#85988C',
          3: '#DCE2DE',
          4: '#ABB5A9',
        },
        purple: {
          1: '#EAEEF8',
          2: '#998DD9',
        },
        yellow: {
          1: '#FFE9D9',
          2: '#FF9900',
        },
        pink: {
          1: '#FFE6ED',
        }
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '5/6': '83.333333%',
        '1/10': '10%',
        'full': '100%',
        'screen': '100vh',
      }
    },
  },
  variants: {},
  plugins: [],
}
