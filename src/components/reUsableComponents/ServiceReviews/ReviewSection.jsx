import React from 'react';
import ReviewCard from '../../reUsableComponents/ServiceReviews/ReviewCard';  
import RatingComponent from './RatingComponent';


const reviewsData = [
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
  {
    name: 'Marshall A. Lester',
    rating: 4.6,
    review: 'Excellent course, really enjoyed it.',
    likes: 914,
    timeAgo: '2 Weeks Ago',
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-pagebg p-6 rounded-xl w-full">
   
      

     
      <div className="text-center mt-4">
        <RatingComponent rating={4.8} maxStars={5} filledColor="text-yellow-500" emptyColor="text-yellow-500" />
        <p className="text-sm text-gray-500">Based on 448 Reviews</p>
      </div>

    
      <div className="flex justify-evenly mt-4 space-x-4">
        <button className="bg-white text-black hover:bg-black hover:text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">Excellent</button>
        <button className="bg-white text-black hover:bg-black hover:text-white px-2 py-1 rounded-full text-sm font-semibold shadow-lg">Good</button>
        <button className="bg-white text-black hover:bg-black hover:text-white px-2 py-1 rounded-full text-sm font-semibold shadow-lg">Average</button>
        <button className="bg-white text-black hover:bg-black hover:text-white px-2 py-1 rounded-full text-sm font-semibold shadow-lg">Below Average</button>
      </div>

   
      <div className="mt-4  grid xs:grid-cols-1 md:grid-cols-2 gap-8 px-4 mx-auto ">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            review={review.review}
            likes={review.likes}
            timeAgo={review.timeAgo}
          />
        ))}
      </div>
      <div className="w-full sticky bottom-36 md:text-center ">
        <button  className="w-full max-w-xl text-xl  py-4  bg-black text-white rounded-full shadow-lg font-semibold" >
        
          <h1 >Write a Review</h1>
         
          </button>
      </div>
    </div>
  );
};

export default ReviewSection;
