
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import FormComponent from '../../components/reUsableComponents/FormComponent';
import ImageIconsComponent from '../../components/reUsableComponents/ImageIconsComponents';
import icon from '../../assets/ICON.png';

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
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      required: true,
    },
  ];

  const inputConfig={};

  // Button configuration
  const buttonConfig = {
    label: 'Sign In',
    type: 'submit',
    btnWidth: 'width-full',  
    btnHeight: 'h-12',  
  };

  // Function to call sign-in API endpoint
  const handleSignIn = async (values) => {
    try {
      // Determine if email or mobile number
      const { email, password } = values;
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

      // Placeholder URL
      // const response = await axios.post('/api/signin', values);
      console.log('Sign in success:', values);
    
      navigate('/otpPage');  
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const iconsConfig = [
    {
      src: icon,
      width: 50, 
      height: 50,
    
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Responsive Form Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-2xl">
        {/* Flex container for icon and heading */}
        <div className="flex items-center justify-center mb-4">
          {/* Icons Component */}
          <div className="mr-2">
            <ImageIconsComponent iconsConfig={iconsConfig} />
          </div>
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Service Connect</h2>
        </div>

        {/* Form Component */}
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
