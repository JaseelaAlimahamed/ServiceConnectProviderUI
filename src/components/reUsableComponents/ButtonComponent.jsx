import React from 'react';

const ButtonComponent = ({label,type = 'button',disabled = false,btnWidth = 'w-auto',
  btnHeight = 'h-auto',variant = "default",onClick}) => {

  const variantClasses = {
    default:"rounded-full bg-dark-gray mt-8 p-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between",
    complaint: "bg-dark-gray text-white hover:bg-gray-800 py-2 px-20 lg:px-38 sm:px-32 rounded-full transition-colors",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${variantClasses[variant]} ${btnWidth} ${btnHeight}`}
    >
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
