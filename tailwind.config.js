/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Londrina Solid", "sans-serif"],
      },
    },
  },
  plugins: [],
};
