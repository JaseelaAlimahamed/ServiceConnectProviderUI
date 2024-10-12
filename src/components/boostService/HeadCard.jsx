import React from 'react';

const HeadCard = ({ title, imgSrc }) => {
  return (
    <div className="flex items-center">
      <img src={imgSrc} alt="boost service" />
      <h1 className="text-2xl font-medium ml-4 text-secondary">
        {title}
      </h1>
    </div>
  );
};

export default HeadCard;
