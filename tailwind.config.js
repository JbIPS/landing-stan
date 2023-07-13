/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.vitepress/theme/*.{vue,ts}"],
  theme: {
    colors: {
      white: "#fff",
      dark: "#003caa",
      red: "#ff6668",
      blue: {
        light: "#19dee0",
        DEFAULT: "#062dd0",
        dark: "#000061",
      },
      grey: "#000029",
    },
    opacity: {
      15: ".15",
    },
    fontFamily: {
      sans: ["Urbanist", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
