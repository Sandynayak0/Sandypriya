/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "Georgia",
          "serif",
        ],
      },

      colors: {
        lovePink: "#ff4f9a",
        softPink: "#ff9fc5",
        charcoal: "#111111",
        cement: "#242424",
      },

      keyframes: {
        slideNext: {
          "0%": {
            opacity: "0",
            transform: "translateX(70px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        slidePrevious: {
          "0%": {
            opacity: "0",
            transform: "translateX(-70px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      animation: {
        "slide-next": "slideNext 500ms ease-out",
        "slide-previous": "slidePrevious 500ms ease-out",
      },
    },
  },

  plugins: [],
};