import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

function HeaderWithProfile() {
  const location = useLocation();
  const {appointment } = location.state || {}; // Access passed state
  
  return (
    <div className="flex justify-center md:max-w-screen-sm mx-auto bg-light-gray">
      <div className="bg-light-gray w-full">
        <div className="flex items-center mb-2 space-x-4 my-6 mx-6">
          <img
            src={appointment.image || "https://default-image-url.com"} // Use default image if none is provided
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">{appointment.userName || 'Unknown User'}</h2>
            <div className="flex items-center text-secondary font-medium">
              <MdLocationPin className="text-xl mr-0" />
              <p>Kasargod, Kerala</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-1 mx-6 font-semibold">
          <p className="text-sm text-id-gray">Booking ID: {appointment.id}</p> 
        </div>
      </div>
    </div>
  );
}

export default HeaderWithProfile;


