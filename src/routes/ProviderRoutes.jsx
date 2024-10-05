import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'




import ServiceRequestList from '../pages/ServiceProviderPages/ServiceRequestList';
import BookingDetailsPage from '../pages/ServiceProviderPages/BookingDetailsPage';
import RequestDetailsPage from '../pages/ServiceProviderPages/RequestDetailsPage';

import ServiceRequestPage from '../pages/ServiceRequestPage'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import LeadDetails from '../pages/ServiceProviderPages/LeadDetails';


import RegisteredServices from '../pages/RegisteredServices'
import RequestDetails from '../pages/RequestDetails'
import BookingDetails from '../pages/BookingsDetails'

import NewPassword from '../pages/NewPassword'
import ForgotPassword from '../pages/ForgotPassword'




import AllowLocationComponent from '../components/reUsableComponents/AllowLocationComponent'


import ServiceProviderSignIn from '../SignInOTPComponents/Pages/ServiceProviderSignIn'

import OTPPage from '../SignInOTPComponents/Pages/OTPPage';
import BookingDetailsPage from '../pages/BookingDetailsPage';
import ComplaintPage from '../pages/Services/ComplaintPage';
import ProfilePage from '../pages/ProfilePage';
import DeclineForm from '../components/serviceProvider/complaintDecline/DeclineForm';
import ComplaintForm from '../components/serviceProvider/complaintDecline/ComplaintForm';
import ServiceRequestPage from '../pages/ServiceRequestPage'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'

import BookingsPage from '../pages/bookings/BookingsPage';
import AcceptAndInvoice from '../pages/AcceptAndInvoice/AcceptAndInvoice'
import RightSideBarPage from '../pages/rightSideBar/rightSideBarPage'
import NotificationsPage from '../pages/notificationsPage/notificationsPage';


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




      <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/service-request" element={<ServiceRequestPage/>} />

        <Route path="/booking-details" element={<BookingDetailsPage/>} />
        <Route path='/addprofile' element={<AddProfilePage/>}/>

        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/location" element={<AllowLocationComponent/>} />
        <Route path="/signin" element={<ServiceProviderSignIn />} />
        <Route path="/otpPage" element={<OTPPage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/declineform" element={<DeclineForm />} />
        <Route path="/complaintform" element={<ComplaintForm />} />

       <Route path="/req-details" element={<RequestDetails />} />
        <Route path="/bookingdetail/:id" element={<BookingDetails />} />
        <Route path="/booking-page" element={<BookingsPage />} />
        <Route path='/accept-invoice' element={<AcceptAndInvoice />} />

        <Route path="/service-financial" element={<FinancialPage/>}></Route>
        <Route path='/notification' element={<NotificationsPage />} />





   
   



      </Routes>

    </div>
  )
}

export default ProviderRoutes