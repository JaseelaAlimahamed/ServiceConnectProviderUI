/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
    extend: {

      fontFamily: {
      
        heading:['poppins', 'sans-serif'],
        navbarHead:['Jost', 'sans-serif'],
        daytime:['Label Large/Font', 'sans-serif'],


      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",

        "dark_gray": "#1D1F2A",
        "light_gray": "#D9D9DB",
        "medium_gray": "#736A68",

 


        "blue-drk": "#04228E",
        "id-gray": "#797C7B;",
        "divider-clr": "#E6E0E9",
        "divider-pri": "#65558F",
        "accept-btn": "#1D1F2A",
        "decline-btn": "#670200",
        "complete-btn": "#137517",
        "nonactive-btn": "#49454F",
        "neutral-clr": "#FA1919",
        "warning-clr": "#FF6B00",





      },

    },
  },
  plugins: [],
}
}
