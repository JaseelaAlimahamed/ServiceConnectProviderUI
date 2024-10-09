/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
    extend: {

      fontFamily: {

        heading: ['poppins', 'sans-serif'],
        navbarHead: ['Jost', 'sans-serif'],
        daytime: ['Label Large/Font', 'sans-serif'],

      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",


        "dark-gray": "#1D1F2A",
        "light-gray": "#D9D9DB",
        "medium-gray": "#736A68",
      

        "dark-red": "#D80027",
        "decline-btn": "#670200",

        "customPurple": '#C1BBEB',
        "daytime": '#797C7B',

        "statuspending": '#135275',

        "complete-btn": '#137517',

        "activetab": '#65558F',

        "bluedrk": '#04228E',
        "cardfont": '#303972',
        "profilefont": '#535353',
        "incomepurple1": '#9B9CF8',
        "incomepurple2": '8082ED',
        "expenditurepink": '#FEB4C5',
        "blue-drk": "#04228E",
        "id-gray": "#797C7B;",
        "divider-clr": "#E6E0E9",
        "divider-pri": "#65558F",
        "nonactive-btn": "#49454F",
        "neutral-clr": "#FA1919",
        "warning-clr": "#FF6B00",

      },
      boxShadow: {
        "boxshadow-1": "0px 4px 4px 0px #00000040",
      },
      scrollbarHide: {
        'scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      }

    },
  },
  plugins: [],

}
