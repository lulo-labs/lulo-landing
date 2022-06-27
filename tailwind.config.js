module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'solana': "url('/solanaShape1.png')",
        'cross': "url('')",
      }
    },
  },
  plugins: [],
}