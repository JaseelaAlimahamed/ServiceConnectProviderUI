import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import FormComponent from '../../../components/reUsableComponents/FormComponent';
import ImageIconsComponent from '../../../components/reUsableComponents/ImageIconsComponents';
import Icon from '../../../assets/ICON.png';
import envolope from '../../../assets/envolope.svg';
import passlock from '../../../assets/password.svg';

// Function to generate a random OTP
const generateOTP = () => {
  const otp = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
  return otp;
};

// Function to validate if the input is an email or mobile number
const isEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
const isMobileNumber = (input) => /^[0-9]{10}$/.test(input); 

const ServiceProviderSignIn = () => {
  const navigate = useNavigate();  
  const [email, setEmail] = useState('');

  // Function to handle email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const fieldConfigs = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email Address',
      label: 'Email',
      required: true,
      onChange: handleEmail,  
      icon: envolope
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      required: true,
      icon: passlock
    },
  ];

  const inputConfig = {
    inputWidth: '100%',
    inputHeight: '48px',
  };

  

  const buttonConfig = {
    label: 'Sign In',
    type: 'submit',
    btnWidth: 'w-full',  
    btnHeight: 'h-12',  
  };
  

  // Function to call sign-in API endpoint
  const handleSignIn = async (values) => {
    try {
      const { email } = values;
      let otp = '';
      if (isEmail(email)) {
        otp = generateOTP();
        console.log(`OTP for email ${email}: ${otp}`);
      } else if (isMobileNumber(email)) {
        otp = generateOTP();
        console.log(`OTP for mobile number ${email}: ${otp}`);
      } else {
        console.log('Invalid email or mobile number');
        return;
      }
      console.log('Sign in success:', values);
      navigate('/otpPage', {state: { otp }});
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const iconsConfig = [
    {
      src: Icon,
      width: 50, 
      height: 50,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-light-gray p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-2xl border border-gray-300">

        {/* Centering Image and Heading at the top */}
        <div className="flex flex-col items-center justify-center mb-6">
          <ImageIconsComponent iconsConfig={iconsConfig} />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mt-4">Service Connect</h2>
        </div>

        {/* Form Component with Icons */}
        <FormComponent
          fieldConfigs={fieldConfigs}
          buttonConfig={buttonConfig}
          inputConfig={inputConfig}
          apiEndpoint={handleSignIn}
          title="Let's Sign In!"
          paragraph="Login to your account to continue your courses"
          rememberMe={true}
          forgotPassword={true}
        />
      </div>
    </div>
  );
};

export default ServiceProviderSignIn;

