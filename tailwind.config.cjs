/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Wremena", "Georgia", "serif"],
        sans: ["Gangster Grotesk", "sans-serif"],
        mono: ["Cascadia Code", "Consolas", "Menlo", "monospace"],
        straker: ["Straker", "serif"],
      },
      colors: {
        rainee: {
          50: "#faf5f2",
          100: "#f3e9e1",
          200: "#e6d1c2",
          300: "#d2aa90",
          400: "#c58d72",
          500: "#b97356",
          600: "#ab614b",
          700: "#8f4d3f",
          800: "#744038",
          900: "#5e3730",
          950: "#321b18",
        },
        rainee: {
          50: "#f6f8f5",
          100: "#ebefe9",
          200: "#d5e0d2",
          300: "#b7c8b2",
          400: "#8ba484",
          500: "#6a8562",
          600: "#546c4d",
          700: "#44563f",
          800: "#394635",
          900: "#303a2d",
          950: "#161e15",
        },
      },
    },
  },
  plugins: [],
};
