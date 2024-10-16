import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/profile-arrow.svg"
import menuItems from "../ProfilePage/menuItems"; // Adjusted path

const MenuOptions = () => {
  return (
    <div className="w-auto h-auto bg-primary flex flex-col items-center mt-[80px] rounded-xl md:mt-[95px] md:w-[500px]">
      <p className="text-[24px] font-navbarHead font-semibold md:text-[30px]">
        James S. Hernandez
      </p>
      <p className="text-medium-gray text-[13px] mb-[10px] mt-[3px] font-bold">
        hernandex.redial@gmail.com
      </p>

      {menuItems.map((item) => (
        <Link
          to={item.route}
          key={item.title}
          className="w-[301px] h-[50px] md:h-[60px] md:w-[450px] p-1 bg-primary flex justify-between items-center hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition duration-150 rounded-md"
        >
          <div className="flex">
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              className="w-[16px] h-[20px] md:w-[18px] md:h-[22px]"
            />
            <p className="pl-2 text-[15px] font-bold text-heading_blck">
              {item.title}
            </p>
          </div>
          {item.additionalContent ? (
            <div className="flex items-center space-x-2">
              <p className="text-[14px] font-bold font-daytime text-dark">
                {item.additionalContent}
              </p>
              <img src={Arrow} alt="Arrow icon" />
            </div>
          ) : (
            <img src={Arrow} alt="Arrow icon" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default MenuOptions;
