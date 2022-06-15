/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#16181d",
        "dark-blue": "#1a1d23",
        green: "#33cb9a",
        "green-10": "#33cb9b2e",
      },
      backgroundImage: {
        "radial-green": `radial-gradient(
               55vw 55vw at 0 0,
               #2b94718c 0,
               #2b947100 100%
              )`,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
