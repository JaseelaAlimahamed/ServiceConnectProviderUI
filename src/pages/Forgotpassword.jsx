import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiCircleChevLeft } from "react-icons/ci";
import FormComponent from "../components/reUsableComponents/FormComponent";

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
    btnWidth: "100%",
    btnHeight: "50px",
    icon: <FaArrowRight className="ml-2" />,
  };

  const apiEndpoint = async (values) => {
    console.log("Form submitted with values:", values);
    // Perform your API call or form submission logic here
  };

  return (
    <div className="bg-light-gray min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-[#1D1F2A] w-full h-[80px] flex items-center px-4">
        <Link to="/" className="text-white text-2xl">
          <CiCircleChevLeft className="h-[40px] w-[40px]" />
        </Link>
        <p className="text-[21px] text-white font-default font-semibold ml-2">
          FORGOT PASSWORD
        </p>
      </nav>

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
