import React from 'react'

const RatingComponent = ({ rating = 0, maxStars = 5, filledColor = "text-rating_star", emptyColor = "text-yellow-200" 
 
}) => {
      return (
        <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">{4.5}</p>
        <div className="flex text-2xl space-x-1">
          {Array.from({ length: maxStars }, (_, index) => (
            <div key={index} className={index < Math.floor(rating) ? filledColor : emptyColor}>
              {index + 1 <= rating ? '★' : '☆'}
            </div>
          ))}
        </div>
      </div>
      );
    };
    
    
  
export default RatingComponent