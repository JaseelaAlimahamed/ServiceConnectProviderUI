import React from 'react';

const ButtonComponentWithoutArrow = ({ label, type = "button", disabled = false, btnWidth, btnHeight }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-full bg-dark-gray mt-1 py-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-center`}
      style={{ width: btnWidth, height: btnHeight }}
    >
      <span className="text-center">{label}</span>
    </button>
  );
};

export default ButtonComponentWithoutArrow;
