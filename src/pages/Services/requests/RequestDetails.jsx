import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardWithButton from '../../../components/RequestDetails/CardWithButton';
import HeaderWithProfile from '../../../components/RequestDetails/HeaderWithProfile';
import Buttons from '../../../components/RequestDetails/Buttons';
import { getServiceRequestsDetails } from '../../../services/providerAxios';
function RequestDetails() {
  const { id } = useParams();
  const [requestDetailsData, setRequestDetailsData] = React.useState({});
  const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNTQyMjc0LCJpYXQiOjE3MzA0ODQ2NzQsImp0aSI6IjNkMjc2N2I0ZjQyNTRlYTE5Zjc1MGMzNzg1ZTEyMjA5IiwidXNlcl9pZCI6NH0.8kUhv8iLpcb9n_4FACqhjlf5Qs4r0ibMLYqkB-gLgs4"
  useEffect(() => {
    // Fetch data from Django backend
    const fetchRequestDetails = async () => {
      try {
        const response = await getServiceRequestsDetails(accessToken,id) 
        setRequestDetailsData(response);
        console.log(response,"respppppppp");
        } catch (err) {
        console.error('Error fetching request details:', err);
      }
    };
 fetchRequestDetails();
  }, [id]);
 const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString(), 
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
  };
  const fromDateTime = formatDateTime(requestDetailsData.availability_from);
const toDateTime = formatDateTime(requestDetailsData.availability_to);
  return (
    <div className="bg-light-gray min-h-screen flex items-center justify-center p-4">
      <div className="md:max-w-screen-sm w-full bg-light-gray rounded-lg ">
         {/* Pass the id as a prop */}
        <HeaderWithProfile   id={requestDetailsData.booking_id}
        image={requestDetailsData.image}
        name={requestDetailsData.name}
        location={requestDetailsData.location}
         />
        <CardWithButton  title={requestDetailsData.subcategory}
        fromdate={fromDateTime.date}
        fromtime={fromDateTime.time}
        todate={toDateTime.date}
        totime={toDateTime.time}
        description={requestDetailsData.description}
         images={requestDetailsData.images}
         address={requestDetailsData.customer_address}
         />
        <Buttons id={id} />
      </div>
    </div>
  );
}
export default RequestDetails;