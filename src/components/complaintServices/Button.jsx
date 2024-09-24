import React from "react";

const Button = ({ type, text, fontSize,bgColor, btnAction, width, height, cancel, getApiCall }) => {


  return (

    <button
      type={type}
      onClick={type === "submit" ? ()=> getApiCall(btnAction) : cancel}
      className={`flex items-center justify-center relative font-semibold text-[#FFF] px-4 rounded-full`}
      style={{fontSize:fontSize, backgroundColor:bgColor, height:height, width: width }}
    >
      <span>{text}</span>
      
    </button>
  );
};

export default Button;
