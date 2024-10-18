import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import { FiPlus } from 'react-icons/fi'; // Import the plus icon


const AddButton = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleAddNewService = () => {
    navigate('/add-service');

  };

  return (
    <div className="my-6 flex justify-center">
      <button 
        onClick={handleAddNewService} 
        className="bg-dark-gray w-full text-white text-xl py-6 px-8 shadow-lg rounded-xl border border-blue-drk  flex items-center justify-center"
      >
        <FiPlus className="mr-2 text-4xl " /> {/* Icon with some right margin */}
        ADD NEW SERVICE

      </button>
    </div>
  );
};

export default AddButton;


