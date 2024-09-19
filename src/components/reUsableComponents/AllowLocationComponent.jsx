
import React, { useState } from "react";
import ModalComponent from "./ModalComponent.jsx"; // Import the Modal component


const AllowLocationComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [manualLocation, setManualLocation] = useState("");

  // Function to get the user's current location
  const handleAllowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Location fetched successfully:', { latitude, longitude }); /////////
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Handle manual location input
  const handleManualLocation = (e) => {
    setManualLocation(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Button to trigger modal  */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Open Location Modal
      </button>   

      {/* Using the Modal Component */}
      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
        width="354px"
        height="271px">
          <div className="flex flex-col justify-center items-center h-full">
        <h2 className="font-heading text-[32px] font-normal leading-[40px] text-center mb-3 mt-6">Allow Location</h2>

        {/* Button to allow location */}
        <button className="w-[208px] h-[59.22px] rounded-[100px] bg-dark-gray  py-4 text-primary font-default hover:bg-secondary flex items-center justify-center  px-4"
          onClick={handleAllowLocation}>
          Allow
        </button>
    

      

        {/* Manual Location Entry */}
      
        <div className="flex justify-start p-4">
          <label className="block text-gray-700 mt-4">Manually Enter Location</label>
          </div>
        
        <div className=" w-full flex flex-col items-center">
          
          <input className="w-[271px] h-[53px] px-4 py-2  mb-6 rounded-md border border-light-gray bg-medium-gray font-input text-dark-gray focus:outline-none focus:ring-2 focus:ring-secondary"
            type="text"
            value={manualLocation}
            onChange={handleManualLocation}
            placeholder="Value"
          />
        </div>
        </div>
      </ModalComponent>
    </div>
  );
};

export default AllowLocationComponent;
