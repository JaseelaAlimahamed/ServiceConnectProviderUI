import React from 'react';
import { requestsData } from '../../../assets/fakeData';
import RequestCard from '../../../components/reUsableComponents/ServiceRequestList/RequestCard';

const ServiceRequestPage = () => {
  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {requestsData.map((request) => (
          <RequestCard
          key={request.id} 
            id={request.id}
            title={request.title}
            status={request.status}
            date={request.date}
            type={request.type}
            time={request.time}
            daytime={request.daytime}
            customer={request.customer}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceRequestPage;
