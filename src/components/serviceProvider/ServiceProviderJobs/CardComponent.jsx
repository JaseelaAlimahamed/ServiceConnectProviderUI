import React from 'react';
import AppointmentCard from './AppointmentCard';
import { CiSearch } from 'react-icons/ci';
import { VscSettings } from 'react-icons/vsc';

const CardComponent = ({ Head, Appointments, children }) => {
  return (
    <div className="max-w-[375px] h-[812px] mx-auto bg-white shadow-lg rounded-[23px] overflow-hidden">
      <div className="bg-dark-gray text-white p-4 h-[90px] flex items-center justify-between">
        <h2 className="text-lg font-heading mt-8 ml-4">{Head}</h2>
        <div className="flex space-x-4 mr-4">
          <button className="p-2 rounded-full hover:bg-gray-300">
            <VscSettings className="w-5 h-5 text-white mt-8" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-300">
            <CiSearch className="w-5 h-5 text-white mt-8" />
          </button>
        </div>
      </div>

      <div className="p-4 bg-light-grey space-y-8">
      {children}
        <AppointmentCard appointments={Appointments} />
       
      </div>
    </div>
  );
};

export default CardComponent;
