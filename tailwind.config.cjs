/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Onest", "sans-serif"],
        mono: ["Cascadia Code", "Consolas", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
