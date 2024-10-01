import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function CardWithButton() {
  
  const [activeTab, setActiveTab] = useState('request');
  const location = useLocation();
  const {appointment } = location.state || {};

  const requestDummyData = {
    title: "Plumbing",
    description:"Washroom plumbing pipe need to change",
    images:  ['https://imgs.search.brave.com/fvThpd-ponhh6lltr58quXobUqfEZZnDLFUnxpMglug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nbGFtb3VyLmNv/bS9waG90b3MvNjAw/MDY4Y2QyMTAxNjg2/ZjY3YTM1MDVhL21h/c3Rlci93XzMyMCxj/X2xpbWl0LzEzNTc4/ODY3M18xNjExOTMy/MzIwNzkyMDNfMjc1/MDAzMjgzMDEzMzE0/MzI0Ml9uLmpwZw', 'https://imgs.search.brave.com/y5F6ULWeyHnJ4iV-psjZrtodCAhARhROb7ATGxmz9GQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlcmln/aHRoYWlyc3R5bGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNi8xOS1z/aG9ydC1oYWlyY3V0/LXdpdGgtYW5nbGVk/LWxheWVycy5qcGc_/dz01MDAmc3NsPTE', 'https://imgs.search.brave.com/y5F6ULWeyHnJ4iV-psjZrtodCAhARhROb7ATGxmz9GQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlcmln/aHRoYWlyc3R5bGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNi8xOS1z/aG9ydC1oYWlyY3V0/LXdpdGgtYW5nbGVk/LWxheWVycy5qcGc_/dz01MDAmc3NsPTE'],
    bookingTimeFrom: '09:30 AM',
    bookingTimeTo:'10:30PM',
    dateFrom: 'Aug 12 2024',
    dateTo:'Aug 13 2024',
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
              <p className="text-gray-700">{requestDummyData.title || 'no title'}</p>
            </div>

            <div className="ml-8 mt-2">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-700">{requestDummyData.description || 'no description'}</p>
            </div>

            <div className="ml-8 mt-2">
              <h3 className="text-lg font-semibold">Images & Videos</h3>
              <div className="flex space-x-2">
                {requestDummyData.images.map((img, index) => (
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
                    value={requestDummyData.dateFrom}
                    readOnly
                    className="border shadow-xl ml-16 rounded-lg p-2 bg-gray-200 w-2/3 text-center"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <input
                    type="text"
                    value={requestDummyData.bookingTimeFrom}
                    readOnly
                    className="border shadow-xl rounded-lg p-2 bg-gray-200 w-24 text-center"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm ml-4 font-normal">To</label>
                  <input
                    type="text"
                    value={requestDummyData.dateTo}
                    readOnly
                    className="border shadow-xl ml-16 rounded-lg p-2 mb-4 bg-gray-200 w-2/3 text-center"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <input
                    type="text"
                    value={requestDummyData.bookingTimeTo}
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


