// components/RegisteredServices/Card/ServiceCard.js
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
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
            <div>
              <FiEdit />
            </div>
          </div>
          <button className="text-blue-500 text-sm">Boost service</button>

          {/* Check if leadBalance is 0 and display appropriate message */}
          {isLeadBalanceZero ? (
            <div className="text-red-500">Disabled due to insufficient lead balance</div>
          ) : (
            <div className="text-green-500">
              Available Lead Balance: {service.leadBalance}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Display 'Disabled' if leadBalance or status is 0, else show status */}
        <span
          className={`font-semibold ${
            isServiceDisabled ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {isServiceDisabled ? 'Disabled' : service.status}
        </span>
        <button className={`text-lg ${isServiceDisabled ? 'text-red-500' : 'text-green-500'}`}>
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
