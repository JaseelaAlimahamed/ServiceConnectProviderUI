import React from 'react';

const RoundedButton = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      className={`md:w-96 w-72 py-5  mt-96 ${bgColor} ${textColor} font-semibold rounded-full shadow-xl`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
