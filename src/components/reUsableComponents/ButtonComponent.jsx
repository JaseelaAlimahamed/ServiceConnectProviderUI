import React from 'react';

const ButtonComponent = ({label,type = 'button',disabled = false,btnWidth = 'w-auto',
  btnHeight = 'h-auto', btnColor="bg-accept-btn", variant = "default",onClick}) => {

  const variantClasses = {
    default:`${btnColor} rounded-full  mt-8 p-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between`,
    complaint: `${btnColor} text-white hover:bg-opacity-90 py-2 rounded-full transition-colors`,
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

export default ButtonComponent