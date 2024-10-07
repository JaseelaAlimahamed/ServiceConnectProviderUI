import React from 'react';

const BookingsDetalsPart = ({ booking }) => {
  return (
    <div className="p-4 font-daytime">
      <div>
        <h3 className='font-medium text-lg'>Title</h3>
        <p className='text-cardfont text-sm'>{booking.title}</p>
      </div>
      <div>
        <h3 className='font-medium'>Description</h3>
        <p className='text-sm text-cardfont'>{booking.description}</p>
      </div>
      <div className="py-2">
        <h3 className='font-medium'>Images & Video</h3>
        {
          booking.images.map((image, index) => (
            <img key={index} src={image} alt="" className='w-20 h-20 rounded-full aspect-square object-cover' />
          ))
        }
      </div>
      <div>
        <h3 className='font-medium'>Availability</h3>
        <div>
          <div>
            <h1 className='text-cardfont'>From</h1>
            <div className="flex gap-2">
              <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                {booking.availabiliyFromdate}
              </div>
              <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                {booking.availabilityFromTime}
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-cardfont'>To</h1>
            <div className="flex gap-2">
              <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                {booking.availabiliyTodate}
              </div>
              <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                {booking.availabilityToTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsDetalsPart;
