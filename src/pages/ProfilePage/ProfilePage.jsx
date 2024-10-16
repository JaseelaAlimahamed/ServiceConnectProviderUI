import React from "react";
import ProfileHeader from './ProfileHeader';
import MenuOptions from './MenuOptions';

const ProfilePage = () => {
  return (
    <div>
      <div className="flex justify-center h-[900px] bg-light-gray">
        <div className="bg-primary h-[680px] md:h-[800px] w-[360px] md:w-[650px] relative pb-11 mt-[80px] rounded-xl shadow-lg flex flex-col items-center">
          <ProfileHeader />
          <MenuOptions />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
