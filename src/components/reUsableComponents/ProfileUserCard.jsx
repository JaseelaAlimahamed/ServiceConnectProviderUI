import React from 'react';
import { CiImageOn } from "react-icons/ci";

const ProfileUserCard = ({ userDetails }) => {
  const { name, email, profileImage } = userDetails;

  return (
    <div className="flex flex-col items-center relative">
      {/* Profile Picture */}
      <div className="relative ">
        <img
          src="/complaintformPropic.png"
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-green object-cover "
        />
        {/* Edit Icon */}
        <button className="absolute  bottom-1 right-1 bg-white p-1 rounded-lg shadow-md border-green border-2">
         <CiImageOn className="text-green w-5 h-5 " strokeWidth={1} />
        </button>
      </div>

      {/* User Info */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default ProfileUserCard;
