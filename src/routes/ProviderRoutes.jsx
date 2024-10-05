import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'



import ComplaintPage from '../pages/ServiceProviderPages/ComplaintFormPage';
import AdsManagementPage from '../pages/managementPages/AdsManagementPage';


import ServiceRequestList from '../pages/ServiceProviderPages/ServiceRequestList';
import BookingDetailsPage from '../pages/ServiceProviderPages/BookingDetailsPage';
import RequestDetailsPage from '../pages/ServiceProviderPages/RequestDetailsPage';

import FinancialPage from '../pages/ServiceProviderPages/FinancialPage';
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage';
import TermsAndConditions from '../pages/ServiceProviderPages/TermsAndConditions';

import FinancialPage from '../pages/ServiceProviderPages/FinancialPage';
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage';
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



function ProviderRoutes() {
  return (
    <div>
      <Routes>

 
   

        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/adsmanagement" element={<AdsManagementPage />}
        <Route path="/service-request" element={<ServiceRequestPage />} />
        <Route path='/addprofile' element={<AddProfilePage />} />
        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/location" element={<AllowLocationComponent />} />

        <Route path="/Registered-Services" element={<RegisteredServices />} />

        <Route path="/Booking" element={<CardComponent />} />

        <Route path="/req-details" element={<RequestDetails />} />
        <Route path="/bookingdetail/:id" element={<BookingDetails />} />

        <Route path="/booking-page" element={<BookingsPage />} />
        <Route path='/accept-invoice' element={<AcceptAndInvoice />} />
        <Route path='/side-bar' element={<RightSideBarPage/>} />


        <Route path='/RegisterService' element={<RegisterService />} />
        <Route path='/EditService' element={<EditService />} />
     




      <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/service-request" element={<ServiceRequestPage/>} />


        <Route path="/booking-details" element={<BookingDetailsPage/>} />

        <Route path="/request-details/:id" element={<RequestDetailsPage/>} /> */}
        <Route path="/termsand-conditions" element={<TermsAndConditions/>} />
        <Route path="/service-financial" element={<FinancialPage/>}></Route>
        <Route path="/Service-reviews" element={<ServiceReviewsPage />} />
           {/* <Route path='/addprofile' element={<AddProfilePage/>}/> */}
{/* 
        <Route path="/Registered-Services" element={<RegisteredServices />} /> */}

        <Route path='/addprofile' element={<AddProfilePage/>}/>
         
        <Route path="/request-details/:id" element={<RequestDetailsPage/>} /> */}
        {/* <Route path="/service-financial" element={<FinancialPage/>}></Route> */}
        <Route path="/Service-reviews" element={<ServiceReviewsPage />} />
  

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






   
   



      </Routes>

    </div>
  )
}

export default ProviderRoutes