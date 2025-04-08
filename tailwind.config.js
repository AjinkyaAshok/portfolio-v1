/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    fontFamily: {
      bebas: ['"Bebas Neue"', "sans-serif"],
      "bebas-placeholder": ['"Bebas Neue Placeholder"', "sans-serif"],
      soft: ['Nunito', 'sans-serif'],
    },
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        wiggle: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(15deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        move: {
          "0%": { transform: "translateX(-0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      // animation: {
      //   wiggle: "wiggle 10s linear infinite",
      //   move: "move 10s linear infinite",
      //   slideUp: "slideUp 0.3s ease-out",
      //   slideDown: "slideDown 0.3s ease-out",
      // },
    },
  },
  plugins: [],
};
