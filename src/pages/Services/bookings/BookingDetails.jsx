import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderWithprofile from '../../../components/RequestDetails/HeaderWithProfile';

import CardWithButton from '../../../components/RequestDetails/CardWithButton';

import BookingsDetailsButtons from '../../../components/BookingsDetails/Button';
import AppointmentCard from '../../../components/BookingsDetails/AppointmentCard';

function BookingDetails() {
  const { id } = useParams();

  return (
    <div className="bg-light-gray min-h-screen">
      {/* Main container */}
      <div className="mx-auto bg-light-gray p-4 sm:p-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {/* Responsive grid: stacked on mobile, 2 columns on medium screens (md) and larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left column (Header and AppointmentCard) */}
          <div className="space-y-6">
            {/* Header with Profile */}
            <HeaderWithprofile id={id} />
            
            {/* Appointment Card */}
            <AppointmentCard id={id} />
          </div>
          
          {/* Right column (Card with Button and Booking Details Buttons) */}
          <div className="space-y-6 lg:mt-10 sm:mt-2">
            {/* Card with Button */}
            <CardWithButton id={id} />

            {/* Booking Details Buttons */}
            
          </div>
        </div>

      </div>
      <BookingsDetailsButtons id={id} />

    </div>
  );
}

export default BookingDetails;
