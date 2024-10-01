import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'


import ServiceRequestPage from '../pages/ServiceRequestPage'

import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'

import RegisteredServices from '../pages/RegisteredServices'
import RequestDetails from '../pages/RequestDetails'
import BookingDetails from '../pages/BookingsDetails'

import NewPassword from '../pages/NewPassword'
import ForgotPassword from '../pages/ForgotPassword'
import OTPPage from '../pages/ForgotOtp'



import AllowLocationComponent from '../components/reUsableComponents/AllowLocationComponent'


import ServiceProviderSignIn from '../SignInOTPComponents/Pages/ServiceProviderSignIn'

import BookingsPage from '../pages/bookings/BookingsPage';
import CardComponent from '../components/Bookings/CardComponent';
import AcceptAndInvoice from '../pages/AcceptAndInvoice/AcceptAndInvoice'
import RightSideBarPage from '../pages/rightSideBar/rightSideBarPage'






function ProviderRoutes() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        {/* <Route path="/" element={<Navigate to="/ServiceRequestPage" />} /> */}
        <Route path="/service-request" element={<ServiceRequestPage />} />
        <Route path='/addprofile' element={<AddProfilePage />} />
        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/location" element={<AllowLocationComponent />} />
        <Route path="/signin" element={<ServiceProviderSignIn />} />
        <Route path="/otpPage" element={<OTPPage />} />

        <Route path="/Registered-Services" element={<RegisteredServices />} />

        <Route path="/Booking" element={<CardComponent />} />

        <Route path="/req-details" element={<RequestDetails />} />
        <Route path="/book-details" element={<BookingDetails />} />

        <Route path="/booking-page" element={<BookingsPage />} />
        <Route path='/accept-invoice' element={<AcceptAndInvoice />} />
        <Route path='/side-bar' element={<RightSideBarPage/>} />

      </Routes>

    </div>
  )
}

export default ProviderRoutes