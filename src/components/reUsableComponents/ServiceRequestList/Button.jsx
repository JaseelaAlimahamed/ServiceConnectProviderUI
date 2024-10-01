import React from 'react';

const Button = ({ label, color, onClick }) => {
  return (
    <div className="my-4 flex justify-center">
        <button
      className={`p-3  rounded-3xl  text-white font-semibold ${color}`}
      onClick={onClick}
    >
      {label}
    </button>
    </div>
  );
};

export default Button;
