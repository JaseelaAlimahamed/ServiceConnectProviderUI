import React from 'react';
import { Link } from 'react-router-dom';
import { HiCalendar, HiClock } from 'react-icons/hi';


export const RequestCard = ({ title, status, date, time, customer, daytime, id}) => {
  console.log(id);
  
  return (
    <div className="grid-cols-1 md:grid-cols-2">
    <div className='flex border rounded-3xl overflow-hidden shadow-sm ' >
   <div className={`${status === 'Pending' ? 'bg-statuspending' : status === 'Opened' ? 'bg-statusopened' : 'bg-statusrejected'} w-3`} />

      <div className="bg-white shadow w-full rounded-lg p-4 flex items-center justify-between">
        <div className="flex flex-col w-full">
          <div>
          <div className="grid grid-cols-8 w-full gap-2 xs:gap-0  ">

          {/* <div className='xs:grid  grid-cols-8 w-full xs:gap-0 gap-2 '> */}
              <h4 className="col-span-3 text-xl font-semibold font-heading text-blue-900 truncate">{title}</h4>
             
              <Link to={`/request-details/${id}`}className=' underline text-xs mt-2'>View </Link> 
                      
              <h5 className='font-daytime mt-1 text-daytime w-fit font-medium col-span-3 '>{daytime}</h5>
              <div className='flex justify-end align-top'>
              <button className="text-xl font-bold ">&times;</button>
            
              </div>
             
            </div>

            {/* <div className='flex gap-3'>
              <h4 className="text-xl font-semibold font-heading text-blue-900 ">{title}</h4>
             
              <Link to={`/request-details/${id}`}className='underline text-xs mt-2'>View </Link>

              <h5 className='font-daytime mt-1 text-daytime font-medium'>{daytime}</h5>
              <button className="text-xl font-bold ">&times;</button>
            </div> */}
            <div className='flex'>
              <img className='bg-customPurple h-6 w-6 ml-1 mr-1 rounded-full shadow' alt="" />
              <p className="text-gray-500"> {customer}</p>
            </div>
            <div>
              <span className={`text-gray-500 px-2 py-1 text-sm rounded-full ${status === 'Pending' ? '' : ''}`}>
                {status}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mt-2 text-gray-600">
              <HiCalendar className='text-orange-500' />
              <span>{date}</span>
              <HiClock className='text-yellow-500' />
              <span>{time}</span>
            </div>
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
