import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import BookingAppointment from './BookingAppointment';


const CardComponent = () => {
  const navigate = useNavigate();

  const dummyAppointments = [
    {
      id: '123abc',
      title: "Haircut",
      viewLink: "#",
      dateFrom: "Sep 22, 2024",
      dateTo: "Sep 22, 2024",
      time: "Today, 2:00 PM",
      image:'https://imgs.search.brave.com/6k6HtqCtTh7p-diGuCA-DNpe3lk1DC1bpoymrVSUcus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzQ0LzEwLzQ2/LzM2MF9GXzQ0NDEw/NDY3OV84TFBieDQ3/enZaNEhCWnE3eHht/RkZieEU4azdxUTcx/aS5qcGc',
      userName: "Johnay shoo",
      status: "Pending",
      timeRange: "2:00 PM - 3:00 PM",
      bookingTimeFrom: "01:30 AM",
      bookingTimeTo: "02:30 PM",
      description:"No description for this work",
      images: ['https://imgs.search.brave.com/fvThpd-ponhh6lltr58quXobUqfEZZnDLFUnxpMglug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nbGFtb3VyLmNv/bS9waG90b3MvNjAw/MDY4Y2QyMTAxNjg2/ZjY3YTM1MDVhL21h/c3Rlci93XzMyMCxj/X2xpbWl0LzEzNTc4/ODY3M18xNjExOTMy/MzIwNzkyMDNfMjc1/MDAzMjgzMDEzMzE0/MzI0Ml9uLmpwZw', 'https://imgs.search.brave.com/y5F6ULWeyHnJ4iV-psjZrtodCAhARhROb7ATGxmz9GQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlcmln/aHRoYWlyc3R5bGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNi8xOS1z/aG9ydC1oYWlyY3V0/LXdpdGgtYW5nbGVk/LWxheWVycy5qcGc_/dz01MDAmc3NsPTE', 'https://imgs.search.brave.com/y5F6ULWeyHnJ4iV-psjZrtodCAhARhROb7ATGxmz9GQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlcmln/aHRoYWlyc3R5bGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNi8xOS1z/aG9ydC1oYWlyY3V0/LXdpdGgtYW5nbGVk/LWxheWVycy5qcGc_/dz01MDAmc3NsPTE'],
      quantity: 0,
      price: 300,
      total: 300, 
      appointDate: "Sep 22, 2024",
      appointTime: "09:30 AM",
      additionalRequirements: [
        'Provide machines',
        'scissor,comb should be provided',
    ],
    },
    {
      id: '345def',
      title: "Plumbing",
      viewLink: "#",
      dateFrom: "Aug 23, 2024",
      dateTo: "Aug 23, 2024",
      time: "Today, 10:00 AM",
      image: 'https://imgs.search.brave.com/s7h4GwPFE3nOh8I-uZHXR22kIbzwafCF_Bye8A6B0io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0xpZmVz/dHlsZS0xMDMzNDU3/MjUwLmpwZw',
      userName: "Jane Smith",
      status: "Rescheduled",
      timeRange: "10:00 AM - 11:00 AM",
      bookingTimeFrom: "01:01 AM",
      bookingTimeTo: "02:00 PM",
      description: 'No description available',
      images: ['https://imgs.search.brave.com/oFL0INc7BcpLuE3GmjobVVs-Eacu_0DOxkbTRR2aaD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY5/MjcwMjgyL3Bob3Rv/L3BsdW1iZXItd29y/a2luZy1vbi1waXBl/cy11bmRlci1zaW5r/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1iNFlwVnpzeEFo/cFVXYmNFblhMNFIw/Y3pONVZ0Y0lnbHRI/TWxiaERFZVl3PQ', 'https://imgs.search.brave.com/Mp0jhW7axm0LZW_226WtwHmFbcKkCdey7BcBQoMpkHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/bHVtYmluZy1yZXBh/aXItc2VydmljZV8x/ODE2MjQtMjcxNDYu/anBnP3NpemU9NjI2/JmV4dD1qcGc', 'https://imgs.search.brave.com/ySapyAX_NcyfmvlfFi14gfnOM8LUNmw6_2a2_SG_T6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8xMS8xNC81My9w/bHVtYmluZy04NDA4/MzVfMTI4MC5qcGc'],
      quantity: 0,
      price: 500,
      total: 500,
      appointDate: "Aug 22, 2024",
      appointTime: "10:30 AM",
      additionalRequirements: [
       'Provide Ladder',
       'pipes should be provided',
    ],
    },
  ];

  const handleViewDetails = (appointment) => {
    console.log(appointment.id)
    navigate(`/bookingdetail/${appointment.id}`, { 
      state: {appointment:appointment}
    });
  };
  return (
    <div className="min-h-screen mx-auto bg-light-gray shadow-lg overflow-hidden">
      <div className="p-6 max-w-full bg-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          {/* Responsive Grid: 1 column on mobile, 2 columns on desktop */}
          {dummyAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="mb-8 mx-auto w-full h-auto"
              onClick={() => handleViewDetails(appointment)}
            >
              <BookingAppointment
                title={appointment.title}
                viewLink={appointment.viewLink}
                dateFrom={appointment.dateFrom}
                dateTo={appointment.dateTo}
                bookingTimeFrom={appointment.bookingTimeFrom}
                bookingTimeTo={appointment.bookingTimeTo}
                time={appointment.time}
                userName={appointment.userName}
                image={appointment.image}
                status={appointment.status}
                bookingTime={appointment.bookingTime}
                description={appointment.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
};

export default CardComponent;


