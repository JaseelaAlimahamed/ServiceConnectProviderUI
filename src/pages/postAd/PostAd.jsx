import React, { useState } from 'react';
import BannerImage from '../../assets/banner-ads.png';
import CardImage from '../../assets/card-ads.png';

function PostAd() {
  const [selectedAd, setSelectedAd] = useState('');

  // Function to handle ad selection
  const handleAdClick = (adName, price) => {
    setSelectedAd(adName); // Set the selected ad
    console.log(`Ad selected: ${adName}, Price: Rs ${price}`);
  };

  return (
    <div>
      <div className='flex flex-col items-center bg-light-gray min-h-screen'>
        <p className='text-[16px] font-heading mr-[182px] mt-14 font-semibold md:mr-0 md:text-[18px] lg:text-[20px]'>
          Choose Your Ad type
        </p>

        {/* Banner Ad */}
        <div
          className={`h-auto w-auto relative mt-[30px] shadow-md md:mt-10 lg:w-[500px] lg:h-[180px] cursor-pointer ${
            selectedAd === 'Banner Ads' ? 'ring-4 ring-primary' : ''
          }`}
          onClick={() => handleAdClick('Banner Ads', 350)}
        >
          <img
            className='w-[346px] h-[120px] rounded-xl md:w-[400px] md:h-[140px] lg:w-full lg:h-full'
            src={BannerImage}
            alt='bannerimage'
          />
          <p className='text-[15px] top-[50px] left-[40px] absolute text-primary md:top-[70px] md:left-[50px] lg:text-[18px]'>
            Banner Ads
          </p>
          <p className='text-[15px] top-[95px] left-[220px] absolute text-primary md:top-[115px] md:left-[260px] lg:text-[18px]'>
            Rs: <span>350</span> / month
          </p>
        </div>

        {/* Card Ad */}
        <div
          className={`h-auto w-auto relative mt-[30px] shadow-md md:mt-10 lg:w-[250px] lg:h-[180px] cursor-pointer ${
            selectedAd === 'Card Ads' ? 'ring-4 ring-primary' : ''
          }`}
          onClick={() => handleAdClick('Card Ads', 150)}
        >
          <img
            className='w-[158px] h-[120px] rounded-xl md:w-[200px] md:h-[140px] lg:w-full lg:h-full'
            src={CardImage}
            alt='cardimage'
          />
          <p className='text-[15px] top-[50px] left-[40px] absolute text-primary md:top-[70px] md:left-[50px] lg:text-[18px]'>
            Card Ads
          </p>
          <p className='text-[15px] top-[95px] left-[50px] absolute text-primary md:top-[115px] md:left-[70px] lg:text-[18px]'>
            Rs: <span>150</span> / month
          </p>
        </div>

        {/* Popup Ad */}
        <div
          className={`w-[346px] h-[70px] rounded-xl bg-dark-gray relative mt-[30px] shadow-md md:w-[400px] md:h-[90px] lg:w-[500px] lg:h-[100px] cursor-pointer ${
            selectedAd === 'Popup Ads' ? 'ring-4 ring-primary' : ''
          }`}
          onClick={() => handleAdClick('Popup Ads', 350)}
        >
          <p className='text-[15px] top-[25px] left-[40px] absolute text-primary md:top-[30px] md:left-[50px] lg:text-[18px]'>
            Popup Ads
          </p>
          <p className='text-[15px] top-[45px] left-[220px] absolute text-primary md:top-[60px] md:left-[270px] lg:text-[18px]'>
            Rs: <span>350</span> / month
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostAd;

