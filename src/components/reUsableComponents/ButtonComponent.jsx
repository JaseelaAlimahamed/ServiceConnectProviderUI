import React from "react";





const ButtonComponent = ({
  label,
  type = "button",
  disabled = false,
  btnWidth = "w-auto",
  btnHeight = "h-auto",
  btnColor = "bg-accept-btn",
  variant = "default",
  onClick,
}) => {
  const variantClasses = {
    default: `${btnColor} rounded-full shadow-boxshadow-1 mt-8 p-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between`,
    complaint: `${btnColor} text-primary shadow-boxshadow-1 hover:bg-opacity-90 font-default py-2 rounded-full transition-colors`,
  };

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

      onClick={onClick}
      className={`${variantClasses[variant]} ${btnWidth} ${btnHeight}`}
   
      <span className="flex-grow text-center">{label}</span>
      {variant === 'default' && (
        <img 
          src="./buttonArrow.svg" 
          className="ml-2 w-8 h-8" 
          alt="arrow pointing right" 
        />
      )}

    </button>
  );
};


export default ButtonComponent;

