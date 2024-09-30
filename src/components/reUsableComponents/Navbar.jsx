import React from 'react';

// Reusable Navbar Component
const Navbar = ({ title,search=false, bgColor = "bg-navbar", textColor = "text-primary", }) => {

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
    <div
      className={`${bgColor} ${textColor} h-24 flex items-center justify-between px-3 sm:px-6 shadow-md `}
    >
      {/* Left Action (Back button or any action) */}
      <div className="flex space-x-4 items-center">
        <button
          className="flex items-center justify-center border rounded-full border-white w-10 h-10"
          onClick={goBack}
        >
          <img src="/navback-icon.svg" alt="Go Back" />
        </button>
        {/* Title */}
        <h1 className="text-lg font-semibold font-navbarHead">{title}</h1>
      </div>

      {/* Right Actions (Icons or buttons) */}
      <div className="flex space-x-4">
        <button className="flex items-center justify-center border rounded-full border-gray-500 w-10 h-10" onClick={openSettings}>
          <img src="/settings-icon.svg" alt="settings" />
        </button>

        {search && <button  onClick={openSearch}>
          <img src="/search-icon.svg" alt="search" />
          </button>}
      </div>
    </div>
  );
};
export default Navbar;