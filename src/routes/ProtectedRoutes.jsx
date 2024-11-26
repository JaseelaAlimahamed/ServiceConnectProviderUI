import React from 'react'
import { Navigate } from 'react-router-dom'
import RegisteredServices from '../Pages/Services/RegisterService/RegisteredServices'
import EditService from '../Pages/Services/RegisterService/EditService'
import RegisterService from '../Pages/Services/RegisterService/RegisterServices'
import ServiceRequestPage from '../pages/Services/requests/ServiceRequestPage'
import RequestDetails from '../Pages/Services/requests/RequestDetails'
import BookingsPage from '../Pages/Services/bookings/BookingsPage'
import BookingDetails from '../Pages/Services/bookings/BookingDetails'
import PaymentMethods from '../components/PaymentMethod/PaymentMethods'
import ComplaintFormPage from '../Pages/Services/complaintForm/ComplaintFormPage'
import LeadDetailPage from '../Pages/Services/LeadDetailPage'
import DeclinePage from '../Pages/Services/DeclinePage'
import AcceptAndInvoice from '../Pages/AcceptAndInvoice/AcceptAndInvoice'
import AdsManagementPage from '../Pages/managementPages/AdsManagementPage'
import BoostServicePage from '../Pages/Services/BoostServicePage'
import PostAd from '../pages/postAd/PostAd'
import EditAdsPage from '../components/adsManagement/EditAds'
import FinancialPage from '../pages/Services/FinancialPage'
import ServiceReviewsPage from '../pages/ServiceProviderPages/ServiceReviewsPage'
import TermsAndConditions from '../pages/ServiceProviderPages/TermsAndConditions'
import ComplaintList from '../pages/complaintsPage/Complaint'
import FranchiseDetails from '../pages/franchiseeDetails/FranchiseDetails'
import NotificationsPage from '../pages/ServiceProviderPages/notificationsPage/NotificationsPage'
import AboutPage from '../pages/ServiceProviderPages/aboutPage/aboutPage'
import ContactPage from '../pages/Services/contactPage/contactPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import NotificationSettings from '../pages/ServiceProviderPages/NotificationSettings/NotificationSettings'
import SecurityPage from '../pages/ServiceProviderPages/SecurityPage/SecurityPage'
import CheckoutSuccess from '../components/E-Receipt/CheckoutSuccess'
import TransactionsPage from '../pages/Transations/TransactionsPage'
import JobsPage from '../pages/Services/JobsPage'
import WorksPage from '../pages/WorksPage'
import HelpCenterPage from '../pages/helpCenter/HelpCenterPage'
import DashBoard from '../pages/Services/requests/DashBoard/Dashboard'

export const ProtectedRoutes = [     // Services routes
        {
          path: '',
          element: <Navigate to="dashboard" />,
        },
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
          element: <RegisterService />,
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
          element: <PaymentMethods />,
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
        // {
        //   path: 'e-receipt',
        //   element: <Ereceipt />,
        // },
        {
          path: 'checkout-success',
          element: <CheckoutSuccess />,
        },
        {
          path: 'transactions',
          element: <TransactionsPage/>,
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
]