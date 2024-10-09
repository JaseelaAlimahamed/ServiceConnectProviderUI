import React from 'react';
import ServicesList from '../../../components/serviceProvider/RegisteredServices/ServicesList';
import NavbarHead from '../../../components/serviceProvider/layout/NavbarHead';

const RegisteredServices = () => {
  return (
    <div className="max-w-full mx-auto bg-light-gray min-h-screen p-1">
      
      <ServicesList />
    </div>
  );
};

export default RegisteredServices;
