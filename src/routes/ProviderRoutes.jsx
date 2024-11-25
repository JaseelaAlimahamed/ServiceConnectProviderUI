import React from 'react';
import { Navigate } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from '../utils/Auth';

// Directly imported components for routing
import ServiceProviderSignIn from '../Pages/ServiceProviderPages/signInPages/ServiceProviderSignIn';
import OTPPage from '../Pages/ServiceProviderPages/signInPages/OTPPage';
import ForgotPassword from '../Pages/ServiceProviderPages/signInPages/Forgotpassword';
import AddProfilePage from '../Pages/ServiceProviderPages/signInPages/AddProfilePage';
import OtpForgotPasswordPage from '../Pages/ServiceProviderPages/signInPages/OtpForgotPasswordPage';

// Services-related components
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

// Transaction, payment, and receipt components
import AcceptAndInvoice from '../Pages/AcceptAndInvoice/AcceptAndInvoice';
import DeclinePage from '../Pages/Services/DeclinePage';
import PaymentMethod from '../components/PaymentMethod/PaymentMethods';
import Ereceipt from '../pages/E-ReceiptPage/E-receipt';
import CheckoutSuccess from '../components/E-Receipt/CheckoutSuccess';
import TransactionsPage from '../pages/Transations/TransactionsPage';

// Profile-related components
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DashBoard from '../pages/Services/requests/DashBoard/Dashboard';
import FranchiseDetails from '../pages/franchiseeDetails/FranchiseDetails';
import FinancialPage from '../pages/Services/FinancialPage';
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

// Error pages
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
    element: <ProtectedRoute><MainLayout /></ProtectedRoute>, // Wrapping layout with ProtectedRoute
    children: [
      // Services routes
      {
        path: 'my-services',
        element: <RegisteredServices />,
      },
      {
        path: 'edit-service/:id',
        element: <EditService />,
      },
      {
        path: 'add-service',
        element: <RegisterServices />,
      },

      // Service request and bookings
      {
        path: 'service-request',
        element: <ServiceRequestPage />,
      },
      {
        path: 'request-details/:id',
        element: <RequestDetails />,
      },
      {
        path: 'bookings',
        element: <BookingsPage />,
      },
      {
        path: 'booking-detail/:id',
        element: <BookingDetails />,
      },
      {
        path: 'payment-methods',
        element: <PaymentMethod />,
      },
      {
        path: 'register-complaint/:id',
        element: <ComplaintFormPage />,
      },
      {
        path: 'lead-details/:id',
        element: <LeadDetailPage />,
      },
      {
        path: 'decline-form/:id',
        element: <DeclinePage />,
      },
      {
        path: 'invoice/:id',
        element: <AcceptAndInvoice />,
      },
      {
        path: 'advertisement',
        element: <AdsManagementPage />,
      },
      {
        path: 'boost-service',
        element: <BoostServicePage />,
      },
      {
        path: 'post-ad',
        element: <PostAd />,
      },
      {
        path: 'edit-ads',
        element: <EditAdsPage />,
      },
      {
        path: 'financial',
        element: <FinancialPage />,
      },
      {
        path: 'reviews',
        element: <ServiceReviewsPage />,
      },

      // Legal and support pages
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: 'complaints',
        element: <ComplaintList />,
      },
      {
        path: 'franchise-details',
        element: <FranchiseDetails />,
      },
      {
        path: 'notification',
        element: <NotificationsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'help-center',
        element: <ContactPage />,
      },

      // Profile and dashboard
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'notification-settings',
        element: <NotificationSettings />,
      },
      {
        path: 'security',
        element: <SecurityPage />,
      },

      // Receipts and transactions
      {
        path: 'e-receipt',
        element: <Ereceipt />,
      },
      {
        path: 'checkout-success',
        element: <CheckoutSuccess />,
      },
      {
        path: 'transactions',
        element: <TransactionsPage />,
      },

      // Active services and works
      {
        path: 'active-services',
        element: <JobsPage />,
      },
      {
        path: 'works',
        element: <WorksPage />,
      },

      {
        path: 'help-centerFaq',
        element: <HelpCenterPage />,
      },

      // Dashboard
      {
        path: 'dashboard',
        element: <DashBoard />,
      },
    ],
  },
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
