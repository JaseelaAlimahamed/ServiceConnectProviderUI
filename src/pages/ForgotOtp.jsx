import React from "react";
import OTPComponent from "../components/reUsableComponents/OtpComponent";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";

const OTPPage = () => {
  return (
    <div>
      <nav className="bg-gray-900 w-full h-[80px] flex items-center px-4">
        <Link to="/" className="text-white text-2xl">
          <CiCircleChevLeft className="h-[40px] w-[40px]" />
        </Link>
        <p className="text-[21px] text-white font-default font-semibold ml-2">
          FORGOT PASSWORD
        </p>
      </nav>
      {/* <p className="text-[14px] font-input relative top-[130px] left-[29%]">Code has been Send to <span>( +1 )</span> <span>***-***-*529</span> </p> */}

      <OTPComponent />
    </div>
  );
};

export default OTPPage;
