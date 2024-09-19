import React from 'react';
import { RequestCard } from '../components/reUsableComponents/RegisteredServices/RequestCard';
import { requestsData } from '../assets/fake-data';
import Navbar from '../components/reUsableComponents/RegisteredServices/Navbar';
import { FaArrowLeft, FaCog, FaSearch } from 'react-icons/fa';

const ServiceRequestPage = () => {
  
  

  return (
    <>
     <Navbar 
        title="REQUESTS" 
        search={true}
      />
    <div className="p-4 bg-gray-100 h-screen">
      <div className="space-y-4">
        {requestsData.map((request) => (
          <RequestCard
            key={request.id}
            title={request.title}
            status={request.status}
            date={request.date}
            time={request.time}
            daytime={request.daytime}
            customer={request.customer}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ServiceRequestPage;
