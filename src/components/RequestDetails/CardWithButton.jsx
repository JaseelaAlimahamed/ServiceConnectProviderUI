import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function CardWithButton() {
  
  const [activeTab, setActiveTab] = useState('request');
  const location = useLocation();
  const {appointment } = location.state || {};

  const requestData = {
    availabilityFromTime: '01:30 AM',
    availabilityToTime: '02:30 PM',
  };

  return (
    <div className="mx-4 my-4 max-w-md mx-auto lg:max-w-2xl">
      <div className="bg-white shadow-md rounded-2xl ml-4 mr-4">
        <div className="flex justify-between mb-0">
          <button
            onClick={() => setActiveTab('request')}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${activeTab === 'request' ? 'border-divider-pri text-secondary' : 'border-divider-clr text-nonactive-btn'}`}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab('address')}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${activeTab === 'address' ? 'border-divider-pri text-secondary' : 'border-divider-clr text-nonactive-btn'}`}
          >
            Address
          </button>
        </div>
        {activeTab === 'request' ? (
          <div>
            <div className="ml-8 mt-8">
              <h3 className="text-lg font-semibold">Title</h3>
              <p className="text-gray-700">{appointment.title || 'no title'}</p>
            </div>

            <div className="ml-8 mt-2">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-700">{appointment.description}</p>
            </div>

            <div className="ml-8 mt-2">
              <h3 className="text-lg font-semibold">Images & Videos</h3>
              <div className="flex space-x-2">
                {appointment.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Image ${index}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col ml-8 mt-2 ">
              <h3 className="font-semibold mb-2">Availability</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm ml-4 font-normal">From</label>
                  <input
                    type="text "
                    value={appointment.dateFrom}
                    readOnly
                    className="border shadow-xl ml-16 rounded-lg p-2 bg-gray-200 w-2/3 text-center"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <input
                    type="text"
                    value={appointment.bookingTimeFrom}
                    readOnly
                    className="border shadow-xl rounded-lg p-2 bg-gray-200 w-24 text-center"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm ml-4 font-normal">To</label>
                  <input
                    type="text"
                    value={appointment.dateTo}
                    readOnly
                    className="border shadow-xl ml-16 rounded-lg p-2 mb-4 bg-gray-200 w-2/3 text-center"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <input
                    type="text"
                    value={appointment.bookingTimeTo}
                    readOnly
                    className="border shadow-xl rounded-lg p-2 mb-4 bg-gray-200 w-24 text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-8 mt-8 p-4 ">
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-black">This is my address page</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardWithButton; 


