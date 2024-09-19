// CardComponent.jsx
import React from 'react';
import AppointmentCard from './AppointmentCard';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'; // Import AdjustmentsHorizontalIcon from Heroicons

const CardComponent = ({ title, content, appointments }) => {
  return (
    <div className="max-w-[375px] h-[812px] mx-auto bg-white shadow-lg rounded-[23px] overflow-hidden">
      <div className="bg-dark-gray text-white p-4 h-[90px] flex items-center justify-between">
        <h2 className="text-lg font-heading mt-8 ml-4">{title}</h2>

        {/* Search and Filter Icons */}
        <div className="flex space-x-4 mr-4">
          
          {/* Adjustments (Filter) Icon */}
          <button className="p-2 rounded-full hover:bg-gray-300">
            <AdjustmentsHorizontalIcon className="w-5 h-5 text-white mt-8" /> {/* Using Heroicons AdjustmentsHorizontalIcon */}
          </button>

          {/* Search Icon */}
          <button className="p-2 rounded-full hover:bg-gray-300">
            <MagnifyingGlassIcon className="w-5 h-5 text-white mt-8" /> {/* Using Heroicons MagnifyingGlassIcon */}
          </button>

        </div>
      </div>
      
      <div className="p-4 bg-light-grey">
        <div className="p-4 bg-medium-grey">
          {/* Additional content can be added here */}
        </div>
        <p>{content}</p>
        <div className="m-4">
          {appointments.map((appointment, index) => (
            <AppointmentCard
              key={index}
              title={appointment.title}
              viewLink={appointment.viewLink}
              date={appointment.date}
              time={appointment.time}
              serviceProvider={appointment.serviceProvider}
              status={appointment.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
