import React, { useEffect, useState } from 'react';
import { getServiceRequests } from '../../../services/providerAxios';
import RequestCard from '../../../components/reUsableComponents/ServiceRequestList/RequestCard';

const ServiceRequestPage = () => {
  const [requestsData, setRequestsData] = useState([]);
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNTQyMjc0LCJpYXQiOjE3MzA0ODQ2NzQsImp0aSI6IjNkMjc2N2I0ZjQyNTRlYTE5Zjc1MGMzNzg1ZTEyMjA5IiwidXNlcl9pZCI6NH0.8kUhv8iLpcb9n_4FACqhjlf5Qs4r0ibMLYqkB-gLgs4"; // Store your access token securely
  useEffect(() => {
    const fetchServiceRequests = async () => {
      try {
        const data = await getServiceRequests(accessToken);
        console.log('API response data:', data);
        setRequestsData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching service requests:', error);
      }
    };

    fetchServiceRequests();
  }, [accessToken]);

  // Function to extract date and time separately
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {requestsData.map((request) => {
          const fromDateTime = formatDateTime(request.availability_from);
          const toDateTime = formatDateTime(request.availability_to);
          const requestDateTime = formatDateTime(request.request_date);

          return (
            <RequestCard
              key={request.booking_id}
              id={request.booking_id}
              title={request.subcategory}
              status={request.acceptance_status}
              date={`${fromDateTime.date} - ${toDateTime.date}`}
              type={request.service_type}
              time={`${fromDateTime.time} - ${toDateTime.time}`}
              daytime={`${requestDateTime.date} - ${requestDateTime.time}`}
              image={request.image}
              customer={request.customer_name}
              reshcedule={request.reshcedule_status}
              titlename={request.title}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ServiceRequestPage;
