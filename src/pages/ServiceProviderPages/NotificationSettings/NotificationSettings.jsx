import React, { useState } from 'react';
import Switch from '../../../components/serviceProvider/NotificationSwitch/Switch';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    specialOffers: false,
    sound: true,
    vibrate: true,
    generalNotification: false,
    promoDiscount: true,
    paymentOptions: false,
    appUpdate: false,
    newServiceAvailable: true,
    newTipsAvailable: true,
  });

  const toggleSetting = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <div className="min-h-screen bg-primary text-heading_blck p-6">
     
      
        <Switch
          label="Special Offers"
          isActive={settings.specialOffers}
          onToggle={() => toggleSetting('specialOffers')}
        />
        <Switch
          label="Sound"
          isActive={settings.sound}
          onToggle={() => toggleSetting('sound')}
        />
        <Switch
          label="Vibrate"
          isActive={settings.vibrate}
          onToggle={() => toggleSetting('vibrate')}
        />
        <Switch
          label="General Notification"
          isActive={settings.generalNotification}
          onToggle={() => toggleSetting('generalNotification')}
        />
        <Switch
          label="Promo & Discount"
          isActive={settings.promoDiscount}
          onToggle={() => toggleSetting('promoDiscount')}
        />
        <Switch
          label="Payment Options"
          isActive={settings.paymentOptions}
          onToggle={() => toggleSetting('paymentOptions')}
        />
        <Switch
          label="App Update"
          isActive={settings.appUpdate}
          onToggle={() => toggleSetting('appUpdate')}
        />
        <Switch
          label="New Service Available"
          isActive={settings.newServiceAvailable}
          onToggle={() => toggleSetting('newServiceAvailable')}
        />
        <Switch
          label="New Tips Available"
          isActive={settings.newTipsAvailable}
          onToggle={() => toggleSetting('newTipsAvailable')}
        />
  
    </div>
  );
};

export default NotificationSettings;
