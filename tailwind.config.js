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
        poppinsSemiBold: ["Poppins SemiBold", "sans-serif"],
      },
      keyframes: {
        'music-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3)' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8', boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)' }
        },
        'music-ripple': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.5)', opacity: '0' }
        }
      },
      animation: {
        'music-pulse': 'music-pulse 1s ease-in-out infinite',
        'music-ripple': 'music-ripple 1s ease-out infinite'
      }
    },
  },
  plugins: [],
};
