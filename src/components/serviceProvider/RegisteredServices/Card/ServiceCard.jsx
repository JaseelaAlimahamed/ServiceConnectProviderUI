import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    // Redirect to the edit service page with the service ID
    navigate(`/edit-service/${service.id}`);
  };

  // Check conditions for lead balance and status
  const isLeadBalanceZero = service.leadBalance === '0';
  const isServiceDisabled = isLeadBalanceZero || service.status === 'Disabled';

  return (
    <div className="bg-primary p-4 rounded-[2rem] shadow-lg flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full">
          <img src="profileImage.svg" alt="Profile" />
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <h3 className="font-semibold">{service.name}</h3>
            <button onClick={handleEditClick} className="text-blue-500">
              <FiEdit />
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Type: {service.type} | Collar: {service.collar}
          </div>

          {/* Display lead balance if the service type is Lead */}
          {service.type === 'Lead' && (
            <div className={`text-sm ${isLeadBalanceZero ? 'text-dark-red' : 'text-green-500'}`}>
              {isLeadBalanceZero
                ? 'Disabled due to insufficient lead balance'
                : `Lead Balance: ${service.leadBalance}`}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span
          className={`font-semibold ${
            isServiceDisabled ? 'text-dark-red' : 'text-green-500'
          }`}
        >
          {isServiceDisabled ? 'Disabled' : service.status}
        </span>
        <button className={`text-lg ${isServiceDisabled ? 'text-dark-red' : 'text-green-500'}`}>
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
