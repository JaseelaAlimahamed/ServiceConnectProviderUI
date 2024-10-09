import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ComplaintPage from '../pages/ServiceProviderPages/ComplaintFormPage';
import AdsManagementPage from '../pages/managementPages/AdsManagementPage';
import RegisteredServices from '../pages/RegisteredServices';
import RequestDetails from '../pages/RequestDetails';
import BookingDetails from '../pages/BookingsDetails';
import NewPassword from '../pages/NewPassword';
import ForgotPassword from '../pages/ForgotPassword';
import AllowLocationComponent from '../components/reUsableComponents/AllowLocationComponent';
import ServiceProviderSignIn from '../SignInOTPComponents/Pages/ServiceProviderSignIn';
import OTPPage from '../SignInOTPComponents/Pages/OTPPage';
import BookingDetailsPage from '../pages/BookingDetailsPage';
import ProfilePage from '../pages/ProfilePage';
import DeclineForm from '../components/serviceProvider/complaintDecline/DeclineForm';
import ComplaintForm from '../components/serviceProvider/complaintDecline/ComplaintForm';
import BookingsPage from '../pages/bookings/BookingsPage';
import AcceptAndInvoice from '../pages/AcceptAndInvoice/AcceptAndInvoice';
import RightSideBarPage from '../pages/rightSideBar/rightSideBarPage';
import FinancialPage from '../pages/ServiceProviderPages/FinancialPage';
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage';
import EditAdsPage from '../components/adsManagement/EditAds';


function ProviderRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/adsmanagement" element={<AdsManagementPage />} />
     
        
        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/location" element={<AllowLocationComponent />} />
        <Route path="/req-details" element={<RequestDetails />} />
        <Route path="/bookingdetail/:id" element={<BookingDetails />} />
        <Route path="/booking-page" element={<BookingsPage />} />
        <Route path='/accept-invoice' element={<AcceptAndInvoice />} />
        <Route path='/side-bar' element={<RightSideBarPage />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signin" element={<ServiceProviderSignIn />} />
        <Route path="/otpPage" element={<OTPPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/declineform" element={<DeclineForm />} />
        <Route path="/complaintform" element={<ComplaintForm />} />
        <Route path="/service-financial" element={<FinancialPage />} />
        <Route path="/Service-reviews" element={<ServiceReviewsPage />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/editads" element={<EditAdsPage />} />

      </Routes>
    </div>
  );
}

export default ProviderRoutes;
