import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import ServiceRequestPage from '../pages/ServiceRequestPage'
import BookingDetailsPage from '../pages/BookingDetailsPage';
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        

      <Route path="/" element={<Navigate to="/signin" />} />
        {/* <Route path="/" element={<Navigate to="/ServiceRequestPage" />} /> */}
        <Route path="/service-request" element={<ServiceRequestPage/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />
           <Route path='/addprofile' element={<AddProfilePage/>}/>

      </Routes>
    </div>
  )
}

export default ProviderRoutes