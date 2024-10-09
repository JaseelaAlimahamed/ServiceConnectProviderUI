import React from 'react';
import { Link } from 'react-router-dom';
import { HiCalendar, HiClock } from 'react-icons/hi';


export const RequestCard = ({ type, title, status, date, time, customer, daytime, id }) => {
    console.log(type);
    
  // Determine the link based on the type
  const linkTo = type === 'Lead' ? `/lead-details/${id}` : `/request-details/${id}`;

  return (
    <div className="grid-cols-1 md:grid-cols-2">
      <div className='flex border rounded-3xl overflow-hidden shadow-sm'>
        <div className={`${status === 'Pending' ? 'bg-statuspending' : status === 'Opened' ? 'bg-complete-btn' : 'bg-dark-red'} w-3`} />

        <div className="bg-white shadow w-full rounded-lg p-4 flex items-center justify-between">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-8 w-full gap-2 xs:gap-0">
              <h4 className="col-span-3 text-xl font-semibold font-heading text-blue-900 truncate">{title}</h4>
              
              {/* Conditionally render the link */}
              <Link to={linkTo} className='underline text-xs mt-2'>View</Link>
              
              <h5 className='font-daytime mt-1 text-daytime w-fit font-medium col-span-3'>{daytime}</h5>
            </div>

            <div className='flex items-center mt-2'>
              <img className='bg-customPurple h-6 w-6 ml-1 mr-1 rounded-full shadow' alt="" />
              <p className="text-gray-500">{customer}</p>
            </div>

            <div className="mt-2">
              <span className={`text-gray-500 px-2 py-1 text-sm rounded-full`}>
                {status}
              </span>
              <span className={`text-gray-500 px-2 py-1 text-sm rounded-full`}>
                {type}
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mt-2 text-gray-600">
                <HiCalendar className='text-orange-500' />
                <span>{date}</span>
                <HiClock className='text-yellow-500' />
                <span>{time}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default RequestCard;
