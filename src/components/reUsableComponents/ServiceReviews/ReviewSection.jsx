import React, { useEffect, useState } from 'react';
import ReviewCard from '../../reUsableComponents/ServiceReviews/ReviewCard';
import RatingComponent from './RatingComponent';
import CustomButton from '../../reUsableComponents/ServiceReviews/CustomButton';
import { reviews } from '../../../services/providerAxios';

const ReviewSection = () => {
  const [reviewsData, setReviewsData] = useState({
    reviews: [],
    average_rating: 0,
    total_reviews: 0,
    rating_scale: "Poor",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await reviews();
        setReviewsData(response);
        console.log(response); 
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="bg-light-gray p-6 rounded-xl w-full">
      <div className="text-center mt-4">
        <RatingComponent
          rating={reviewsData.average_rating}
          maxStars={5}
          filledColor="text-yellow-500"
          emptyColor="text-yellow-500"
        />
        <p className="text-sm text-gray-500">{reviewsData.total_reviews}</p>
      </div>

      <div className="flex justify-evenly mt-4 space-x-4">
        <CustomButton
          textSize="text-sm"
          label="Excellent"
          bgColor="bg-primary"
          textColor="text-secondary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
        />
        <CustomButton
          textSize="text-sm"
          label="Good"
          bgColor="bg-primary"
          textColor="text-secondary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
        />
        <CustomButton
          textSize="text-sm"
          label="Average"
          bgColor="bg-primary"
          textColor="text-secondary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
        />
        <CustomButton
          textSize="text-sm"
          label="Below Average"
          bgColor="bg-primary"
          textColor="text-secondary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
        />
      </div>

      <div className="mt-4 grid xs:grid-cols-1 md:grid-cols-2 gap-8 px-4 mx-auto">
        {/* Render reviews dynamically */}
        {reviewsData.reviews.map((review, index) => (
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

      <div className="w-full sticky bottom-16 md:text-center">
        <CustomButton
          textSize="text-sm"
          label="Write a Review"
          bgColor="bg-secondary"
          textColor="text-primary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
          customClasses="w-full max-w-xl text-xl py-4 rounded-full shadow-lg font-semibold"
        />
      </div>
    </div>
  );
};

export default ReviewSection;

