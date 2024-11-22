import React from 'react';

const ButtonComponentWithoutArrow = ({ label, type = "button", disabled = false, btnWidth, btnHeight }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`absolute bottom-0 left-0 right-0 mx-auto rounded-full bg-dark-gray end-1 my-2 py-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-center`}      style={{ width: btnWidth, height: btnHeight }}
    >
      <span className="text-center">{label}</span>
    </button>
  );
};

export default ButtonComponentWithoutArrow;
