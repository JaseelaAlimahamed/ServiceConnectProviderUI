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
      screens:{
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
      }

    },
  },
  plugins: [],
};
