import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

// Reusable Navbar Component
const Navbar = ({ title, search = false, showBackButton = true, bgColor = "bg-navbar", textColor = "text-white" }) => {
  
  const navigate = useNavigate();

  // Go back function
  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  // Search function
  const openSearch = () => {
    console.log('Search clicked');
    // Trigger search functionality or redirect to search page
  };

  return (
    <div className={`${bgColor} ${textColor} h-24 flex items-center justify-between px-4 shadow-md`}>
      
      {/* Left Action (Back button or any action) */}
      <div className='flex space-x-4 items-center'>
        {showBackButton && (
          <button className="text-white border rounded-full border-white p-1" onClick={goBack}>
            <FaArrowLeft size={20} />
          </button>
        )}
        <h1 className="text-lg font-semibold font-navbarHead">{title}</h1>
      </div>

      {/* Right Actions (Icons or buttons) */}
      <div className="flex space-x-4">
        {search && (
          <button onClick={openSearch}>
            <CiSearch size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
