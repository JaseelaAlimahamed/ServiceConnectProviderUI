import React, { useEffect, useState } from 'react';
import ReviewCard from '../../reUsableComponents/ServiceReviews/ReviewCard';
import RatingComponent from './RatingComponent';
import CustomButton from '../../reUsableComponents/ServiceReviews/CustomButton';
import { reviews } from '../../../services/providerAxios';


const reviewsData1 = [
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

  const [reviewsData, setReviewsData] = useState({
    reviews: [],
    average_rating: 0,
    total_reviews: 0,
    rating_scale: "Poor"
  });

  //const authToken = localStorage.getItem('authToken');
  const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNzUwNTA3LCJpYXQiOjE3MzA2OTI5MDcsImp0aSI6IjhjY2JjNjhlNmQ1MDRlMDQ5NGQwOTE2N2JiNjEzZDE2IiwidXNlcl9pZCI6NH0.ZXEid2RgEql5_J2Rep-y8l8v77IxgpWtsZq-LBr3BTk";


  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await reviews(authToken);
        setReviewsData(response);
        console.log(response)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-light-gray p-6 rounded-xl w-full">




      <div className="text-center mt-4">
        <RatingComponent rating={reviewsData.average_rating} maxStars={5} filledColor="text-yellow-500" emptyColor="text-yellow-500" />
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
          customClasses=""
        />
        <CustomButton
          textSize="text-sm"
          label="Good"
          bgColor="bg-primary"
          textColor="text-secondary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
          customClasses=""
        />
        <CustomButton
          textSize="text-sm"
          label="Average"
          bgColor="bg-primary"
          textColor="text-secondary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
          customClasses=""
        />
        <CustomButton
          textSize="text-sm"
          label="Below Average"
          bgColor="bg-primary"
          textColor="text-secondary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
          customClasses="hover:bg-secondary hover:text-primary"
        />
      </div>


      <div className="mt-4  grid xs:grid-cols-1 md:grid-cols-2 gap-8 px-4 mx-auto ">
        {reviewsData1.map((review, index) => (
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
      <div className="w-full sticky bottom-16 md:text-center ">
        <CustomButton
          textSize="text-sm"
          label="Write a Review"
          bgColor="bg-secondary"
          textColor="text-primary"
          hoverBgColor="bg-secondary"
          hoverTextColor="text-primary"
          customClasses="  w-full max-w-xl text-xl  py-4  rounded-full shadow-lg font-semibold"
        />

      </div>
    </div>
  );
};

export default ReviewSection;
