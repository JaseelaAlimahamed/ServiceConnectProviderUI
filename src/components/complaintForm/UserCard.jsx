import React from "react";

const UserCard = ({ userDetails }) => {
  const { name, subject } = userDetails;

  return (
    <div className="flex items-center">
      <img
        src="/complaintformPropic.png"
        alt="complaint form profile"
        className="w-20 h-20"
      />
      <div className="ml-2">
        <h2 className="font-bold">{name}</h2>
        <p className="text-id-gray font-semibold mt-1">{subject} </p>
      </div>
    </div>
  );
};

export default UserCard;
