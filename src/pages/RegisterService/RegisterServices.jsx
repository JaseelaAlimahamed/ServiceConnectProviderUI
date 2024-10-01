// RegisterService.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormikForm from './registerServiceComponents/FormikForm';

const RegisterService = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('Form Data:', values);
    navigate('/Registered-Services');
  };

  return (
    <div className="flex bg-[#D9D9DB] overflow-auto">
      <div className="flex flex-col items-center p-6 bg-[#D9D9DB] rounded-md md:shadow-lg w-screen min-h-screen justify-center overflow-auto">
        <FormikForm
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
