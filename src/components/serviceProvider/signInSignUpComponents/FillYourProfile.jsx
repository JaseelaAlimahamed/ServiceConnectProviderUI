import React from 'react';
import FormComponent from '../../reUsableComponents/FormComponent';
import envelope from '../../../assets/envelope.svg'

const buttonConfig = {
  label: 'Continue',
  type: 'submit',
  btnWidth: '100%',
  btnHeight: '50px',
};

const inputConfig = {
  inputWidth: '100%',
  inputHeight: '48px',
};

const profile = true;
const headingtext = "Fill Your Profile";

const getApiEndpoint = async (formData) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form Data:', formData);
    return { success: true, data: formData };
  } catch (error) {
    console.error('Error handling form data:', error);
    return { success: false, error: error.message };
  }
};

const fieldConfigs = [
  { name: 'fullname', label: 'Full Name', placeholder: 'Enter your full name', type: 'text', required: true,  },
  { name: 'address', label: 'Address', placeholder: 'Enter your address', type: 'text', required: true },
  { name: 'dob', label: 'Date of Birth', placeholder: 'Enter your date of birth', type: 'date', required: true },
  { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true , icon : envelope },
  { name: 'mobile', label: 'Mobile', placeholder: 'Enter your mobile number', type: 'tel', required: true },
  { name: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text', required: false },
  { name: 'housename', label: 'House Name', placeholder: 'Enter your house name', type: 'text', required: true },
  { name: 'landmark', label: 'Landmark', placeholder: 'Enter landmark', type: 'text', required: true },
  { name: 'pincode', label: 'Pincode', placeholder: 'Enter your pincode', type: 'text', required: true },
  { name: 'district', label: 'District', placeholder: 'Enter your district', type: 'text', required: true },
  { name: 'state', label: 'State', placeholder: 'Enter your state', type: 'text', required: true },
];

const FillYourProfile = () => {
  return (
    <div className='min-h-screen bg-dark-gray flex items-center justify-center'>
      <FormComponent
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        inputConfig={inputConfig}
        apiEndpoint={getApiEndpoint}
        heading={headingtext}
        profile={profile}
      />
    </div>
  );
};

export default FillYourProfile;
