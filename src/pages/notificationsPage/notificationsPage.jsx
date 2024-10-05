import React from 'react';
import NotificationSection from '../../components/notifications/notificationSection';
import Navbar from '../../components/notifications/navbar';

const NotificationsPage = () => {
  return (
    <div className="bg-light-gray min-h-screen">
      <Navbar />
      <NotificationSection />
    </div>
  );
};

export default NotificationsPage;