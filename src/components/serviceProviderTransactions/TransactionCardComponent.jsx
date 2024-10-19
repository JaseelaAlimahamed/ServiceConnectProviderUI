import React from "react";

const TransactionCardComponent = ({ details }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {details.map((filteredDetails, index) => (
        <div
          key={index}
          className="h-auto w-full bg-primary shadow-lg mb-4 rounded-xl"
        >
          <div className="flex p-2">
            {filteredDetails.img ? (
              <div className="w-[94px] h-[92px] overflow-hidden mr-3 rounded-2xl">
                <img
                  src={filteredDetails.img}
                  className="w-full h-full object-cover"
                  alt="transaction"
                />
              </div>
            ) : (
              <div className="w-[94px] h-[92px] rounded-2xl bg-secondary overflow-hidden mr-3"></div>
            )}
            <div className="flex-col items-start space-y-2">
              <div className="text-[18px] font-semibold text-heading_blck">
                {filteredDetails.title}
              </div>
              <div className="font-input font-bold text-[13px] text-para_grey">
                {filteredDetails.job}
              </div>
              <button className="w-[66px] h-[22px] font-bold text-center font-Mulish text-[12px] text-primary bg-button-green hover:bg-[#145d58]">
                {filteredDetails.status}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCardComponent;
