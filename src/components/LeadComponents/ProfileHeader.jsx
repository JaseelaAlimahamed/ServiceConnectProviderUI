import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import eclipse from '../../assets/images/Ellipse309.png';

const ProfileHeader = () => {
  return (
    <div className="flex flex-row justify-start p-3 items-center gap-3 border-b mb-4 border-primary">
      <img src={eclipse} alt="" className='rounded-full aspect-square w-16 h-16' />
      <div>
        <h2 className='text-lg font-semibold'>Marcus Lucus</h2>
        <div className="flex gap-2">
          <FaLocationDot />
          <p className='text-sm'>North Paravoor, Ellavam</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
