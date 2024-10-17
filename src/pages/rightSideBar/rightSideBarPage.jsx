import React from 'react';
import ProfileSidebar from '../../components/serviceProvider/layout/rightSideMenuBar/rightSideMenuBar';

function RightSideBarPage({ isRightSidebarOpen, toggleRightSidebar, onLogout }) {
  return (
    <div>
      <ProfileSidebar isRightSidebarOpen={isRightSidebarOpen} toggleRightSidebar={toggleRightSidebar} onLogout={onLogout}/>
    </div>
  );
}

export default RightSideBarPage;


