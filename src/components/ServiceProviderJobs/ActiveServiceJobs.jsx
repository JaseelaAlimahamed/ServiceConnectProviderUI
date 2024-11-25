import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import TabComponent from "./TabComponent";
import { fetchOnGoingService, fetchCompletedService } from "../../services/jobService";

const ActiveServiceJob = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [service,setService] = useState()

  useEffect(() => {
    const fetchAllServices = async () => {
      setLoading(true);

      try {
        

        // Fetch both completed and ongoing services
        const completedServices = await fetchCompletedService();
        const ongoingServices = await fetchOnGoingService();
        
        console.log("Fetched Data:", completedServices);
      
        // Combine the fetched data
        const combinedData = [...completedServices, ...ongoingServices];

        setService(combinedData); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchAllServices(); 
  }, []);


console.log(service,'service');


  const filteredAppointments = Array.isArray(service) ? service.filter(
    (appointment) =>
      (activeTab === "ongoing" &&
        (appointment.work_status === "in_progress" ||
          appointment.work_status === "Payment Pending")) ||
      (activeTab === "completed" && appointment.work_status === "completed")
  ) : [];

  return (
    <div className="min-w-full mx-auto bg-light-gray min-h-screen p-4">
      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      <CardComponent Head="Job" Appointments={filteredAppointments} />
    </div>
  );
};

export default ActiveServiceJob;
