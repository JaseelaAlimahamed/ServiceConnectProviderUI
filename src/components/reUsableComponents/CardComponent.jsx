import React from 'react';
import AppointmentCard from './AppointmentCard';
import { CiSearch } from 'react-icons/ci';
import { VscSettings } from 'react-icons/vsc';

const CardComponent = () => {
  const dummyAppointments = [
    {
      title: "Haircut Appointment",
      viewLink: "#",
      date: "September 22, 2024",
      time: "2:00 PM",
      userName: "John Doe",
      status: "Scheduled",
      timeRange: "2:00 PM - 3:00 PM",
      bookingTime: "1:30 PM - 2:30 PM"
    },
    {
      title: "Plumbing Service",
      viewLink: "#",
      date: "September 23, 2024",
      time: "10:00 AM",
      userName: "Jane Smith",
      status: "Rescheduled",
      timeRange: "10:00 AM - 11:00 AM",
      bookingTime: "9:30 AM - 10:30 AM"
    }
  ];

  return (
    <div className="max-w-[375px] h-[812px] mx-auto bg-white shadow-lg rounded-[23px] overflow-hidden">
      <div className="bg-dark-gray text-white p-4 h-[90px] flex items-center justify-between">
        <h2 className="text-lg font-heading mt-8 ml-4">BOOKINGS</h2>
        <div className="flex space-x-4 mr-4">
          <button className="p-2 rounded-full hover:bg-gray-300">
            <VscSettings className="w-5 h-5 text-white mt-8" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-300">
            <CiSearch className="w-5 h-5 text-white mt-8" />
          </button>
        </div>
      </div>

      <div className="p-4 bg-light-grey">
        {dummyAppointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            title={appointment.title}
            viewLink={appointment.viewLink}
            date={appointment.date}
            time={appointment.time}
            userName={appointment.userName}
            status={appointment.status}
            bookingTime={appointment.bookingTime}
          />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
