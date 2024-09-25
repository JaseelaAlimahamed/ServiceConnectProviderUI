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


        customPurple: '#C1BBEB',
        daytime:'#797C7B;',
        navbar:'#1D1F2A;',
        statuspending:'#135275;',
        statusopened:'#137517;',
        completebtn:'#137517',
        declainbtn:'#670200'
        "blue-drk": "#04228E",




      },

    },
  },
  plugins: [],
};
