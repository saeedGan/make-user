module.exports = {
  purge: [
    {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        './src/**/*.{html,ts,css}',
      ]

    }
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
