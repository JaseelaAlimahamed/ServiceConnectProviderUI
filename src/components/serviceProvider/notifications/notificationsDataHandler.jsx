export const notificationsDataHandler = () => {
    const notifications = [
      { id: 1, title: 'Today’s Special Offers.!', message: 'You have made a Coure Payment.', date: '2024-10-04' },
      { id: 2, title: 'Account Setup Successful.!', message: 'Your Account has been Created.', date: '2022-11-20' },
      { id: 3, title: 'New category Course.!', message: 'New the 3D Design Course is Available', date: '2024-10-04' },
      { id: 4, title: 'Account Alert', message: 'A login attempt from a new device.', date: '2024-10-04' },
      { id: 5, title: 'Credit Card Connected.!', message: 'Your Credit Card has been Linked.!', date: '2024-10-03' },
    ];
  
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0];
  
    const groupedNotifications = {
      today: [],
      yesterday: [],
      older: [],
    };
  
    notifications.forEach((notification) => {
      if (notification.date === today) {
        groupedNotifications.today.push(notification);
      } else if (notification.date === yesterday) {
        groupedNotifications.yesterday.push(notification);
      } else {
        const existingDateGroup = groupedNotifications.older.find(group => group.date === notification.date);
        if (existingDateGroup) {
          existingDateGroup.notifications.push(notification);
        } else {
          groupedNotifications.older.push({ date: notification.date, notifications: [notification] });
        }
      }
    });
  
    return groupedNotifications;
  };
  