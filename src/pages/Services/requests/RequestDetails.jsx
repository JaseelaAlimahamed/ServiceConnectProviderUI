import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardWithButton from '../../../components/RequestDetails/CardWithButton';
import HeaderWithProfile from '../../../components/RequestDetails/HeaderWithProfile';
import Buttons from '../../../components/RequestDetails/Buttons';
import { getServiceRequestsDetails } from '../../../services/providerAxios';

const RequestDetails = () => {
  const { id } = useParams();
  const [requestDetailsData, setRequestDetailsData] = useState({});

  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('No access token found');
        }

        const response = await getServiceRequestsDetails(accessToken, id);
        setRequestDetailsData(response);
        console.log(response, 'Fetched Request Details');
      } catch (err) {
        console.error('Error fetching request details:', err);
      }
    };

    fetchRequestDetails();
  }, [id]);

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return { date: '', time: '' }; // Ensure safe handling of undefined values
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  const fromDateTime = formatDateTime(requestDetailsData.availability_from);
  const toDateTime = formatDateTime(requestDetailsData.availability_to);

  return (
    <div className="bg-light-gray min-h-screen flex items-center justify-center p-4">
      <div className="md:max-w-screen-sm w-full bg-white rounded-lg shadow-md">
        <HeaderWithProfile
          id={requestDetailsData.booking_id}
          image={requestDetailsData.profile_image}
          name={requestDetailsData.customer_name}
          location={requestDetailsData.customer_place}
        />
        <CardWithButton
          title={requestDetailsData.subcategory}
          fromdate={fromDateTime.date}
          fromtime={fromDateTime.time}
          todate={toDateTime.date}
          totime={toDateTime.time}
          description={requestDetailsData.description}
          images={requestDetailsData.images}
          address={requestDetailsData.customer_address}
          landmark={requestDetailsData.customer_landmark}
          place={requestDetailsData.customer_place}
          pincode={requestDetailsData.customer_pincode}
        />
        <Buttons id={id} />
      </div>
    </div>
  );
};

export default RequestDetails;
