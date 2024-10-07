import React, { useState } from 'react';
import AppointmentCard from '../../components/BookingsDetails/AppointmentCard';
import CardWithButton from '../../components/RequestDetails/CardWithButton';
import HeaderWithProfile from '../../components/RequestDetails/HeaderWithProfile';
import AppointmentDetailsSheduling from '../../components/AcceptAndInvoice/AppointmentDetailsSheduling';
import { useNavigate } from 'react-router-dom';

function AcceptAndInvoice() {
  const navigate = useNavigate();

  const [bookingId, setBookingId] = useState('1Wa1aW');
  const handleConfirmClick = () => {
    console.log('Booking ID:', bookingId);
    setBookingId('1Wa1aW');
    navigate(`/bookings`);
  };

  return (
    <div className="bg-white flex justify-center min-h-screen">
      <div className="container  max-w-full bg-light-gray p-4 sm:p-6 lg:p-8">
        {/* Responsive padding for the container */}
        <div className="max-w-full md:max-w-screen-full lg:max-w-screen-full mx-auto">


          <HeaderWithProfile bookingId={bookingId} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-4">
            <div className="mt-4">
              <CardWithButton />
            </div>

            {/* Grid for desktop (2 columns) and mobile (1 column) */}
            <div className="mt-8">
              <AppointmentCard />
            </div>


          </div>
          <div className="mt-6">
            <AppointmentDetailsSheduling />
          </div>

          <div className='mt-6 sm:mt-8'>
            <div className='bg-complete-btn w-full   rounded-full p-2 text-center text-lg sm:text-xl font-semibold text-white'>
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
