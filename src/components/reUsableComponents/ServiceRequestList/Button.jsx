import React from 'react';

const Button = ({ label, color,width, onClick }) => {
  return (
    <div className="my-4 flex justify-center">
        <button
      className={` p-3  rounded-3xl  text-white font-semibold bg-${color}`}
      onClick={onClick}
      style={{width:width?width:'auto'}}
    >
      {label}
    </button>
    </div>
  );
};

export default Button;
