import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import ServiceRequestList from '../pages/ServiceProviderPages/ServiceRequestList';
import BookingDetailsPage from '../pages/ServiceProviderPages/BookingDetailsPage';
import RequestDetailsPage from '../pages/ServiceProviderPages/RequestDetailsPage';
import FinancialPage from '../pages/ServiceProviderPages/FinancialPage';
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage';
import TermsAndConditions from '../pages/ServiceProviderPages/TermsAndConditions';


function ProviderRoutes() {
  return (
    <div>
      <Routes>

      {/* <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/" element={<Navigate to="/ServiceRequestPage" />} />
        <Route path="/service-request" element={<ServiceRequestList/>} /> 
        <Route path="/booking-details" element={<BookingDetailsPage/>} />
        <Route path="/request-details/:id" element={<RequestDetailsPage/>} /> */}
        <Route path="/termsand-conditions" element={<TermsAndConditions/>} />
        <Route path="/service-financial" element={<FinancialPage/>}></Route>
        <Route path="/Service-reviews" element={<ServiceReviewsPage />} />
           {/* <Route path='/addprofile' element={<AddProfilePage/>}/> */}
{/* 
        <Route path="/Registered-Services" element={<RegisteredServices />} /> */}

        {/* <Route path="/" element={<Navigate to="/signin" />} />
  */}
   
      </Routes>
    </div>
  )
}

export default ProviderRoutes