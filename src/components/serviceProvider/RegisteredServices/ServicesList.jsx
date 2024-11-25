import React, { useState, useEffect } from 'react';
import AddButton from './Button/AddButton';
import ServiceCard from './Card/ServiceCard';
import NavbarHead from '../layout/NavbarHead';
import { fetchservicedetails } from '../../../editservice/editserviceapi';

function ServicesList() {
  // State to store service details
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // For loading indicator
  const [error, setError] = useState(null); // For error handling

  // Fetch service details when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchservicedetails(); // Assuming this returns a promise
        setServices(data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching service details:", err);
        setError("Failed to fetch service details.");
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Render a loading indicator, error message, or services
  return (
    <div className="max-w-screen-full mx-auto bg-light-gray min-h-screen px-4 py-6">
      <AddButton />

      {loading ? (
        <div className="text-center text-gray-600">Loading services...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ServicesList;
