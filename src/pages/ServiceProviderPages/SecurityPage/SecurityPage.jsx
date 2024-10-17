import React, { useState } from 'react';
import Switch from '../../../components/serviceProvider/NotificationSwitch/Switch';
import RoundedButton from '../../../components/serviceProvider/NotificationSwitch/RoundedButton';

const SecurityPage = () => {
  const [settings, setSettings] = useState({
    RememberMe: false,
    BiometricId: true,
    FaceId: true,
  
   
  });

  const toggleSetting = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <div className="min-h-screen bg-primary text-heading_blck p-6">
     
      
        <Switch
          label="Remember Me"
          isActive={settings.RememberMe}
          onToggle={() => toggleSetting('RememberMe')}
        />
        <Switch
          label="Biometric Id"
          isActive={settings.BiometricId}
          onToggle={() => toggleSetting('BiometricId')}
        />
        <Switch
          label="Face Id"
          isActive={settings.FaceId}
          onToggle={() => toggleSetting('FaceId')}
        />
        <div className="flex justify-between items-center py-4 cursor-pointer">
  <span className="text-lg font-semibold text-gray-900">Google Authenticator</span>
  <svg
    className="w-6 h-6 text-secondary"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</div>
<div className="flex flex-col items-center mt-49 space-y-5">
      <RoundedButton 
        text="Change PIN" 
        bgColor="bg-gray-100" 
        textColor="text-gray-800" 
        onClick={() => console.log('Change PIN clicked')} 
      />
      <RoundedButton 
        text="Change Password" 
        bgColor="bg-black" 
        textColor="text-white" 
        onClick={() => console.log('Change Password clicked')} 
      />
    </div>
    </div>
  );
};

export default SecurityPage;
