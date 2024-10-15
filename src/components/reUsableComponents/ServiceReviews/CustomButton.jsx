import React from 'react';

const CustomButton = ({ label, onClick, bgColor, textColor, hoverBgColor, hoverTextColor, customClasses,textSize }) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded-full ${textSize} font-semibold shadow-lg ${bgColor} ${textColor} hover:${hoverBgColor} hover:${hoverTextColor} ${customClasses}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
