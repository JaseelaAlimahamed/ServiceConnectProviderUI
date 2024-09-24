import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestsData } from '../../../assets/fake-data'; 

function RequestDetailsCard() {
  const { id } = useParams(); 
  const [activeTab, setActiveTab] = useState('request');

 
  const request = requestsData.find(req=>req.id.toString() === id);

  if (!request) {
    return <p>Request not found</p>; 
  }

  return (
    <div className="mx-4 my-4 max-w-md mx-auto lg:max-w-2xl">
  
      <div className="bg-white shadow-md rounded-2xl ml-4 mr-4">
      
        <div className="flex justify-between mb-0">
          <button
            onClick={() => setActiveTab('request')}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${
              activeTab === 'request'
                ? 'border-divider-pri text-secondary border-b-2 border-activetab'
                : 'border-divider-clr text-nonactive-btn'
            }`}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab('address')}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${
              activeTab === 'address'
                ? 'border-divider-pri text-secondary border-b-2 border-activetab'
                : 'border-divider-clr text-nonactive-btn'
            }`}
          >
            Address
          </button>
        </div>

        {activeTab === 'request' ? (
          <div>
            <div className="ml-8 mt-8">
              <h3 className="text-lg font-semibold">Title</h3>
              <p className="text-gray-700">{request?.title || 'N/A'}</p>
            </div>

            <div className="ml-8 mt-2">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-700">{request?.description || 'N/A'}</p>
            </div>

           
            <div className="ml-8 mt-2">
              <h3 className="text-lg font-semibold">Images & Videos</h3>
              <div className="flex space-x-2">
                {request?.images?.length > 0 ? (
                  request.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Image ${index}`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>

           
            <div className="flex flex-col ml-8 mt-2">
              <h3 className="font-semibold mb-2">Availability</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm ml-4 font-normal">From</label>
                  <input
                    type="text"
                    value={request?.availabilityFromDate || ''}
                    readOnly
                    className="border shadow-xl ml-16 rounded-lg p-2 bg-gray-200 w-2/3 text-center"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <input
                    type="text"
                    value={request?.availabilityFromTime || ''}
                    readOnly
                    className="border shadow-xl rounded-lg p-2 bg-gray-200 w-24 text-center"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm ml-4 font-normal">To</label>
                  <input
                    type="text"
                    value={request?.availabilityToDate || ''}
                    readOnly
                    className="border shadow-xl ml-16 rounded-lg p-2 mb-4 bg-gray-200 w-2/3 text-center"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <input
                    type="text"
                    value={request?.availabilityToTime || ''}
                    readOnly
                    className="border shadow-xl rounded-lg p-2 mb-4 bg-gray-200 w-24 text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-8 mt-8 p-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-black">{request?.location || 'No address available'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestDetailsCard;
