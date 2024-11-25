import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HeaderWithProfile from '../../../components/RequestDetails/HeaderWithProfile';
import CardWithButton from '../../../components/RequestDetails/CardWithButton';
import BookingsDetailsButtons from '../../../components/BookingsDetails/Button';
import AppointmentCard from '../../../components/BookingsDetails/AppointmentCard';
import { serviceDetails } from '../../../booking/bookingsapi';

const BookingDetails = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetching service details from the API
        const response = await serviceDetails(id);
        console.log(response);
        
          setServiceData(response);
        
      } catch (err) {
        setError('An error occurred while fetching service details.' );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchServiceDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">{error}</div>;
  }

  return (
    <div className="bg-light-gray min-h-screen">
      {/* Main container */}
      <div className="mx-auto bg-light-gray p-4 sm:p-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {/* Responsive grid: stacked on mobile, 2 columns on medium screens (md) and larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column (Header and AppointmentCard) */}
          <div className="space-y-6">
            {/* Header with Profile */}
            <HeaderWithProfile id={id} data={serviceData} />
            
            {/* Appointment Card */}
            <AppointmentCard id={id} data={serviceData} />
          </div>
          
          {/* Right column (Card with Button and Booking Details Buttons) */}
          <div className="space-y-6 lg:mt-10 sm:mt-2">
            {/* Card with Button */}
            <CardWithButton id={id} data={serviceData} />

            {/* Booking Details Buttons */}
          </div>
        </div>
      </div>

      <BookingsDetailsButtons id={serviceData.booking_id}  />
    </div>
  );
};

export default BookingDetails;
