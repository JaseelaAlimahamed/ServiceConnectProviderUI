import React from 'react';

const TabComponent = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-between bg-medium-gray rounded-2xl p-1 h-[44px] w-[343px] shadow-lg">
      {/* Ongoing Button */}
      <button
        onClick={() => handleTabClick('ongoing')}
        className={`${
          activeTab === 'ongoing' ? 'bg-white  text-[#4B164C]' : 'bg-transparent text-white'
        } w-[150px] px-6 rounded-full focus:outline-none font-medium transition-colors duration-300`}
      >
        Ongoing
      </button>

      {/* Completed Button */}
      <button
        onClick={() => handleTabClick('completed')}
        className={`${
          activeTab === 'completed' ? 'bg-white text-[#4B164C]' : 'bg-transparent text-white'
        } w-[150px] px-6  rounded-full focus:outline-none font-medium transition-colors duration-300`}
      >
        Completed
      </button>
    </div>
  );
};

export default TabComponent;
