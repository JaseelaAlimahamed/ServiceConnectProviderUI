import React from 'react';
import AddButton from './Button/AddButton';
import ServiceCard from './Card/ServiceCard';
import NavbarHead from '../layout/NavbarHead';

function ServicesList() {
  const services = [
    { id:1, name: 'House Electrical', status: 'Active',type:"onetime", collar:'blue' },
    { id:2, name: 'Plumbing', status: 'Active', type:"onetime", collar:'blue'},
    { id:3, name: 'Plumbing', status: 'Active', type:"onetime" ,collar:'blue' },
    { id:4, name: 'Clock repair', status: 'Active',type:"Lead", leadBalance: '42',collar:'blue'},
    { id:5, name: 'Washing machine', status: 'Disabled',type:"Lead", leadBalance: '0',collar:'blue' },
  ];

  return (
    <div className="max-w-screen-full mx-auto bg-light-gray min-h-screen px-0">
    
      <AddButton />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesList;
