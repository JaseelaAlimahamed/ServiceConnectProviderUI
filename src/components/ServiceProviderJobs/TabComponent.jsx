import React from "react";

const TabComponent = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center items-center bg-medium-gray rounded-2xl p-1 h-[44px] w-full max-w-md mx-auto shadow-lg mb-6">
      <button
        onClick={() => handleTabClick("ongoing")}
        className={`${
          activeTab === "ongoing"
            ? "bg-primary text-[#4B164C]"
            : "bg-transparent text-primary"
        } w-1/2 px-6 rounded-full focus:outline-none font-medium transition-colors duration-300`}
      >
        Ongoing
      </button>

      <button
        onClick={() => handleTabClick("completed")}
        className={`${
          activeTab === "completed"
            ? "bg-primary text-Activeservice-button"
            : "bg-transparent text-primary"
        } w-1/2 px-6 rounded-full focus:outline-none font-medium transition-colors duration-300`}
      >
        Completed
      </button>
    </div>
  );
};

export default TabComponent;
