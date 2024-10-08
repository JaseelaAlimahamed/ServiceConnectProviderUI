
import React from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationCard = ({ notification }) => {
  return (
    <div className="flex items-center bg-primary shadow-md rounded-[18px] border-2 h-[100px] p-6 mb-4 ml-6 mr-6 overflow-hidden max-w-full">
      <div className="mr-4 flex items-center text-secondary">
        <FaBell size={24} />
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-darkbluetxt mr-8 font-default text-xl truncate">
          {notification.title}
        </h3>
        <p className="text-profilefont font-semibold mr-8 text-[18px] truncate">
          {notification.message}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard; 

