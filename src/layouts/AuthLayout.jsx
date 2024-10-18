// AuthLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHead from '../components/serviceProvider/layout/NavbarHead';

const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-gray">
      <NavbarHead />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
