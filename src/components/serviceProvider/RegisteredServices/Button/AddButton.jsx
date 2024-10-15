import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import { FiPlus } from 'react-icons/fi'; // Import the plus icon


const AddButton = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleAddNewService = () => {
    navigate('/add-service');

  };

  return (
    <div className="my-4 flex justify-center">
      <button 
        onClick={handleAddNewService} 
        className="bg-dark-gray text-white py-6 px-8 shadow-lg rounded-xl border border-blue-drk w-2/3 flex items-center justify-center"
      >
        <FiPlus className="mr-2 " /> {/* Icon with some right margin */}
        ADD NEW SERVICE

      </button>
    </div>
  );
};

export default AddButton;


