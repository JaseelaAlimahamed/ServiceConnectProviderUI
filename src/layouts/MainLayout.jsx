import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHead from '../components/serviceProvider/layout/NavbarHead';

const MainLayout = () => {
  return (
    <div>
      <NavbarHead/>
      <main>
        <Outlet />  {/* Renders the nested routes */}
      </main>
    </div>
  );
};

export default MainLayout;