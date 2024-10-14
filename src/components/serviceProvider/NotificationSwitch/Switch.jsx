import React from 'react';

const Switch = ({ label, isActive, onToggle }) => {
  return (
    <div className="flex justify-between items-center py-4 ">
    <span className="text-lg font-semibold">{label}</span>
    <button
      className={`w-12 h-6 flex items-center border-2 rounded-full p-1 transition-colors duration-300 ${
        isActive ? 'bg-rating_bg' : 'bg-rating_bg'
      }`}
      onClick={onToggle}
    >
      <div
        className={`w-5 h-5 p-1 rounded-full shadow-md transform transition-transform duration-300 ${
          isActive ? 'bg-black translate-x-6' : 'bg-rating_bg translate-x-0'
        }`}
      />
    </button>
  </div>
  
  );
};

export default Switch;
