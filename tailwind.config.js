/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5CA720",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        fadeUpIn: {
          "0%": { transform: "translate(0, 10%)", opacity: "0" },
          "100%": { transform: "translate(0, 0px)", opacity: "1" },
        },
        fadeDownOut: {
          "0%": { transform: "translate(0, 0px)", opacity: "1" },
          "100%": { transform: "translate(0, 10%)", opacity: "0" },
        },
      },
      animation: {
        fadeUpIn: "fadeUpIn 700ms ease-in-out both",
        fadeDownOut: "fadeDownOut 700ms ease-in-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
