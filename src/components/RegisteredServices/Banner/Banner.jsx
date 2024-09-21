import React from 'react';
import { CiSearch } from "react-icons/ci";
import { VscSettings } from 'react-icons/vsc';


const Banner = () => {
  return (
    <div className="w-full flex justify-between items-center bg-dark-gray text-white p-10">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl ml-8">REGISTERED SERVICES</h1>
      </div>
      <div className="flex space-x-3">
        <button className="text-xl"><VscSettings/></button>
        <button className="text-xl"><CiSearch/></button>
      </div> 
    </div>
  );
};

export default Banner;

