import React from "react";

const TransactionCardComponent = ({ details }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {details.map((transaction, index) => (
        <div key={index} className="h-[111px] w-full md:w-auto bg-primary shadow-lg mb-4 rounded-xl">
          <div className="flex p-2">
            <div className="w-[94px] h-[92px] rounded-2xl bg-secondary overflow-hidden mr-3"></div>
            <div className="flex flex-col items-start space-y-2">
              <div className="text-[18px] font-semibold text-heading_blck">
                {transaction.invoice_type.replace('_', ' ').toUpperCase()}
              </div>
              <div className="font-input font-bold text-[13px] text-para_grey">
                Transaction ID: {transaction.transaction_id}
              </div>
              <button className="w-[66px] h-[22px] font-bold text-center font-Mulish text-[12px] text-primary bg-button-green hover:bg-[#145d58]">
                {transaction.payment_status.charAt(0).toUpperCase() + transaction.payment_status.slice(1)}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCardComponent;