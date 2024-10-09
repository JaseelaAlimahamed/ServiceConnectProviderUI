import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { BiEnvelope } from 'react-icons/bi';

import FormComponent from '../../reUsableComponents/FormComponent';
import ReusableModal from '../../reUsableComponents/ReModal';
import ModalComponent from '../../reUsableComponents/ModalComponent';

import envelope from '../../../assets/envolope.svg';
import image from '../../../assets/image.png';


const buttonConfig = {
  label: 'Continue',
  type: 'submit',
  btnWidth: 'w-full',
  btnHeight: 'h-12',
};

const inputConfig = {
  inputWidth: '100%',
  inputHeight: '48px',
};

const fieldConfigs = [
  { name: 'fullname', label: 'Full Name', placeholder: 'Enter your full name', type: 'text', required: true },
  { name: 'address', label: 'Address', placeholder: 'Enter your address', type: 'text', required: true },
  { name: 'dob', label: 'Date of Birth', placeholder: 'Enter your date of birth', type: 'date', required: true },
  { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true, icon: <BiEnvelope />},
  { name: 'mobile', label: 'Mobile', placeholder: 'Enter your mobile number', type: 'tel', required: true },
  { name: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text', required: false },
  { name: 'housename', label: 'House Name', placeholder: 'Enter your house name', type: 'text', required: true },
  { name: 'landmark', label: 'Landmark', placeholder: 'Enter landmark', type: 'text', required: true },
  { name: 'pincode', label: 'Pincode', placeholder: 'Enter your pincode', type: 'text', required: true },
  { name: 'district', label: 'District', placeholder: 'Enter your district', type: 'text', required: true },
  { name: 'state', label: 'State', placeholder: 'Enter your state', type: 'text', required: true },
];

const FillYourProfile = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate(); 
 const profile =true ;
  const getApiEndpoint = async (formData) => {
    try {
      console.log('Form Data:', formData);
      
      setIsLoading(true); 

      setTimeout(() => {
        setIsLoading(false); 
        setIsModalOpen(true); // Open the ModalComponent

        setTimeout(() => {
          navigate("/my-services"); 
        }, 5000); 
      }, 2000); 

      return { success: true, data: formData };
    } catch (error) {
      console.error('Error handling form data:', error);
      return { success: false, error: error.message };
    }
  };

  return (
    <div className="min-h-screen bg-dark-gray flex items-center justify-center">
      <FormComponent
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        inputConfig={inputConfig}
        apiEndpoint={getApiEndpoint}  
        profile={profile}
      />

      {/* ModalComponent wrapping ReusableModal */}
      {isModalOpen && (
        <ModalComponent 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} // Close modal on button click
          width="400px" // Set desired width
          height="h-fit" // Set desired height
        >
          <ReusableModal
            isLoading={isLoading}
            imageSrc={image}
            heading="Congratulations!"
            contentLines={["Your account is ready to use."]}
            redirectMessage="You will be redirected to the Home Page in a few seconds."
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default FillYourProfile;
