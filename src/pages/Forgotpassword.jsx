import React, { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/reUsableComponents/ButtonComponent";
import { FaArrowRight } from "react-icons/fa";
import ContactCard from "../components/reUsableComponents/ContactCard"; // Import reusable card

const users = [
  {
    name: "Akhil",
    email: "akhilgmail@gmail.com",
    phone: "480-894-5529",
    countryCode: "+1",
    id: "012250554",
  },
  // Additional users can be added here
];

const buttonConfig = {
  label: "Continue",
  type: "submit",
  btnWidth: "100%", // Full width button
  btnHeight: "50px", // Adjusted height for consistency
  icon: <FaArrowRight className="ml-2" />, // Arrow icon in the button
};

const ForgotPassword = () => {
  const [selectedContact, setSelectedContact] = useState(null); // State to track selected contact (phone or email)

  // Handle button submit
  const handleSubmit = () => {
    if (selectedContact) {
      if (selectedContact.type === "email") {
        console.log(
          `Email: ${selectedContact.email}, ID: ${selectedContact.id}`
        );
      } else if (selectedContact.type === "phone") {
        console.log(
          `Phone: ${selectedContact.countryCode} ${selectedContact.phone}, ID: ${selectedContact.id}`
        );
      }
    } else {
      console.log("No contact method selected");
    }
  };

  return (
    <div className="bg-light-gray min-h-screen flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 w-full h-[80px] flex items-center px-4">
        <Link to="/" className="text-white text-2xl">
          <CiCircleChevLeft className="h-[40px] w-[40px]" />
        </Link>
        <p className="text-[21px] text-white font-default font-semibold ml-2">
          FORGOT PASSWORD
        </p>
      </nav>

      {/* <div className="bg-sky-900 h-96 w-[450px]"> */}

      <div className="w-auto h-auto flex flex-col items-center text-[#545454] font-input text-[14px] mt-[200px]">
        <p>Select which contact details should we use to </p>
        <p>Reset Your Password</p>
      </div>

      {/* Cards for each user */}
      {users.map((user, index) => (
        <div
          key={index}
          className=" bg-light-gray md:shadow-lg pb-4 flex flex-col items-center w-[450px] rounded-lg p-5 "
        >
          {/* Reusable Email Card */}

          <ContactCard
            type="email"
            data={user}
            selected={
              selectedContact?.type === "email" &&
              selectedContact.id === user.id
            }
            onClick={() =>
              setSelectedContact({
                type: "email",
                email: user.email,
                id: user.id,
              })
            }
          />

          <div className=" flex flex-col">
            {/* Reusable Phone Card */}
            <ContactCard
              type="phone"
              data={user}
              selected={
                selectedContact?.type === "phone" &&
                selectedContact.id === user.id
              }
              onClick={() =>
                setSelectedContact({
                  type: "phone",
                  phone: user.phone,
                  countryCode: user.countryCode,
                  id: user.id,
                })
              }
            />

            {/* Button Component */}
            <ButtonComponent
              label={buttonConfig.label}
              type={buttonConfig.type}
              btnWidth={buttonConfig.btnWidth}
              btnHeight={buttonConfig.btnHeight}
              handleSubmit={handleSubmit} // Log the selected contact on button click
            />
          </div>
        </div>
      ))}
      {/* End of cards */}
    </div>
    // </div>
  );
};

export default ForgotPassword;
