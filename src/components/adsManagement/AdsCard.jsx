import React from "react";

const AdsCard = ({ cardData, editAd }) => {
  const { adtype, title, adID, views, hits } = cardData;
  return (
    <div className="relative">
      <img
        src="/verified-icon.svg"
        alt="verifled"
        className="absolute top-[-10px] right-6"
      />
      <div className="flex rounded-xl overflow-hidden shadow-boxshadow-1">
        <div className="bg-secondary min-w-[130px] min-h-[130px]  "></div>

        <div className="p-4 w-full bg-primary ">
          <div className="flex mb-2">
            <span className="text-sm text-[#FF6B00] font-semibold mr-4 ">
              {adtype} Ad
            </span>
            <img
              className="inline-block cursor-pointer"
              src="/edit-icon.svg"
              alt="edit"
              onClick={() => editAd(adID)}
            />
          </div>

          <h2 className="text-darkbluetxt font-bold">{title}</h2>
          <h3 className="text-gray-500 font-semibold text-sm">{adID}</h3>

          <div className="flex justify-between sm:w-3/4 px-4 sm:px-0 m-auto mt-2">
            <span className="text-dark-gray font-bold text-sm">
              {views} Views
            </span>
            <span className="text-dark-gray font-bold text-sm">|</span>
            <span className="text-dark-gray font-bold text-sm">
              {hits} Hits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
