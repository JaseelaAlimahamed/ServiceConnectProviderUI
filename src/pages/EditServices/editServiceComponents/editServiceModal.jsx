import React from 'react';

const PaymentModal = ({ isLoading, leadBalance, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-[#1D1F2A] bg-opacity-40 flex justify-center items-center z-50 backdrop-blur-sm">
      {isLoading ? (
        // Loading spinner
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-white"></div>
        </div>
      ) : (
        // Modal Content
        <div className="relative w-[360px] h-[460px] bg-white rounded-3xl flex flex-col items-center">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Heading */}
          <p className="text-[24px] font-semibold text-[#000000] mt-[30px]">
            ADD LEAD BALANCE
          </p>

          {/* Lead Balance */}
          <p className="text-[40px] font-default font-semibold text-[#000000] mt-[50px]">
            {leadBalance}
          </p>

          {/* Dynamic content lines */}
          <p className="text-[13px] font-input font-bold text-[#000000]">
            Leads will be added to your account
          </p>
          <p className="text-[40px] font-input font-bold text-[#000000] mt-[30px]">
            ₹ 300
          </p>

          {/* Confirm & Pay Button */}
          <button
            className="h-[44px] w-[242px] bg-[#1D1F2A] rounded-md shadow-md flex items-center justify-center mt-[30px]"
            onClick={onConfirm}
          >
            <p className="font-default text-[18px] font-semibold text-white">
              CONFIRM & PAY
            </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;