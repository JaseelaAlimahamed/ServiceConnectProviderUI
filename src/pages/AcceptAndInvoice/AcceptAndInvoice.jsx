import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppointmentCard from '../../components/BookingsDetails/AppointmentCard';
import CardWithButton from '../../components/RequestDetails/CardWithButton';
import HeaderWithProfile from '../../components/RequestDetails/HeaderWithProfile';
import AppointmentDetailsSheduling from '../../components/AcceptAndInvoice/AppointmentDetailsSheduling';
import { getServiceRequestsDetails } from '../../services/providerAxios';

function AcceptAndInvoice() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [requestDetailsData, setRequestDetailsData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  useEffect(() => {
    const fetchRequestDetails = async () => {
      setLoading(true);
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('No access token found');
        }

        const response = await getServiceRequestsDetails(accessToken, id);
        setRequestDetailsData(response);
      } catch (err) {
        console.error('Error fetching request details:', err);
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRequestDetails();
    }
  }, [id]);


  const fromDateTime = requestDetailsData ? formatDateTime(requestDetailsData.availability_from) : {};
  const toDateTime = requestDetailsData ? formatDateTime(requestDetailsData.availability_to) : {};

  const [bookingId, setBookingId] = useState('1Wa1aW');

  const handleConfirmClick = () => {
    console.log('Booking ID:', bookingId);
    navigate('/bookings');
  };

  const handleDone = (formData) => {
    setAppointmentData(formData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="container max-w-full p-4 bg-light-gray sm:p-6 lg:p-8">
        <div className="max-w-full mx-auto md:max-w-screen-full lg:max-w-screen-full">
        <HeaderWithProfile   
          id={requestDetailsData.booking_id}
          image={requestDetailsData.profile_image}
          name={requestDetailsData.customer_name}
          location={requestDetailsData.customer_place}
         />

          <div className={`grid gap-6 mt-6 mb-4 ${appointmentData ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            <div className="mt-4">
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
            </div>

            {appointmentData && (
              <div className="mt-8">
                <AppointmentCard appointmentData={appointmentData} />
              </div>
            )}
          </div>

          <div className="mt-6">
            <AppointmentDetailsSheduling onDone={handleDone} />
          </div>

          <div className='mt-6 sm:mt-8'>
            <div className='w-full p-2 text-lg font-semibold text-center text-white rounded-full bg-complete-btn sm:text-xl'>
              <button className="w-full" onClick={handleConfirmClick}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptAndInvoice;

