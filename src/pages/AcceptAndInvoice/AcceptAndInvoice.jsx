import React, { useState } from 'react';
import AppointmentCard from '../../components/BookingsDetails/AppointmentCard';
import CardWithButton from '../../components/RequestDetails/CardWithButton';
import HeaderWithProfile from '../../components/RequestDetails/HeaderWithprofile';
import AppointmentDetailsSheduling from '../../components/AcceptAndInvoice/AppointmentDetailsSheduling';
import { useNavigate } from 'react-router-dom';

function AcceptAndInvoice() {
  const navigate = useNavigate();
  
  const [bookingId, setBookingId] = useState('1Wa1aW'); 
  const handleConfirmClick = () => {
    console.log('Booking ID:', bookingId);
    navigate(`/bookingdetail/${bookingId}`);
    
  };

  return (
    <div className="bg-white flex min-h-screen">
      <div className="md:max-w-screen-sm mx-auto bg-light-gray">
        <HeaderWithProfile bookingId={bookingId} />
        <CardWithButton />
        <AppointmentDetailsSheduling />
        <div className='mt-4 mb-4'>
          <AppointmentCard />
        </div>
        <div className='mt-6 sm:mt-8 mr-4 ml-4 mb-4'>
          <div className='bg-accept-btn rounded-full p-4 text-center text-xl font-semibold text-white'>
            <button className="w-full" onClick={handleConfirmClick}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptAndInvoice;
