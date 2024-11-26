import React from "react";
import { MdLocationPin } from "react-icons/md";

function HeaderWithProfile({ data }) {
  console.log(data);

  const defaultProfileImage =
    "https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png";

  return (
    <div className="flex justify-center md:max-w-screen-sm mx-auto bg-light-gray">
      <div className="bg-light-gray w-full">
        <div className="flex items-center mb-2 space-x-4 my-6 mx-6">
          <img
            src={data.profile_image ? `${data.profile_image}` : defaultProfileImage}
            alt="User profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="flex items-center text-secondary font-medium">
              <MdLocationPin className="text-xl mr-1" />
              <p>{data.customer_place || "Location not provided"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-1 mx-6 font-semibold">
          <p className="text-sm text-id-gray">
            Booking ID: {data.booking_id || "Unavailable"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderWithProfile;
