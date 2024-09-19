import React from "react";
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'; // Import Heroicons

const AppointmentCard = ({ title, viewLink, time, userName, status, date, timeRange, bookingTime = "10:30AM -11:30AM" }) => {
  return (
    <div className="flex max-w-sm mx-auto bg-white shadow-lg shadow-b-xl rounded-xl overflow-hidden relative">
      {/* Left colored bar */}
      <div className="w-3 bg-[#135275]"></div>

      {/* Main content */}
      <div className="p-4 flex-1">
        {/* Header: Title, View, Time, and X button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#303972]">{title}</h2>

          <a href={viewLink} className="text-sm hover:underline mr-4">View</a>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">{time}</p>
            <button className="text-gray-400 hover:text-gray-600">
              <span>&#10005;</span> {/* This is the "X" icon */}
            </button>
          </div>
        </div>

        {/* User Information */}
        <div className="mt-1 flex items-center">
          <div className="bg-[#C1BBEB] rounded-full h-6 w-6 mr-3"></div>
          <div>
            <p className="text-sm text-gray-600">{userName}</p>
            <p className={`text-sm ${status === 'Rescheduled' ? 'text-red-500' : 'text-gray-400'}`}>{status}</p>
          </div>
        </div>

        {/* Date and Time with Icons */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
          <div className="flex items-center">
            {/* Calendar Icon with Date */}
            <CalendarIcon className="w-5 h-5 text-red-500 mr-2" /> 
            <p>{date}</p>
          </div>
         
        </div>
      </div>

      {/* Yellow Clock Icon at the bottom center */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm text-gray-500">
        <ClockIcon className="w-5 h-5 text-yellow-500 ml-3 mb-2" /> {/* Yellow Clock Icon */}
      </div>

      {/* Booking Time at the bottom-right */}
      <div className="absolute bottom-4 right-4 text-sm text-gray-500"> {/* Positioned at the bottom-right */}
        <p>{bookingTime}</p> {/* Dummy booking time */}
      </div>
    </div>
  );
};

export default AppointmentCard;
