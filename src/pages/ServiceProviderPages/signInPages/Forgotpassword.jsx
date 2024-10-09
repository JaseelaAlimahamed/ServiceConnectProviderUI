import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa"; // Importing FaArrowRight icon
import FormComponent from "../../../components/reUsableComponents/FormComponent"; 

const ForgotPassword = () => {
  const [option, setOption] = useState(''); // State for email or SMS selection
  const navigate = useNavigate();

  const handleContinue = (formData) => {
    if (option === "email") {
      console.log("OTP sent to email:", formData.email);
    } else if (option === "sms") {
      console.log("OTP sent to phone number:", formData.phone);
    }
    navigate('/otp-forgot-password');
  };

  // Define field configurations for FormComponent
  const fieldConfigs = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      label: "Email",
      required: option === "email", // Required only if email is selected
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter your Phone Number",
      label: "Phone Number",
      required: option === "sms", // Required only if SMS is selected
    },
  ];

  // Button configuration for the form
  const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "w-full",
    btnHeight: "30px",
    
  };

  // Input field configuration for width and height
  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "40px",
  };

  return (
    <div className=" bg-light-gray min-h-screen flex flex-col items-center justify-center flex-grow font-input text-[14px]">
      <div className="w-full max-w-md bg-light-gray rounded-lg md:shadow-lg mt-20 md:p-8">
        {/* Heading */}
        <div className="flex flex-col text-center font-bold leading-4 mb-6">
          <p style={{ color: "#545454" }}>
        
            Enter your registered email or phone number to
          </p>
          <p style={{ color: "#545454" }}>
          
            receive an OTP to reset your password
          </p>
        </div>

        {/* Email Option */}
        <div
          className={`bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer ${option === 'email' && 'border-2 border-dark-gray'}`}
          onClick={() => setOption("email")}
        >
          <div className="flex items-center gap-2">
           
            <p>Email</p>
          </div>
        </div>

        {/* SMS Option */}
        <div
          className={`bg-medium-gray text-white flex items-center justify-between p-4 mb-4 rounded-lg cursor-pointer ${option === 'sms' && 'border-2 border-dark-gray'}`}
          onClick={() => setOption("sms")}
        >
          <div className="flex items-center gap-2">
           
            <p>Phone Number</p>
          </div>
        </div>

        {/* FormComponent for Email or Phone */}
        {option && (
          <FormComponent
            fieldConfigs={fieldConfigs.filter((field) => field.required)} // Show only required field (email or phone)
            buttonConfig={buttonConfig}
            inputConfig={inputConfig}
            apiEndpoint={handleContinue}
            heading={null} // No heading for this form
          />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
