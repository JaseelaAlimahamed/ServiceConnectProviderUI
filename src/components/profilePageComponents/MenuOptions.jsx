import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/profile-arrow.svg"; // Adjusted path for the Arrow
import menuItems from "../../components/profilePageComponents/menuItems"; // Adjusted path

const MenuOptions = ({user}) => {
  
  return (
    <div className="w-full max-w-md h-auto bg-primary flex flex-col items-center mt-[10px] rounded-xl md:mt-[15px] md:w-[500px] px-4 py-6">
      <p className="text-[20px] font-navbarHead font-semibold md:text-[28px] text-center">
        {user.full_name}
      </p>
      <p className="text-medium-gray text-[12px] mb-[10px] mt-[3px] font-bold text-center">
       {user.email}
      </p>

      {menuItems.map((item) => (
        <Link
          to={item.route}
          key={item.title}
          className="w-full h-[48px] md:h-[56px] p-1 bg-primary flex justify-between items-center hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition duration-150 rounded-md mb-2"
        >
          <div className="flex items-center">
            <span className="text-lg md:text-xl">{item.icon}</span> {/* Adjusted icon size for responsiveness */}
            <p className="pl-3 text-[14px] md:text-[16px] font-bold text-heading_blck">
              {item.title}
            </p>
          </div>
          {item.additionalContent ? (
            <div className="flex items-center space-x-2">
              <p className="text-[13px] font-bold md:text-[15px] text-dark">
                {item.additionalContent}
              </p>
              <img
                src={Arrow}
                alt="Arrow icon"
                className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
              />
            </div>
          ) : (
            <img
              src={Arrow}
              alt="Arrow icon"
              className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default MenuOptions;
