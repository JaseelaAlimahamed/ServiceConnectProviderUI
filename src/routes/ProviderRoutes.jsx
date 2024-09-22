import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import RegisteredServices from '../pages/RegisteredServices'
import RequestDetails from '../pages/RequestDetails'
import BookingDetails from '../pages/BookingsDetails'

import CardComponent from '../components/reUsableComponents/CardComponent'

import AllowLocationComponent from '../components/reUsableComponents/AllowLocationComponent'


import ServiceProviderSignIn from '../SignInOTPComponents/Pages/ServiceProviderSignIn'
import OTPPage from '../SignInOTPComponents/Pages/OTPPage';

import ServiceRequestPage from '../pages/ServiceRequestPage'
import BookingDetailsPage from '../pages/BookingDetailsPage';
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'





function ProviderRoutes() {
  return (
    <div>
      <Routes>


        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/location" element={<AllowLocationComponent/>} />
        <Route path="/signin" element={<ServiceProviderSignIn />} />
        <Route path="/otpPage" element={<OTPPage />} />
 
        <Route path="/service-request" element={<ServiceRequestPage/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />
        <Route path='/addprofile' element={<AddProfilePage/>}/>


        <Route path="/Registered-Services" element={<RegisteredServices />} />
 
        <Route path="/Booking" element={ <CardComponent/>} />
          
        
        <Route path="/req-details" element={<RequestDetails />} />
        <Route path="/book-details" element={<BookingDetails />} />
        
        
        
        <Route path="/req-details" element={<RequestDetails />} />
        <Route path="/book-details" element={<BookingDetails />} />
      </Routes>

    </div>
  )
}

export default ProviderRoutes