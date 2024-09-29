import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { VscSettings } from 'react-icons/vsc';


// Reusable Navbar Component
const Navbar = ({ title,search=false, bgColor = "bg-navbar", textColor = "text-white", }) => {

    const goBack = () => {
        console.log('Back button clicked');
      };
    
      const openSettings = () => {
        console.log('Settings clicked');
      };
    
      const openSearch = () => {
        console.log('Search clicked');
      };

  return (
    <div className={`${bgColor} ${textColor} h-24 flex items-center justify-between px-4 shadow-md`}>
      
      {/* Left Action (Back button or any action) */}
      <div className='flex space-x-4'>
      <button className="text-white border rounded-full border-white p-1">
        <FaArrowLeft size={20} onClick={goBack} />
      </button>
      <h1 className="text-lg font-semibold font-navbarHead">{title}</h1>
      </div>
      {/* Title */}
     

      {/* Right Actions (Icons or buttons) */}
      <div className="flex space-x-4">
      <button className="text-white border rounded-full border-white p-1">
        <VscSettings size={20} onClick={goBack} />
      </button>
      
        <button>
        {search &&   <CiSearch size={20}  onClick={openSearch}  />}

        </button>
       
      
      </div>
    </div>
  );
};
export default Navbar;