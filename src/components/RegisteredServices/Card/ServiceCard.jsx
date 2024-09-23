
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-primary p-4 rounded-[2rem] shadow-lg flex items-center justify-between">
    
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full"><img src='profileImage.svg'/></div>
        <div>
          <div className='flex items-center space-x-4'>
          <h3 className="font-semibold">{service.name}</h3>
          <div><FiEdit/></div>
          </div>
          <button className="text-blue-500 text-sm">Boost service</button>
          </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-green-500 font-semibold">{service.status}</span>
        <button className="text-lg text-green-500"><FaAngleDown/></button>
      </div>
    </div>
  );
};

export default ServiceCard;

