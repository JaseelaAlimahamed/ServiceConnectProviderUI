import React from "react";

const TabComponent = ({col1label,col2label,activeTab, setActiveTab}) => {
  return (
    <div className="flex bg-tabbgcolor p-1 w-full rounded-2xl font-bold overflow-hidden mb-7">
      <button
        className={`w-full z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-2xl transition-colors duration-400 
                                ${
                                  activeTab
                                    ? "bg-primary text-black font-semibold"
                                    : "bg-transparent text-primary"
                                }`}
        onClick={() => setActiveTab(true)}
      >
        {col1label}
      </button>
      <button
        className={`w-full z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-2xl transition-colors duration-400 
                                ${
                                  activeTab
                                    ? "bg-transparent text-primary"
                                    : "bg-primary text-black font-semibold"
                                }`}
        onClick={() => setActiveTab(false)}
      >
        {col2label}
      </button>
    </div>
  );
};

export default TabComponent;