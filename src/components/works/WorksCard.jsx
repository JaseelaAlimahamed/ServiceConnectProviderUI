import React from 'react'
import { FaStar } from "react-icons/fa";

const WorksCard = ({workData}) => {
  const { id, work,description, workStatus, rating, workCompletedIn } = workData;

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
          <div className="mb-2">
            <span className="text-sm text-[#FF6B00] font-semibold mr-4 ">
              {work}
            </span>
          </div>
    
          <h2 className="text-heading_blck font-bold font-navbarHead line-clamp-1">
            {description}
          </h2>
          
          {workStatus === "completed" && (
            <div className="flex  mt-2">
              <span className="flex items-center text-heading_blck font-bold text-sm">
              <FaStar className='text-[#FAC025] mr-2'/> {rating}
              </span>
              <span className="text-heading_blck font-bold text-sm mx-4">|</span>
              <span className="text-heading_blck font-bold text-sm">
                {workCompletedIn.hour} Hrs {workCompletedIn.minutes} Mins
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorksCard