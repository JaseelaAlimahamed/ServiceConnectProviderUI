
import React from 'react';
import NotificationCard from './notificationCard';
import { notificationsDataHandler } from './notificationsDataHandler';

const NotificationSection = () => {
  const groupedNotifications = notificationsDataHandler();

  return (
    <div className="w-full p-4 md:p-8 bg-light-gray">
      {groupedNotifications.today.length > 0 && (
        <div className="mb-8">
          <h2 className="font-bold mt-2 mb-4 ml-6 text-lg text-darkbluetxt">Today</h2>
          {groupedNotifications.today.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      )}
      {groupedNotifications.yesterday.length > 0 && (
        <div className="mb-8">
          <h2 className="font-bold mt-2 mb-4 ml-6 text-lg text-darkbluetxt">Yesterday</h2>
          {groupedNotifications.yesterday.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      )}
      {groupedNotifications.older.map(({ date, notifications }) => (
        <div key={date} className="mb-8">
          <h2 className="font-bold mt-2 mb-4 ml-6 text-lg text-darkbluetxt">{date}</h2>
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default NotificationSection;

