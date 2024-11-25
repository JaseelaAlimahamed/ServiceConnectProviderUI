import React from 'react'
import BookingCardComponent from '../../../components/Bookings/BookingCardComponent'
import { useSelector } from 'react-redux';

function BookingsPage() {
  const accessToken = useSelector((state) => state.auth); // Correctly select the token
  console.log(accessToken);
  
  return (
    <div className="bg-white min-h-screen">
      <div className="md:max-w-screen-full mx-auto  bg-white ">
      {/* {accessToken} */}
      <BookingCardComponent/>
    </div>
    </div>
  )
}

export default BookingsPage