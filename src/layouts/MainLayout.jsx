import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHead from '../components/serviceProvider/layout/NavbarHead';

const MainLayout = () => {
  return (
    <div>
      <NavbarHead/>
      <main>

        <Outlet />  

      </main>
    </div>
  );
};

export default MainLayout;