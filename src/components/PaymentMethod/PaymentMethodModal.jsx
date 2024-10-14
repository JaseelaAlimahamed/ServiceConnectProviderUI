import React, { useState, useEffect } from "react";
import paymentlogo from "../../assets/paymentlogo.png"

const ReusableModal = ({ isLoading, imageSrc, heading, contentLines, redirectMessage }) => {
  return (
    <div className="h-screen w-100 bg-dark-gray bg-opacity-90 flex justify-center items-center">
      {isLoading ? (
        // Loading spinner
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-white"></div>
        </div>
      ) : (
        // Modal content
        <div className="w-[360px] h-[460px] bg-white rounded-3xl flex flex-col items-center">
          <div>
          <img src={paymentlogo} alt="paymentlogo" />
          </div>

          {/* heading */}
          <p className="mt-[20px] font-default font-semibold text-[24px] text-[#202244] ">
            Congratulations
          </p>

          {/* Dynamic content lines */}
          <p className="text-[13px] font-input font-bold text-[#545454]">
            Your Payment is Successfully Purchase a
          </p>
          <p className="text-[13px] font-input font-bold text-[#545454]" >
            New Course
          </p>

          {/* Link TEXT */}

          <a className="font-default font-semibold text-[16px] underline text-[#167F71]" href="www.google.com">Watch the Course</a>

          <button className="h-[60px] w-[206px] bg-[#1D1F2A] rounded-full shadow-md mt-2 flex items-center justify-between" >
            <p className="font-default text-[18px] font-semibold text-white ms-8 ">
                E-Receipt
            </p>
       
            <svg className="m-1 h-[49px] w-[49px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.47-13.53a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>
          </button>


          
        </div>
      )}
    </div>
  );
};

export default ReusableModal;
