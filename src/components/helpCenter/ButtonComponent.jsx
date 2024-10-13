import React from 'react';

const ButtonComponentWithoutArrow = ({ label, type = "button", disabled = false, isActive, btnWidth, btnHeight,onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border-[1px] border-black font-medium transition-all duration-300 disabled:opacity-50 flex items-center justify-center ${
        isActive ? ' bg-dark-gray  text-primary ':'bg-primary text-secondary' 
      }`}
      
      style={{ width: btnWidth, height: btnHeight }}
    >
      <span className="text-center">{label}</span>
    </button>
  );
};

export default ButtonComponentWithoutArrow;
