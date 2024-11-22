// RegisterService.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddServiceForm from '../../../components/serviceProvider/registerServiceComponents/AddServiceForm';
import NavbarHead from '../../../components/serviceProvider/layout/NavbarHead';

const RegisterService = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('Form Data:', values);
    navigate('/payment-methods');
  };

  return (
    
    <div className="flex ml-0 bg-light-gray max-w-screen overflow-x-hidden">
    <div className="flex flex-col items-center px-4 md:px-24 bg-light-gray rounded-md md:shadow-lg w-full min-h-screen justify-center overflow-auto">
      <AddServiceForm
        mediaFiles={mediaFiles}
        setMediaFiles={setMediaFiles}
        onSubmit={handleSubmit}
      />
    </div>
  </div>
  
    
  );
};

export default RegisterService;
;
