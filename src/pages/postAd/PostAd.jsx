import React, { useState } from 'react';
import BannerImage from '../../assets/banner-ads.png';
import CardImage from '../../assets/card-ads.png';
import { useNavigate } from 'react-router-dom';

function PostAd() {
  const [selectedAd, setSelectedAd] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const navigate = useNavigate();

  // Function to handle ad selection
  const handleAdClick = (adName, price) => {
    setSelectedAd(adName);
    setSelectedPrice(price);
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
       
          <div className='mt-8'>
          {selectedAd && (
            <button
              className='bg-dark-gray text-white text-xl py-4 px-6 rounded'
              onClick={() => navigate('/boost-service')}
            >
              {selectedAd}, Price: Rs {selectedPrice}
            </button>
          )}
        </div>
        

        {/* Selected Ad Button */}
       
      </div>
    </div>
  );
}

export default PostAd;
