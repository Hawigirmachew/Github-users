module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["forest","luxury", "dark", "cupcake"],
  },
  plugins: [require('daisyui')],
};
