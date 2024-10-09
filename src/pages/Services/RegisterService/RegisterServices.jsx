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
    navigate('/my-services');
  };

  return (
    
    <div className="flex bg-light-gray overflow-auto">
      
      <div className="flex flex-col items-center p-6 bg-light-gray rounded-md md:shadow-lg w-screen min-h-screen justify-center overflow-auto">
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
