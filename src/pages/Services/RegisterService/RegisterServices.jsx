import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddServiceForm from '../../../components/serviceProvider/registerServiceComponents/AddServiceForm';
import NavbarHead from '../../../components/serviceProvider/layout/NavbarHead';
import { serviceRegister } from '../../../services/Sercices';

const RegisterService = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await serviceRegister({ ...values, mediaFiles });
      console.log("Service registered successfully:", response);

      // Navigate to a success page or reset the form
      navigate('/'); 
    } catch (error) {
      console.error("Error during service registration:", error.message);
      // Optionally display an error message to the user
    }
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
