import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

// import ServiceRequestPage from '../pages/ServiceRequestPage'
// import BookingDetailsPage from '../pages/BookingDetailsPage';
// import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'

import RegisteredServices from '../pages/RegisteredServices'


import AllowLocationComponent from '../components/reUsableComponents/AllowLocationComponent'

import OTPPage from '../SignInOTPComponents/Pages/OTPPage';

import ServiceRequestPage from '../pages/ServiceRequestPage'
import BookingDetailsPage from '../pages/BookingDetailsPage';
// import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'

import RegisterService from '../pages/RegisterServices';
import EditService from '../pages/EditService';



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/ServiceRequestPage" />} /> */}
        <Route path="/service-request" element={<ServiceRequestPage/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />
           {/* <Route path='/addprofile' element={<AddProfilePage/>}/> */}
        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/location" element={<AllowLocationComponent/>} />
        {/* <Route path="/signin" element={<ServiceProviderSignIn />} /> */}
        <Route path="/otpPage" element={<OTPPage />} />

        <Route path="/RegisterService" element={<RegisterService />} />
        <Route path="/EditService" element={<EditService />} />


 
    
   
      </Routes>

    </div>
  )
}

export default ProviderRoutes