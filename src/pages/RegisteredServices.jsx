import React from 'react';
import Banner from '../components/RegisteredServices/Banner/Banner';
import AddButton from '../components/RegisteredServices/Button/AddButton';
import ServiceCard from '../components/RegisteredServices/Card/ServiceCard';



const RegisteredServices = () => {
  const services = [
    { name: 'House Electrical', status: 'Active',leadBalance:'42' },
    { name: 'Plumbing', status: 'Active',leadBalance:'50' },
    { name: 'Clock repair', status: 'Active',leadBalance:'42' },
    { name: 'Washing machine', status: 'Disabled',leadBalance:'0' },
    
  ];
  return (
    <div className="max-w-full md:max-w-screen-sm mx-auto bg-light-gray min-h-screen">
      
      <Banner />
      <AddButton />
      <div className="space-y-4 p-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
          
    </div>
  );
};

export default RegisteredServices;
