import React from "react";

const Button = ({ type, text, fontSize,bgColor, btnAction, width, height, cancel, getApi }) => {


  return (

    <button
      type={type}
      onClick={type === "submit" ? ()=> getApi(btnAction) : cancel}
      className={`flex items-center justify-center relative font-semibold text-[#FFF] px-4 rounded-full`}
      style={{fontSize:fontSize, backgroundColor:bgColor, height:height, width: width }}
    >
      <span>{text}</span>
      
    </button>
  );
};

export default Button;
