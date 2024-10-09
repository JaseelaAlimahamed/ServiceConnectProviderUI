import React, { useState, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import NavbarHead from "../../../components/serviceProvider/layout/NavbarHead";
import FormComponent from "../../../components/reUsableComponents/FormComponent";
import ReusableModal from "../../../components/reUsableComponents/ReModal";
import image from "../assets/Group.png"; // Use appropriate path for the image

const NewPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Manage form submission state
  const [isLoading, setIsLoading] = useState(true); // Loading state for modal

  const fieldConfigs = [
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
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
    setIsSubmitted(true); // Set submission state
    // Simulate a delay for the modal loading effect
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay
  };

  useEffect(() => {
    // Redirect to a new page after a few seconds once the modal is loaded
    if (!isLoading && isSubmitted) {
      const redirectTimer = setTimeout(() => {
        window.location.href = "http://localhost:5173/newpassword"; // Change URL to your actual redirect target
      }, 3000); // 3 seconds delay for redirection

      // Clean up timer if the component is unmounted before the timeout is reached
      return () => clearTimeout(redirectTimer);
    }
  }, [isLoading, isSubmitted]);

  return (
    <div className="bg-light-gray min-h-screen flex flex-col">
      {/* Navigation Bar */}
      

      {/* Check if form is submitted */}
      {isSubmitted ? (
        <ReusableModal
          isLoading={isLoading}
          imageSrc={image}
          heading="Congratulations"
          contentLines={[
            "Your account is ready to use.",
            "You will be redirected to the Home Page in a few",
          ]}
          redirectMessage="Seconds."
        />
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow">
          {/* Form Container */}
          <div className="w-full max-w-md bg-light-gray rounded-lg md:shadow-lg mt-20 md:p-8">
            {/* Heading */}
            <h2 className="font-default font-semibold text-gray-800 text-left mb-4 ps-6 md:ps-0 text-[16px] md:text-[19px]">
              Create Your New Password
            </h2>

            {/* Form Component */}
            <FormComponent
              fieldConfigs={fieldConfigs}
              buttonConfig={buttonConfig}
              inputConfig={inputConfig}
              apiEndpoint={apiEndpoint}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPassword;
