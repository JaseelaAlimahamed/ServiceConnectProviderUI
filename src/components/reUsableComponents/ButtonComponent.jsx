import React from "react";

const ButtonComponent = ({
  label,
  type = "button",
  disabled = false,
  btnWidth = "w-auto",
  btnHeight = "h-auto",
  btnColor = "bg-accept-btn", // Default button color
  variant = "default",
  onClick,
  hasIcon = false, // Default to false if not passed
  bgColor ,
  height = "auto", // Default height if not passed
  width = "auto", // Default width if not passed
}) => {
  const variantClasses = {
    default:
      "rounded-full bg-dark-gray mt-8 p-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between",
    complaint:
      "bg-dark-gray text-white hover:bg-gray-800 py-2 px-20 lg:px-38 sm:px-32 rounded-full transition-colors",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} ${btnWidth} ${btnHeight} flex items-center justify-center relative font-semibold text-[#FFF] shadow-[0px_4px_4px_0px_#00000040] px-4 rounded-full`}
      style={{ backgroundColor: bgColor, height, width }}
    >
      <span className="flex-grow text-center">{label}</span>
      {hasIcon && (
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
