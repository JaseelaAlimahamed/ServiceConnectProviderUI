import React from 'react'
import Button from '../components/reUsableComponents/RegisteredServices/Button'
import { RiH1 } from 'react-icons/ri'
const BookingDetailsPage = () => {
  return (
    <>
    
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
