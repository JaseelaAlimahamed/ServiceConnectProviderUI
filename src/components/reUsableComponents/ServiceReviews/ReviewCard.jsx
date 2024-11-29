import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ReviewCard = ({ name, rating, review, likes, timeAgo }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 hover:shadow-2xl transition-shadow">
      <div className="flex items-start">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex-shrink-0"></div>
        <div className="ml-4 flex-grow">
          <p className="text-lg font-bold text-gray-800">{name}</p>
          <p className="text-gray-600 mt-1">{review}</p>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <FaHeart className="text-red-500 cursor-pointer hover:scale-125 transition-transform" />
              <span className="text-gray-800 font-medium ml-2">{likes}</span>
            </div>
            <p className="text-gray-500 text-sm">{timeAgo}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
          <span className="text-yellow-500 text-lg">★</span>
          <p className="text-gray-800 font-semibold ml-2">{rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
