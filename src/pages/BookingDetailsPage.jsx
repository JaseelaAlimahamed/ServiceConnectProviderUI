import React from 'react'
import Buttons from '../components/RequestDetails/Buttons'
import { RiH1 } from 'react-icons/ri'
const BookingDetailsPage = () => {
  return (
    <>
    
      <div>BookingDetailsPage</div>
      <Buttons
      label={<h1>Complete</h1>}
      color={'bg-completebtn'}
      />
      <Buttons
      label={<h1>Register Complaint</h1>}
      color={'bg-declainbtn'}
      />
      <Buttons
      label={<h1>Declain</h1>}
      color={'bg-declainbtn'}
      />
    </>
    
  )
}

export default BookingDetailsPage
