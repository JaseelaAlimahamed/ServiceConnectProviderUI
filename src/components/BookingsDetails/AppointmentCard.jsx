import React from 'react';
import { IoDocumentText, IoLocationOutline, IoCalendarOutline } from 'react-icons/io5';

function AppointmentCard({ data }) {
  const {
    booking_id,
    service_description,
    customer_address,
    availability_from,
    availability_to,
    profile_image,
    invoices,
  } = data || {};

  // Convert date/time to a readable format
  const formatDate = (datetime) => {
    if (!datetime) return 'N/A';
    const options = { dateStyle: 'medium', timeStyle: 'short' };
    return new Date(datetime).toLocaleString(undefined, options);
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white shadow-lg rounded-lg lg:max-w-2xl">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <img
          src={profile_image || 'https://via.placeholder.com/150'}
          alt="Service Provider"
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">Appointment Details</h2>
          <p className="text-sm text-gray-500">Booking ID: {booking_id || 'N/A'}</p>
        </div>
      </div>

      {/* Service Description */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <IoDocumentText className="text-secondary" />
          Service Description
        </h3>
        <p className="text-sm text-gray-600 mt-2">{service_description || 'No description provided.'}</p>
      </div>

      {/* Availability Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <IoCalendarOutline className="text-secondary" />
          Availability
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            <strong>From:</strong> {formatDate(availability_from)}
          </p>
          <p className="text-sm text-gray-600">
            <strong>To:</strong> {formatDate(availability_to)}
          </p>
        </div>
      </div>

      {/* Address Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <IoLocationOutline className="text-secondary" />
          Customer Address
        </h3>
        <p className="text-sm text-gray-600 mt-2">{customer_address || 'No address provided.'}</p>
      </div>

      {/* Invoices Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-red-600 flex items-center gap-2">
          <IoDocumentText />
          Invoices
        </h3>
        {invoices && invoices.length > 0 ? (
          <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
            {invoices.map((invoice, index) => (
              <li key={index}>{invoice}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-gray-600">No invoices available.</p>
        )}
      </div>
    </div>
  );
}

export default AppointmentCard;
