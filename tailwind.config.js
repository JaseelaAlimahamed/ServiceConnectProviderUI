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

      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
 


        customPurple: '#C1BBEB',
        daytime:'#797C7B;',
        navbar:'#1D1F2A;',
        statuspending:'#135275;',
        statusopened:'#137517;',
        completebtn:'#137517',
        declainbtn:'#670200',

        activetab:'#65558F',
        pagebg:'#D9D9DB',
        declainbtn:'#670200',
        bluedrk: '#04228E',
        cardfont:'#303972;',
        profilefont:'#535353;',
        incomepurple1:'#9B9CF8',
        incomepurple2:'8082ED',
        expenditurepink:'#FEB4C5',


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
        darkbluetxt:'#202244',
        tabbgcolor:"#736A68",






      },
        boxShadow: {
          "boxshadow-1": "0px 4px 4px 0px #00000040",
        } ,

    },
  },
  plugins: [],
};