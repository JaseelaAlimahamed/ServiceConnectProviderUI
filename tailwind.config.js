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
        dark_gray: "#1D1F2A",
        light_gray: "#D9D9DB",
        medium_gray: "#736A68",

        customPurple: '#C1BBEB',
        daytime:'#797C7B;',
        navbar:'#1D1F2A;',
        statuspending:'#135275;',
        statusopened:'#137517;',
        completebtn:'#137517',
        declainbtn:'#670200',
        blue_drk: "#04228E",



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
