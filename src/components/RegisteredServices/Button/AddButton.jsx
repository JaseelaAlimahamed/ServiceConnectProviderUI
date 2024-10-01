import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const AddButton = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleAddNewService = () => {
    navigate('/addservice');

  }
  return (
    <div className="my-4 flex justify-center ">
      <button onClick={handleAddNewService} className="bg-dark-gray text-white py-6 px-8 shadow-lg rounded-xl border border-bluedrk w-2/3">
        + ADD NEW SERVICE
      </button>
    </div>
  );
};

export default AddButton;

