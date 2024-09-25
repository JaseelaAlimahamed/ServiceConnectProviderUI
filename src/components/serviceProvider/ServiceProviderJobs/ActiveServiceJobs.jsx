import React, { useState } from "react";
import CardComponent from "./CardComponent";
import TabComponent from "../ServiceProviderJobs/TabComponent";


const ActiveServiceJob = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const appointments = [
    {
      title: "Haircut Appointment",
      viewLink: "#",
      date: "September 22, 2024",
      userName: "John Doe",
      status: "Active",
      bookingTime: "1:30 PM - 2:30 PM",
      
    },
    {
      title: "Plumbing Service",
      viewLink: "#",
      date: "September 23, 2024",
      userName: "Jane Smith",
      status: "Payment Pending",
      bookingTime: "9:30 AM - 10:30 AM",
      
    },
    {
      title: "Plumbing Service",
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
    <div className="active-service-job">
      <CardComponent
        Head="Job"
        Appointments={filteredAppointments}
      >
        <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
       
      </CardComponent>
      
      
    </div>
  );
};

export default ActiveServiceJob;
