import React from 'react';
import { useParams } from 'react-router-dom';
import CardWithButton from '../../components/RequestDetails/CardWithButton';
import HeaderWithprofile from '../../components/RequestDetails/HeaderWithprofile';
import BookingsDetailsButtons from '../../components/BookingsDetails/Button';
import AppointmentCard from '../../components/BookingsDetails/AppointmentCard';

function BookingDetails() {
  const { id} = useParams();
  

  return (
    <div className="bg-white min-h-screen">
      <div className="md:max-w-screen-sm mx-auto bg-light-gray ">
        <HeaderWithprofile id={id}/>
        <CardWithButton id={id} />
        <AppointmentCard id={id} />
        <BookingsDetailsButtons id={id} />
      </div>
    </div>
  );
}

export default BookingDetails;
