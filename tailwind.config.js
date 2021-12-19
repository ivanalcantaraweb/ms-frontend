module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  mode: 'jit',
  purge: ['./index.js', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors:{
        primary: 'f2f2f2'
      },
      gridTemplateCols: {
        'GeneralLayout': '1fr 3.5fr'
      }
    },
  },
  plugins: [],
}
