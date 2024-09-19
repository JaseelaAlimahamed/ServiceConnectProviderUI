import React from 'react'
import { HiCalendar, HiClock } from 'react-icons/hi';

export const RequestCard = ({ title, status, date, time, customer,daytime }) => {
  return (
    <div className='flex border rounded-3xl overflow-hidden shadow-sm'>
      <div className={` ${status === 'Pending' ? 'bg-statuspending' : 'bg-statusopened'} w-3`}> 


      </div>
    <div className="bg-white shadow w-full rounded-lg p-4 flex items-center justify-between">
      <div className="flex flex-col">
       <div className='flex gap-3'>
       <h4 className="text-xl font-semibold font-heading text-blue-900">{title}</h4> <a href="./view " className='underline text-xs mt-2'>View</a> <h5 className='font-daytime mt-1 text-daytime font-medium'>{daytime}</h5><button className="text-xl font-bold ">&times;</button>
      
       </div>
         <div className='flex'> 
        <img className='bg-customPurple h-6 w-6 ml-1 mr-1 rounded-full shadow' alt="" /> <p className="text-gray-500"> {customer}</p>
        
        </div>
      <div>
        <span className={`text-gray-500 px-2 py-1 text-sm rounded-full 
          ${status === 'Pending' ? '' : ''}`}>
          {status}
        </span>
      </div>
        <div className="flex items-center space-x-2 mt-2 text-gray-600">
          <HiCalendar className='text-orange-500' />
          <span>{date}</span>
          <HiClock  className='text-yellow-500' />
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
  );
};
