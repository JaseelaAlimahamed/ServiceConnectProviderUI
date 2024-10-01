import React from 'react';
import { MdLocationPin } from 'react-icons/md';


function HeaderWithProfile({ bookingId }) {
  const dummyProfile = {
    image: 'https://imgs.search.brave.com/6k6HtqCtTh7p-diGuCA-DNpe3lk1DC1bpoymrVSUcus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzQ0LzEwLzQ2/LzM2MF9GXzQ0NDEw/NDY3OV84TFBieDQ3/enZaNEhCWnE3eHht/RkZieEU4azdxUTcx/aS5qcGc',
  };

  return (
    <div className="flex justify-center md:max-w-screen-sm mx-auto bg-light-gray">
      <div className="bg-light-gray w-full">
        <div className="flex items-center mb-2 space-x-4 my-6 mx-6">
          <img
            src={dummyProfile.image || "https://default-image-url.com"}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Sundari</h2>
            <div className="flex items-center text-secondary font-medium">
              <MdLocationPin className="text-xl mr-0" />
              <p>Kasargod, Kerala</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-1 mx-6 font-semibold">
          <p className="text-sm text-daytime">Booking ID: {bookingId}</p> 
        </div>
      </div>
    </div>
  );
}

export default HeaderWithProfile;
