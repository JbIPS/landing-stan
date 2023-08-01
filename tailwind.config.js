/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.vitepress/theme/*.{vue,ts}"],
  theme: {
    colors: {
      white: "rgb(var(--white) / <alpha-value>)",
      dark: "rgb(var(--dark) / <alpha-value>)",
      red: "rgb(var(--red) / <alpha-value>)",
      blue: {
        light: "rgb(var(--blue-light) / <alpha-value>)",
        DEFAULT: "rgb(var(--blue) / <alpha-value>)",
        dark: "rgb(var(--blue-dark) / <alpha-value>)",
      },
      grey: "rgb(var(--grey) / 0.29)",
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
