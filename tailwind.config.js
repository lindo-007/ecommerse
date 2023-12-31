/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "Roboto", "system-ui"],
      noto: ["Noto Serif Balinese", "Roboto", "system-ui"],
      agbalumo: ["Agbalumo", "Roboto", "system-ui"],
      roboto: ["Roboto", "Montserrat", "system-ui"],
    },
    extend: {
      width: {
        320: "80rem",
      },
    },
  },
  plugins: [],
};
