import React, { useState } from "react";
import TabComponent from "./TabComponent";
import AppointmentCard from "./AppointmentCard";


const ActiveServiceJob = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const appointments = [
    {
      title: "Haircut Appointment",
      time:"Today,9:30 AM",
      viewLink: "#",
      date: "September 22, 2024",
      userName: "John Doe",
      status: "Active",
      bookingTime: "1:30 PM - 2:30 PM",
      
    },
    {
      title: "Plumbing Service",
      time:"Today,9:30 AM",
      viewLink: "#",
      date: "September 23, 2024",
      userName: "Jane Smith",
      status: "Payment Pending",
      bookingTime: "9:30 AM - 10:30 AM",
      
    },
    {
      title: "Plumbing Service",
      time:"Today,9:30 AM",
      viewLink: "#",
      date: "September 23, 2024",
      userName: "Jane Smith",
      status: "Completed",
      bookingTime: "9:30 AM - 10:30 AM",
      
    },
  ];

  const filteredAppointments = appointments.filter(
    (appointment) =>
      (activeTab === 'ongoing' && (appointment.status === 'Active' || appointment.status === 'Payment Pending')) ||
    (activeTab === 'completed' && appointment.status === 'Completed')
  );

  return (
    <div>
     
        <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <AppointmentCard appointments={filteredAppointments} />
      
      
    </div>
  );
};

export default ActiveServiceJob;
