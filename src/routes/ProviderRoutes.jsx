import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NewPassword from '../pages/NewPassword'
import ForgotPassword from '../pages/ForgotPassword'
import OTPPage from '../pages/ForgotOtp'


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
        <Route path="/signin" element={<ServiceProviderSignIn />} />
        <Route path="/newpassword" element={ <NewPassword/>} />
        <Route path="/forgotpassword" element={ <ForgotPassword/>} />
        <Route path="/otp" element={ <OTPPage/>} />
        <Route path="/service-request" element={<ServiceRequestPage/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />
        <Route path='/addprofile' element={<AddProfilePage/>}/>
        <Route path="/Registered-Services" element={<RegisteredServices />} />
 
        <Route path="/Booking" element={ <CardComponent/>} />

      </Routes>

    </div>
  )
}

export default ProviderRoutes