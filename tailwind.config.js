/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alliance: ["Alliance", "sans-serif"],
      },
      animation: {
        ticker: "ticker 30s infinite linear",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
<<<<<<< HEAD
  plugins: [require("@tailwindcss/forms")],
=======
  plugins: [require("@tailwindcss/forms"), ],
>>>>>>> 1c53cbac53ddf89f00d5fe971e5fb7275ad748f7
};
