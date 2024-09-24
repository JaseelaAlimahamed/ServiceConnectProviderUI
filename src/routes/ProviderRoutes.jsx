import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import ServiceRequestPage from '../pages/ServiceRequestPage'
import BookingDetailsPage from '../pages/BookingDetailsPage';
import RequestDetailsPage from '../pages/RequestDetailsPage';
import HeaderWithprofile from '../components/reUsableComponents/RequestDetails/HeaderWithProfile';


function ProviderRoutes() {
  return (
    <div>
      <Routes>
        
      <Route path="/" element={<Navigate to="/signin" />} />
        {/* <Route path="/" element={<Navigate to="/ServiceRequestPage" />} /> */}
        <Route path="/service-request" element={<ServiceRequestPage/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />
        <Route path="/request-details/:id" element={<RequestDetailsPage/>} />
      </Routes>
    </div>
  )
}

export default ProviderRoutes