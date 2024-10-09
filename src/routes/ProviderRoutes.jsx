import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { protectRoute } from '../utils/Auth';
import MainLayout from '../layouts/MainLayout';

import ServiceProviderSignIn from '../Pages/ServiceProviderPages/signInPages/ServiceProviderSignIn';
import OTPPage from '../Pages/ServiceProviderPages/signInPages/OTPPage';
import ForgotPassword from '../Pages/ServiceProviderPages/signInPages/Forgotpassword';
import AddProfilePage from '../Pages/ServiceProviderPages/signInPages/AddProfilePage';

import RegisteredServices from '../Pages/Services/RegisterService/RegisteredServices';
import EditService from '../Pages/Services/RegisterService/EditService';
import RegisterServices from '../Pages/Services/RegisterService/RegisterServices';

import ServiceRequestPage from '../pages/Services/requests/ServiceRequestPage';
import RequestDetails from '../Pages/Services/requests/RequestDetails';
import BookingsPage from '../Pages/Services/bookings/BookingsPage';
import BookingDetails from '../Pages/Services/bookings/BookingDetails';

import ComplaintFormPage from '../Pages/Services/complaintForm/ComplaintFormPage';
import LeadDetailPage from '../Pages/Services/LeadDetailPage';
import DeclinePage from '../Pages/Services/DeclinePage';
import AcceptAndInvoice from '../Pages/AcceptAndInvoice/AcceptAndInvoice'
import AdsManagementPage from '../Pages/managementPages/AdsManagementPage';

import BoostServicePage from '../pages/BoostServicePage'
import FinancialPage from '../pages/Services/FinancialPage';
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage';
import TermsAndConditions from '../pages/ServiceProviderPages/TermsAndConditions';

import OtpForgotPasswordPage from '../Pages/ServiceProviderPages/signInPages/OtpForgotPasswordPage';
import NotificationsPage from '../pages/ServiceProviderPages/notificationsPage/notificationsPage';
import EditAdsPage from '../components/adsManagement/EditAds';





const ProviderRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'sign-in',
        element: <ServiceProviderSignIn />,
      },
      {
        path: 'otp',
        element: <OTPPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {


        path: 'otp-forgot-password',
        element: <OtpForgotPasswordPage />,
      },
      {

        path: 'fill-your-profile',
        element: <AddProfilePage />,
      },
      {
        path: 'my-services',
        element: <RegisteredServices />, 
        loader: protectRoute,
      },
      {
        path: 'edit-service/:id',
        element: <EditService />, 
        loader: protectRoute
      },
      {
        path: 'add-service',
        element: <RegisterServices />, 
        loader: protectRoute, 
      },
      {
        path: 'service-request',
        element: <ServiceRequestPage />,
        loader: protectRoute, 
      },
      {
        path: 'request-details/:id',
        element: <RequestDetails />,
        loader: protectRoute, 
      },
      {
        path: 'bookings',
        element: <BookingsPage />,
        loader: protectRoute, 
      },
      {
        path: 'booking-detail/:id',
        element: <BookingDetails />,
        loader: protectRoute, 
      },
      {
        path: 'register-complaint/:id',
        element: <ComplaintFormPage/>,
        loader: protectRoute, 
      },
      {
        path: 'lead-details/:id',
        element: <LeadDetailPage/>,
        loader: protectRoute, 
      },{
        path: 'decline-form/:id',
        element: <DeclinePage/>,
        loader: protectRoute, 
      },{
        path: 'invoice/:id',
        element: <AcceptAndInvoice/>,
        loader: protectRoute, 
      },{
        path: 'advertisement',
        element: <AdsManagementPage/>,
        loader: protectRoute, 

      },
      {
        path: '/boostservice',
        element: <BoostServicePage />,
        loader: protectRoute, 
      },
      {
        path: '/financial',
        element: <FinancialPage />,
        loader: protectRoute, 
      },
      {
        path:'/reviews',
        element:<ServiceReviewsPage/>,
        loader: protectRoute,
      },
      {
        path:'/terms-and-conditions',
        element:<TermsAndConditions/>,
        loader: protectRoute,
      },
     

      {
        path: 'notification',
        element: <NotificationsPage/>,
        loader: protectRoute,
      },
      {
        path: 'boostservice',
        element: <BoostServicePage />,
        loader: protectRoute, 
      },
      {
        path: 'editads',
        element: <EditAdsPage/>,
        loader: protectRoute, 
      },

    ],
  },
]);

export default ProviderRoutes;
