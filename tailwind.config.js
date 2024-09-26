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
        heading:['poppins', 'sans-serif'],
        navbarHead:['Jost', 'sans-serif'],
        daytime:['Label Large/Font', 'sans-serif'],
      },

      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        "dark-gray": "#1D1F2A",
        "light-gray": "#D9D9DB",
        "medium-gray": "#736A68",
         call_Green: '#167f71',
        customPurple: '#C1BBEB',
        daytime:'#797C7B;',
        navbar:'#1D1F2A;',
        statuspending:'#135275;',
        statusopened:'#137517;',
        statusrejected:'#FA1919F0;',
        completebtn:'#137517',
        declainbtn:'#670200',
        activetab:'#65558F',
        pagebg:'#D9D9DB',
        declainbtn:'#670200',
        bluedrk: '#04228E',
        cardfont:'#303972;',
        





      },
      screens:{
        
        'xs':'320px', 
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