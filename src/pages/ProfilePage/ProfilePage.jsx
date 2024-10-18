import React from "react";
import ProfileHeader from '../../components/profilePageComponents/ProfileHeader';
import MenuOptions from '../../components/profilePageComponents/MenuOptions';

const ProfilePage = () => {
  return (
    <div className="flex justify-center bg-light-gray h-[950px] md:h-[1000px]"> {/* Ensure minimum height of the screen */}
        <div className="bg-primary h-[750px] md:h-[875px] w-[360px] md:w-[650px] relative pb-11 mt-[80px] rounded-xl shadow-lg flex flex-col items-center">
        <ProfileHeader />
        <MenuOptions />
      </div>
    </div>
  );
};

export default ProfilePage;
