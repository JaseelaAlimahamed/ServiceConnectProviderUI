import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiCircleChevLeft } from "react-icons/ci";
import FormComponent from "../../../components/reUsableComponents/FormComponent";
import NavbarHead from '../../../components/serviceProvider/layout/NavbarHead';

const Forgotpassword = () => {
  const fieldConfigs = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      required: true,
    },
  ];

  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "52px",
  };

  const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "w-full",
    btnHeight: "30px",
    icon: <FaArrowRight className="ml-2" />,
  };

  const apiEndpoint = async (values) => {
    console.log("Form submitted with values:", values);
    // Perform your API call or form submission logic here
  };

  return (
    <div className="bg-light-gray min-h-screen flex flex-col">
     

      {/* Form Container */}
      <div className="flex flex-col items-center justify-center flex-grow font-input text-[14px]">
        <div className="w-full max-w-md bg-light-gray rounded-lg md:shadow-lg mt-20 md:p-8">
          {/* Heading */}
          <div className="flex flex-col text-center font-bold leading-4">
            <p style={{ color: "#545454" }}>
              Enter your registered email or phone number to
            </p>
            <p style={{ color: "#545454" }}>
              receive a OTP to reset your password
            </p>
          </div>

          {/* Form Component */}
          <FormComponent
            fieldConfigs={fieldConfigs}
            buttonConfig={buttonConfig}
            inputConfig={inputConfig}
            apiEndpoint={apiEndpoint}
          />
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
