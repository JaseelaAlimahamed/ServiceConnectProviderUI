// components/SubmitButton.js
import React from 'react';

const SubmitButton = ({ disabled = false }) => (
  <button
    type="submit"
    disabled={disabled}
    className="rounded-full bg-[#1D1F2A] mt-2 py-4 text-white font-default hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-between px-4 w-[350px] h-[60px]"
  >
    <span className="flex-grow text-center font-default text-[18] font-semibold">
      Update
    </span>
  </button>
);

export default SubmitButton;