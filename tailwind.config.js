module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors : {
          'lulo-green': '#bcfd49',
          'lulo-pink': '#f24a8b',
        },
        cursor : {
          'arrowdown' : 'url(/green_down.svg), pointer',
        }
    },
  },
  plugins: [],
}