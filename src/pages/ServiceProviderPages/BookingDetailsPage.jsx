import React from 'react'
import Navbar from '../../components/reUsableComponents/ServiceRequestList/Navbar'
import Button from '../../components/reUsableComponents/ServiceRequestList/Button'
import { RiH1 } from 'react-icons/ri'
const BookingDetailsPage = () => {
  return (
    <>
     <Navbar 
        title="Bookings Details" 
        search={false}
       

      />
      <div>BookingDetailsPage</div>
      <Button
      label={<h1>Complete</h1>}
      color={'bg-completebtn'}
      />
      <Button
      label={<h1>Register Complaint</h1>}
      color={'bg-declainbtn'}
      />
      <Button
      label={<h1>Declain</h1>}
      color={'bg-declainbtn'}
      />
    </>
    
  )
}

export default BookingDetailsPage