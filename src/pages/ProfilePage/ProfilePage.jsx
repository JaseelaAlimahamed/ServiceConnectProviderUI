import React from "react";
import ProfileHeader from "../../components/profilePageComponents/ProfileHeader";
import MenuOptions from "../../components/profilePageComponents/MenuOptions";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>; // Display loading if user data is unavailable
  }

  return (
    <div className="flex justify-center bg-light-gray min-h-screen py-10">
      <div className="bg-primary w-full max-w-[650px] h-auto rounded-xl shadow-lg flex flex-col items-center pb-10 md:pb-14 mt-10 md:mt-16">
        {/* Passing user data as a prop */}
        <ProfileHeader user={user} />
        <MenuOptions user={user.user} />
      </div>
    </div>
  );
};

export default ProfilePage;
