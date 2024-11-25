import React from "react";
import { CiImageOn } from "react-icons/ci";

const ProfileHeader = ({user}) => {
  return (
    <div className="relative flex  justify-center items-center mt-5">
      {/* Profile Picture */}
      <div className="relative w-[110px] h-[110px] md:w-[125px] md:h-[125px] rounded-full overflow-hidden border-4 border-gray-300">
        <img
          className="w-full h-full object-cover"
          src={user.profile_image}
          alt="Profile picture"
        />
      </div>

      {/* Edit Icon */}
      <button
        className="absolute bottom-5 right-5 translate-x-1/2 translate-y-1/2 p-1 bg-white rounded-full shadow-lg border-2 border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Edit Profile Picture"
      >
        <CiImageOn width="24" height="24" className="text-gray-700" />
      </button>
    </div>
  );
};

export default ProfileHeader;
