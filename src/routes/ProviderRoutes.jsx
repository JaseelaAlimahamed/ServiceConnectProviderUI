import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { protectRoute } from '../utils/Auth';
import MainLayout from '../layouts/MainLayout';

import ServiceProviderSignIn from '../Pages/ServiceProviderPages/signInPages/ServiceProviderSignIn';
import OTPPage from '../Pages/ServiceProviderPages/signInPages/OTPPage';
import ForgotPassword from '../Pages/ServiceProviderPages/signInPages/Forgotpassword';
import AddProfilePage from '../Pages/ServiceProviderPages/signInPages/AddProfilePage';
import OtpForgotPasswordPage from '../Pages/ServiceProviderPages/signInPages/OtpForgotPasswordPage';

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

import ComplaintList from '../pages/complaintsPage/Complaint';
import FranchiseDetails from '../pages/franchiseeDetails/FranchiseDetails';


// import BoostServicePage from '../pages/BoostServicePage'
// import BoostServicePage from '../pages/BoostServicePage'
import FinancialPage from '../pages/Services/FinancialPage';
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage';
import TermsAndConditions from '../pages/ServiceProviderPages/TermsAndConditions';


import NotificationsPage from '../pages/ServiceProviderPages/notificationsPage/notificationsPage';

import AboutPage from '../pages/ServiceProviderPages/aboutPage/aboutPage';
import ContactPage from '../pages/Services/contactPage/contactPage';

import BoostServicePage from '../pages/BoostServicePage'
// import PaymentMethod from '../components/PaymentMethod/PaymentMethods'

// import NotificationsPage from '../pages/ServiceProviderPages/notificationsPage/notificationsPage';
import EditAdsPage from '../components/adsManagement/EditAds';
import NotificationSettings from '../pages/ServiceProviderPages/NotificationSettings/NotificationSettings';
import SecurityPage from '../pages/ServiceProviderPages/SecurityPage/SecurityPage';




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
        path: '/financial',
        element: <FinancialPage />,
        loader: protectRoute, 
      },
      {
        path:'reviews',
        element:<ServiceReviewsPage/>,
        loader: protectRoute,
      },
      {
        path:'terms-and-conditions',
        element:<TermsAndConditions/>,
        loader: protectRoute,
      },
      {
        path: 'complaints',
        element: <ComplaintList/>,
        loader: protectRoute, 
      },
  {
        path: 'franchise-details',
        element: <FranchiseDetails/>,
        loader: protectRoute, 
      },
  
      ,{
        path: 'notification',
        element: <NotificationsPage/>,
        loader: protectRoute,

      },{
        path: 'about',
        element: <AboutPage/>,
        loader: protectRoute,
      },{
        path: 'help-center',
        element: <ContactPage/>,
        loader: protectRoute,
      },
      {
        path: 'boost-service',
        element: <BoostServicePage />,
        loader: protectRoute, 

      },
       {
        path: 'edit-ads',
        element: <EditAdsPage/>,
        loader: protectRoute, 
      },
      {
        path: 'notification-settings',
        element: <NotificationSettings/>,
        loader: protectRoute,
      },
      {
        path: 'security',
        element: <SecurityPage/>,
        loader: protectRoute,
      }

    ],
  
  },
]);

export default ProviderRoutes;
