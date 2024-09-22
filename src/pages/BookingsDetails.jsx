import React from 'react'
import CardWithButton from '../components/RequestDetails/CardWithButton'
import HeaderWithprofile from '../components/RequestDetails/HeaderWithprofile'
import BookingsDetailsButtons from '../components/BookingsDetails/Button'
import AppointmentCard from '../components/BookingsDetails/AppointmentCard'

function BookingDetails() {
  return (
    <div className="bg-light-gray min-h-screen">
      <div className="md:max-w-screen-sm mx-auto bg-light-gray ">
      <HeaderWithprofile/>
      <CardWithButton/>
      <AppointmentCard/>
      <BookingsDetailsButtons/>
    </div>
    </div>
  )
}

export default BookingDetails