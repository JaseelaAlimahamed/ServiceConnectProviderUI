import React from 'react';

const Button = ({ label, color,width, onClick }) => {
  return (
    <div className="my-4 flex justify-center">
        <button
      className={`w-3/4 p-3  rounded-3xl  text-primary font-semibold ${color}`}
      onClick={onClick}
      style={{width:width?width:'auto'}}
    >
      {label}
    </button>
    </div>
  );
};

export default Button;
