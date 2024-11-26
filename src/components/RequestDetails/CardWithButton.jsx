import React, { useState } from "react";

function CardWithButton({ data }) {
  const [activeTab, setActiveTab] = useState("request");

  // Extracting and transforming data
  const {
    service_description = "No description provided.",
    customer_address = "No address provided.",
    availability_from,
    availability_to,
    customer_place = "N/A",
    booking_id = "N/A",
    image,
  } = data || {};

  const formattedFrom = availability_from
    ? new Date(availability_from).toDateString()
    : "N/A";
  const formattedTo = availability_to
    ? new Date(availability_to).toDateString()
    : "N/A";

  return (
    <div className="my-4 max-w-md mx-auto lg:max-w-2xl">
      <div className="bg-white shadow-md rounded-2xl ml-4 mr-4 min-h-[400px]">
        {/* Tab Navigation */}
        <div className="flex justify-between mb-0">
          <button
            onClick={() => setActiveTab("request")}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${
              activeTab === "request"
                ? "border-blue-500 text-blue-600"
                : "border-gray-300 text-gray-400"
            }`}
            aria-pressed={activeTab === "request"}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab("address")}
            className={`w-1/2 text-center py-3 border-b-4 font-semibold rounded-t-lg ${
              activeTab === "address"
                ? "border-blue-500 text-blue-600"
                : "border-gray-300 text-gray-400"
            }`}
            aria-pressed={activeTab === "address"}
          >
            Address
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 min-h-[300px]">
          {activeTab === "request" ? (
            <div>
              <h3 className="text-lg font-semibold">Booking ID</h3>
              <p className="text-gray-700">{booking_id}</p>

              <h3 className="mt-4 text-lg font-semibold">Service Description</h3>
              <p className="text-gray-700">{service_description}</p>

              <h3 className="mt-4 text-lg font-semibold">Availability</h3>
              <p>From: {formattedFrom}</p>
              <p>To: {formattedTo}</p>

              <h3 className="mt-4 text-lg font-semibold">Images</h3>
              {image ? (
                <img
                  src={image}
                  alt="Service"
                  className="w-32 h-32 rounded-md object-cover"
                />
              ) : (
                <p className="text-gray-500">No images available.</p>
              )}
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-black">{customer_place}</p>

              <h3 className="mt-4 text-lg font-semibold">Customer Address</h3>
              <p>{customer_address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardWithButton;
