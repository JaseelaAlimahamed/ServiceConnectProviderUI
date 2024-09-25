/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
    extend: {

      fontFamily: {
        default: ["Jost", "sans-serif"],
        heading: ["Aldrich", "sans-serif"],
        input: ["Mulish", "sans-serif"],
      },

      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        "dark-gray": "#1D1F2A",
        "light-gray": "#D9D9DB",
        "medium-gray": "#736A68",
      },

    },
  },
  plugins: [],
};
