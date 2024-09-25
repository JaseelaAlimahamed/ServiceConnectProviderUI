import React from 'react';
import { RequestCard } from '../../components/reUsableComponents/ServiceRequestList/RequestCard';
import { requestsData } from '../../assets/fake-data';



const ServiceRequestList = () => {
  
  

  return (
    <>
     <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-8 px-4 mx-auto mt-4">
     
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
    </>
  );
};

export default ServiceRequestList;
