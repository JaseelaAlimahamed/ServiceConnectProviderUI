import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdImageNotSupported } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit-service/${service.id}`);
  };

  // Check conditions for lead balance and status
  const isLeadBalanceZero = service.available_lead_balance === 0;
  const isServiceDisabled = isLeadBalanceZero || service.status === 'Inactive';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto relative">
      {/* Status Badge */}
      <div className="w-20 h-20 flex-shrink-0">
          {service.image ? (
            <img
              src={service.image}
              alt={`${service.description || 'Service'} image`}
              className="w-full h-full rounded-full object-cover border border-gray-300"
            />
          ) : (
            <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-100 border border-gray-300">
              <MdImageNotSupported size={40} className="text-gray-400" />
            </div>
          )}
        </div>
      <div
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          service.status === 'Active'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}
      >
        {service.status}
      </div>

      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Service Image */}
        

        {/* Service Details */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">{service.description}</h3>
            <button
              onClick={handleEditClick}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              title="Edit Service"
            >
              <FiEdit size={20} />
            </button>
          </div>

          {/* Additional Details */}
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-500">
              GST Code: <span className="font-medium text-gray-700">{service.gstcode}</span>
            </p>
            <p className="text-sm text-gray-500">
              Category: <span className="font-medium text-gray-700">{service.category}</span>
            </p>
            <p className="text-sm text-gray-500">
              Subcategory: <span className="font-medium text-gray-700">{service.subcategory}</span>
            </p>
            <p className="text-sm text-gray-500">
              Collar Amount:{" "}
              <span className="font-medium text-gray-700">
                ₹{service.collar_amount.toLocaleString()}
              </span>
            </p>
            {service.available_lead_balance !== null && (
              <p
                className={`text-sm ${
                  isLeadBalanceZero ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {isLeadBalanceZero
                  ? 'Insufficient lead balance'
                  : `Lead Balance: ${service.available_lead_balance}`}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Show More Details Button */}
     
    </div>
  );
};

export default ServiceCard;
