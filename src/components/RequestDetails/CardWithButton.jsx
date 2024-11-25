import React, { useState } from 'react';

function CardWithButton({ data }) {
  const [activeTab, setActiveTab] = useState('request');
  const {
    service_description,
    customer_address,
    availability_from,
    availability_to,
    location,
    booking_id,
    image,
  } = data || {};

  return (
    <div className="my-4 max-w-md mx-auto lg:max-w-2xl">
      <div className="bg-white shadow-md rounded-2xl ml-4 mr-4 min-h-[400px]">
        <div className="flex justify-between mb-0">
          <button
            onClick={() => setActiveTab('request')}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${
              activeTab === 'request'
                ? 'border-blue-500 text-blue-600'
                : 'border-gray-300 text-gray-400'
            }`}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab('address')}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${
              activeTab === 'address'
                ? 'border-blue-500 text-blue-600'
                : 'border-gray-300 text-gray-400'
            }`}
          >
            Address
          </button>
        </div>
        <div className="p-6 min-h-[300px]">
          {activeTab === 'request' ? (
            <div>
              <h3 className="text-lg font-semibold">Booking ID</h3>
              <p className="text-gray-700">{booking_id}</p>

              <h3 className="mt-4 text-lg font-semibold">Service Description</h3>
              <p className="text-gray-700">{service_description || 'N/A'}</p>

              <h3 className="mt-4 text-lg font-semibold">Availability</h3>
              <p>From: {availability_from}</p>
              <p>To: {availability_to}</p>

              <h3 className="mt-4 text-lg font-semibold">Images</h3>
              {image ? (
                <img
                  src={image}
                  alt="Service"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <p>No images available.</p>
              )}
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-black">{location || 'N/A'}</p>

              <h3 className="mt-4 text-lg font-semibold">Customer Address</h3>
              <p>{customer_address || 'No address provided.'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardWithButton;
