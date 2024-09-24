import React from 'react';
import { RequestCard } from '../components/reUsableComponents/RegisteredServices/RequestCard';
import { requestsData } from '../assets/fake-data';



const ServiceRequestPage = () => {
  
  

  return (
    <>
    
    <div className="p-4 bg-gray-100 h-screen">
      <div className="space-y-4">
        {requestsData.map((request) => (
          <RequestCard
            key={request.id}
            id={request.id}
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
