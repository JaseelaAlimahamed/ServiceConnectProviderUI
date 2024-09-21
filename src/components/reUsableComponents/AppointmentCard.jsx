import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const AppointmentCard = ({ title, viewLink, time, userName, status, date, timeRange, bookingTime = "10:30AM -11:30AM" }) => {
  return (
    <div className="flex max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden relative"> {/* Shadow added */}
      <div className="w-3 bg-[#135275]"></div> {/* Left colored bar */}

      <div className="p-4 flex-1">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#303972]">{title}</h2>
          <a href={viewLink} className="text-sm hover:underline mr-4">View</a>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">{time}</p>
            <button className="text-gray-400 hover:text-gray-600">
              <span>&#10005;</span> {/* "X" icon */}
            </button>
          </div>
        </div>

        <div className="mt-1 flex items-center">
          <div className="bg-[#C1BBEB] rounded-full h-6 w-6 mr-3"></div>
          <div>
            <p className="text-sm text-gray-600">{userName}</p>
            <p className={`text-sm ${status === 'Rescheduled' ? 'text-red-500' : 'text-gray-400'}`}>{status}</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
          <div className="flex items-center">
            <CiCalendar className="w-5 h-5 text-red-500 mr-2" />
            <p>{date}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center text-sm text-gray-500"> {/* Booking time with clock icon */}
        <CiClock2 className="w-5 h-5 text-yellow-500 mr-1" />
        <p>{bookingTime}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
