import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ReviewCard = ({ name, rating, review, likes, timeAgo }) => {
  return (
    <div>
    <div className="bg-white shadow-2xl p-4 rounded-xl flex justify-between items-center mb-4 ">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-black"></div>
        <div className="ml-4">
          <p className="text-md font-bold">{name}</p>
          <p className="text-sm text-gray-500 font-semibold">{review}</p>
          <div className='flex items-center justify-between'>
         <div className='flex'>
         <FaHeart className="text-red-500 mt-0.5 " />
         <p className="text-sm   font-bold ml-2  ">{likes}</p>
         </div>
          <p className="text-sm  mt-1 font-bold">{timeAgo}</p>
          </div>
         
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center justify-end border-2 border-rating_border  bg-rating_bgg  rounded-3xl px-2">
        <div className="text-rating_star ml-1">★</div>
          <p className="text-md font-semibold ml-1">{rating}</p>
          
        </div>
        <div className="flex items-center justify-end mt-2">
      
        </div>
       
      </div>
    </div>
    </div> 
  );
};

export default ReviewCard;
