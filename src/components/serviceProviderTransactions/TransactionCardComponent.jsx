import React from "react";

const TransactionCardComponent = ({ details }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {details.map((filteredDetails, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between h-full"
        >
          <div className="flex items-center space-x-4">
            {/* Placeholder for image or avatar */}
            <div className="w-[60px] h-[60px] rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-primary">
              {filteredDetails.sender_full_name[0]}
            </div>

            <div className="flex-1 space-y-2">
              {/* Transaction Info */}
              <div className="text-lg font-semibold text-gray-800">
                {filteredDetails.transaction_id}
              </div>
              <div className="text-sm text-gray-600">
                Sender: {filteredDetails.sender_full_name}
              </div>
              <div className="text-sm text-gray-600">
                Invoice Type: {filteredDetails.invoice_type}
              </div>
              <div className="text-sm text-gray-600">
                Payment Status: {filteredDetails.payment_status}
              </div>
              <div className="text-sm font-semibold text-gray-800">
                Amount Paid: <span className="text-green-600">${filteredDetails.amount_paid}</span>
              </div>
            </div>
          </div>

          {/* Status Button */}
          <div className="mt-4">
            <button className="w-full py-2 px-4 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              {filteredDetails.payment_status}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCardComponent;
