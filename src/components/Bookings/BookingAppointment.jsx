import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const BookingAppointment = ({ title, viewLink, time, userName,image, status, dateFrom, bookingTimeFrom="07:00 AM",bookingTimeTo="11:30 PM" }) => {
    return (
        <div className="flex max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden h-44 relative">
          <div className={`w-3 ${status === 'Rescheduled' ? 'bg-neutral-clr' : 'bg-warning-clr'}`}></div>
          <div className="p-4 flex-1">
            <div className="flex justify-between items-center">
              {/* Responsive text size: small on desktop, larger on mobile */}
              <h2 className="text-lg md:text-base lg:text-sm font-semibold text-[#303972]">{title}</h2>
              <a href={viewLink} className="text-sm hover:underline mr-4">View</a>
              <div className="flex items-center space-x-4">
                <p className="text-sm md:text-xs lg:text-xs text-gray-500">{time}</p>
                <button className="text-gray-400 hover:text-gray-600">
                  <span>&#10005;</span>
                </button>
              </div>
            </div>
            <div className={`flex items-center ${status === 'Rescheduled' ? "mt-2" : "mt-6"}`}>
              <div className="flex space-x-2">
                <img src={image} className="w-12 mr-3 h-12 rounded-full object-cover" />
              </div>
              <div>
                {/* Responsive text for userName */}
                <p className="text-sm md:text-xs lg:text-sm text-gray-600">{userName}</p>
                <p className={`text-sm md:text-xs lg:text-xs ${status === 'Rescheduled' ? 'text-red-500' : 'text-gray-400'}`}>{status}</p>
              </div>
            </div>
            <div className={`flex items-center justify-between text-sm md:text-xs lg:text-xs text-gray-500 ${status === 'Rescheduled' ? "mt-4" : "mt-6 "}`}>
              <div className="flex items-center">
                <CiCalendar className="w-5 h-5 text-red-500 mr-1" />
                <p>{dateFrom}</p>
              </div>
              <div className="flex items-center">
                <CiClock2 className="w-5 h-5 text-yellow-500 mr-1" />
                <p>{bookingTimeFrom + ' - ' + bookingTimeTo}</p>
              </div>
            </div>
            {status === "Rescheduled" && (
              <div className="mt-2">
                <button className="bg-dark-gray text-white lg:h-8 px-2  rounded-full w-full">
                  View & Accept
                </button>
              </div>
            )}
          </div>
        </div>
      );
      
};

export default BookingAppointment

