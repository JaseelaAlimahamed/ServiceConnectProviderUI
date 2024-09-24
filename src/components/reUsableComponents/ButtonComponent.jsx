import React from "react";

const ButtonComponent = ({ type="button", label, disabled=false, bgColor="#1D1F2A", width="100%",hasIcon, height, onClick }) => {


  return (

    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center relative font-semibold text-[#FFF] shadow-[0px_4px_4px_0px_#00000040] px-4 rounded-full`}
      style={{backgroundColor:bgColor, height:height, width: width }}
    >
      <span>{label}</span>
      {hasIcon && <img src="./buttonArrow.svg" className="absolute right-2 w-8 h-8" alt="arrow pointing right" />}
    </button>
  );
};

export default ButtonComponent;
