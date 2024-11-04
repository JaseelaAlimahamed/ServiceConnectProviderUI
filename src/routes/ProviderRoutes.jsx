import React from 'react';
import { Navigate } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { protectRoute } from '../utils/Auth';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

// Import your pages here...
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
import LeadDetailPage from '../Pages/Services/LeadDetailPage';
import JobsPage from '../pages/Services/JobsPage';
import WorksPage from '../pages/WorksPage';
import ComplaintFormPage from '../Pages/Services/complaintForm/ComplaintFormPage';
import ComplaintList from '../pages/complaintsPage/Complaint';
import AcceptAndInvoice from '../Pages/AcceptAndInvoice/AcceptAndInvoice';
import DeclinePage from '../Pages/Services/DeclinePage';
import PaymentMethod from '../components/PaymentMethod/PaymentMethods';
import Ereceipt from '../pages/E-ReceiptPage/E-receipt';
import CheckoutSuccess from '../components/E-Receipt/CheckoutSuccess';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DashBoard from '../pages/Services/requests/DashBoard/Dashboard';
import FranchiseDetails from '../pages/franchiseeDetails/FranchiseDetails';
import FinancialPage from '../pages/Services/FinancialPage';
import TransactionsPage from '../pages/Transations/TransactionsPage';
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage';
import AdsManagementPage from '../Pages/managementPages/AdsManagementPage';
import EditAdsPage from '../components/adsManagement/EditAds';
import PostAd from '../pages/postAd/PostAd';
import TermsAndConditions from '../pages/ServiceProviderPages/TermsAndConditions';
import HelpCenterPage from '../pages/helpCenter/HelpCenterPage';
import NotificationsPage from '../pages/ServiceProviderPages/notificationsPage/NotificationsPage';
import NotificationSettings from '../pages/ServiceProviderPages/NotificationSettings/NotificationSettings';
import BoostServicePage from '../Pages/Services/BoostServicePage';
import AboutPage from '../pages/ServiceProviderPages/aboutPage/aboutPage';
import ContactPage from '../pages/Services/contactPage/contactPage';
import SecurityPage from '../pages/ServiceProviderPages/SecurityPage/SecurityPage';
import Error404Page from '../pages/errorPages/Error404Page';
import AccessDenied403Page from '../pages/errorPages/AccessDenied403Page';

const ProviderRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/sign-in" />,
      },
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
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      
   
     

      // Services routes
      {
        path: 'my-services',
        element: <RegisteredServices />,
        loader: protectRoute,
      },
      {
        path: 'edit-service/:id',
        element: <EditService />,
        loader: protectRoute,
      },
      {
        path: 'add-service',
        element: <RegisterServices />,
        loader: protectRoute,
      },

      // Service request and bookings
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
        path: 'payment-methods',
        element: <PaymentMethod />,
        loader: protectRoute,
      },
      {
        path: 'register-complaint/:id',
        element: <ComplaintFormPage />,
        loader: protectRoute,
      },
      {
        path: 'lead-details/:id',
        element: <LeadDetailPage />,
        loader: protectRoute,
      },
      {
        path: 'decline-form/:id',
        element: <DeclinePage />,
        loader: protectRoute,
      },
      {
        path: 'invoice/:id',
        element: <AcceptAndInvoice />,
        loader: protectRoute,
      },
      {
        path: 'advertisement',
        element: <AdsManagementPage />,
        loader: protectRoute,
      },
      {
        path: 'boost-service',
        element: <BoostServicePage />,
        loader: protectRoute,
      },
      {
        path: 'post-ad',
        element: <PostAd />,
        loader: protectRoute,
      },
      {
        path: 'edit-ads',
        element: <EditAdsPage />,
        loader: protectRoute,
      },
      {
        path: 'financial',
        element: <FinancialPage />,
        loader: protectRoute,
      },
      {
        path: 'reviews',
        element: <ServiceReviewsPage />,
        loader: protectRoute,
      },

      // Legal and support pages
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />,
        loader: protectRoute,
      },
      {
        path: 'complaints',
        element: <ComplaintList />,
        loader: protectRoute,
      },
      {
        path: 'franchise-details',
        element: <FranchiseDetails />,
        loader: protectRoute,
      },
      {
        path: 'notification',
        element: <NotificationsPage />,
        loader: protectRoute,
      },
      {
        path: 'about',
        element: <AboutPage />,
        loader: protectRoute,
      },
      {
        path: 'help-center',
        element: <ContactPage />,
        loader: protectRoute,
      },

      // Profile and dashboard
      {
        path: 'profile',
        element: <ProfilePage />,
        loader: protectRoute,
      },
      {
        path: 'notification-settings',
        element: <NotificationSettings />,
        loader: protectRoute,
      },
      {
        path: 'security',
        element: <SecurityPage />,
        loader: protectRoute,
      },

      // Receipts and transactions
      {
        path: 'e-receipt',
        element: <Ereceipt />,
        loader: protectRoute,
      },
      {
        path: 'checkout-success',
        element: <CheckoutSuccess />,
        loader: protectRoute,
      },
      {
        path: 'transactions',
        element: <TransactionsPage />,
        loader: protectRoute,
      },

      // Active services and works
      {
        path: 'active-services',
        element: <JobsPage />,
        loader: protectRoute,
      },
      {
        path: 'works',
        element: <WorksPage />,
        loader: protectRoute,
      },

      {
        path: 'help-centerFaq',
        element: <HelpCenterPage />,
        loader: protectRoute,
      },

      // Dashboard
      {
        path: 'dashboard',
        element: <DashBoard />,
        loader: protectRoute,
      },
    ],
  }, 
     // Sign-in related routes
  
  // Error pages outside of children array
  {
    path: '*',
    element: <Error404Page />,
  },
  {
    path: '403',
    element: <AccessDenied403Page />,
  },
]);

export default ProviderRoutes;
