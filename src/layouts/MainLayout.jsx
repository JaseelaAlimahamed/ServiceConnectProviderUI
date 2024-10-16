import React from 'react';
import { Outlet,useLocation } from 'react-router-dom';
import NavbarHead from '../components/serviceProvider/layout/NavbarHead';
import Navbar from '../components/serviceProvider/layout/providerNavbar/Navbar';

const MainLayout = () => {

  const location = useLocation();

  const dashboardRoutes = ['/dashboard']; 

  const isDashboardPage = dashboardRoutes.includes(location.pathname);

  return (
    <div>
      <NavbarHead/>
      
      {isDashboardPage && <Navbar />}

      <main>

        <Outlet />  

      </main>
    </div>
  );
};

export default MainLayout;