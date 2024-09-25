import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import ServiceRequestList from '../pages/ServiceProviderPages/ServiceRequestList';
import BookingDetailsPage from '../pages/ServiceProviderPages/BookingDetailsPage';
import RequestDetailsPage from '../pages/ServiceProviderPages/RequestDetailsPage';
import HeaderWithprofile from '../components/reUsableComponents/ServiceRequestDetails/HeaderWithProfile';

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
        <Route path="/" element={<Navigate to="/ServiceRequestPage" />} />
        <Route path="/service-request" element={<ServiceRequestList/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />
<<<<<<< HEAD
        <Route path="/request-details/:id" element={<RequestDetailsPage/>} />
           {/* <Route path='/addprofile' element={<AddProfilePage/>}/> */}
{/* 
        <Route path="/Registered-Services" element={<RegisteredServices />} /> */}

        {/* <Route path="/" element={<Navigate to="/signin" />} />
  */}
=======
           <Route path='/addprofile' element={<AddProfilePage/>}/>
        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/location" element={<AllowLocationComponent/>} />
        <Route path="/signin" element={<ServiceProviderSignIn />} />
        <Route path="/otpPage" element={<OTPPage />} />
 
    
>>>>>>> 6f505fbac6139b7e19f0cb24505fdb898252a5b0
   
      </Routes>

    </div>
  )
}

export default ProviderRoutes