/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "425px" },
      // => @media (max-width: 425px) { ... }
      xxsm: { max: "320px" },
      // => @media (max-width: 320px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        creamGlass:
          "linear-gradient(334.14deg,rgba(255, 255, 255, 0.31) -14.65%,rgba(255, 255, 255, 0) 103.2%),linear-gradient(149.49deg,rgba(255, 232, 191, 0.4) -4.75%,rgba(255, 232, 191, 0) 119.61%),linear-gradient(149.49deg,rgba(255, 232, 191, 0) -4.75%,rgba(255, 232, 191, 0.4) 119.61%);",
      },
    },
  },
  plugins: [],
}