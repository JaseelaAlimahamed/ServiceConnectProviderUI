import React from 'react';

const EstimatedPrice = ({ days, price }) => {
  return (
    <div className="w-full flex md:justify-center">
      <div className="md:flex">
        <h3 className="md:mr-4 md:mb-2 text-secondary font-medium">
          No of days: {days}
        </h3>
        <h3 className="text-secondary font-medium">
          Estimated Price: Rs {price}/-
        </h3>
      </div>
    </div>
  );
};

export default EstimatedPrice;
