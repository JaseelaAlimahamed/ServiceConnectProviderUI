import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'


import ServiceRequestList from '../pages/ServiceProviderPages/ServiceRequestList';
import BookingDetailsPage from '../pages/ServiceProviderPages/BookingDetailsPage';
import RequestDetailsPage from '../pages/ServiceProviderPages/RequestDetailsPage';

import FinancialPage from '../pages/ServiceProviderPages/FinancialPage';




import ServiceRequestPage from '../pages/ServiceRequestPage'

import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import LeadDetails from '../pages/ServiceProviderPages/LeadDetails';

import RegisteredServices from '../pages/RegisteredServices'
import RequestDetails from '../pages/RequestDetails'
import BookingDetails from '../pages/BookingsDetails'
import NewPassword from '../pages/NewPassword'
import ForgotPassword from '../pages/ForgotPassword'
import OTPPage from '../pages/ForgotOtp'
import AllowLocationComponent from '../components/reUsableComponents/AllowLocationComponent'
import ServiceProviderSignIn from '../SignInOTPComponents/Pages/ServiceProviderSignIn'
import PaymentMethods from '../components/PaymentMethod/PaymentMethods';
import ServiceRequestPage from '../pages/ServiceRequestPage'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import ComplaintList from '../components/complaints/Complaint'
import BookingsPage from '../pages/bookings/BookingsPage';
import CardComponent from '../components/Bookings/CardComponent';
import AcceptAndInvoice from '../pages/AcceptAndInvoice/AcceptAndInvoice'
import ActiveServiceJob from '../components/ServiceProviderJobs/ActiveServiceJobs'
import TransactionComponent from '../components/serviceProviderTransactions/TransactionComponent'






function ProviderRoutes() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
         <Route path="/service-request" element={<ServiceRequestPage/>} />  
        <Route path="/booking-details" element={<BookingDetailsPage/>} /> 
          <Route path='/addprofile' element={<AddProfilePage/>}/> 
       <Route path="/Registered-Services" element={<RegisteredServices />} /> 
        <Route path="/signin" element={<ServiceProviderSignIn />} />
       <Route path="/otpPage" element={<OTPPage />} />
        <Route path="/service-request" element={<ServiceRequestPage />} />
        <Route path='/addprofile' element={<AddProfilePage />} />
        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/complaint" element={<ComplaintList />} />
        <Route path="/Booking" element={<CardComponent />} />
       <Route path="/req-details" element={<RequestDetails />} />
        <Route path="/bookingdetail/:id" element={<BookingDetails />} />
        <Route path="/booking-page" element={<BookingsPage />} />
        <Route path='/accept-invoice' element={<AcceptAndInvoice />} />
        <Route path="/ActiveServices" element={<ActiveServiceJob/>} />
        <Route path="/Transactions" element={<TransactionComponent/>} />


      {/* <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/" element={<Navigate to="/ServiceRequestPage" />} />
        <Route path="/service-request" element={<ServiceRequestList/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />

        <Route path="/request-details/:id" element={<RequestDetailsPage/>} />
        <Route path='/leaddetails' element={<LeadDetails/>}/>

        <Route path="/request-details/:id" element={<RequestDetailsPage/>} /> */}
        <Route path="/service-financial" element={<FinancialPage/>}></Route>

           {/* <Route path='/addprofile' element={<AddProfilePage/>}/> */}

        <Route path="/Registered-Services" element={<RegisteredServices />} /> 
       <Route path="/" element={<Navigate to="/signin" />} />
  
           <Route path='/addprofile' element={<AddProfilePage/>}/>
         
        <Route path="/location" element={<AllowLocationComponent/>} />
        <Route path="/otpPage" element={<OTPPage />} />
 
    

   

      </Routes>

    </div>
  )
}

export default ProviderRoutes