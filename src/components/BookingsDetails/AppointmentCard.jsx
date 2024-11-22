import React from 'react';
import { IoAlertCircle } from 'react-icons/io5';

function AppointmentCard({ appointmentData }) {
  const {
    date,
    time,
    description,
    quantity,
    price,
    terms,
    additional
  } = appointmentData || {};

  // Function to convert time to 12-hour format with AM/PM
  const formatTimeTo12Hour = (timeString) => {
    if (!timeString) return 'N/A';
    const [hour, minute] = timeString.split(':');
    let hour12 = hour % 12 || 12; // Convert to 12-hour format
    const ampm = hour >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minute} ${ampm}`;
  };

  return (
    <div className="max-w-md p-4 mx-auto bg-white shadow-md rounded-2xl lg:max-w-2xl">
      <h2 className="mb-4 ml-6 text-lg font-bold font-base">Appointment</h2>

      <div className="flex flex-col mt-2 ml-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              value={date || 'N/A'}
              readOnly
              className="w-3/4 p-2 ml-12 text-center bg-gray-200 border rounded-lg shadow-xl"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              value={formatTimeTo12Hour(time) || 'N/A'}
              readOnly
              className="w-24 p-2 text-center bg-gray-200 border rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg">
        <h3 className="mb-4 font-bold text-md">Invoice</h3>

        <table className="w-full mb-2 text-sm font-semibold">
          <thead>
            <tr>
              <th className="pb-2 text-left">Sl. No</th>
              <th className="pb-2 text-left">Description</th>
              <th className="pb-2 text-right">Qty</th>
              <th className="pb-2 text-right">Price</th>
              <th className="pb-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{description || 'N/A'}</td>
              <td className="text-right">{quantity || 0}</td>
              <td className="text-right">{price || 0}</td>
              <td className="text-right">{(quantity * price) || 0}</td>
            </tr>
          </tbody>
        </table>
        <div className="pt-2 text-sm font-semibold text-right">
          Grand Total: {(quantity * price) || 0}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>Terms and conditions</p>
        <p>{terms || 'No terms provided'}</p>
      </div>

      <div className="mt-4">
        <h4 className="flex items-center mb-2 font-bold text-red-600">
          Additional Requirements
          <IoAlertCircle className="mr-2 text-3xl" />
        </h4>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          {additional ? (
            additional.split(',').map((requirement, index) => (
              <li key={index}>{requirement.trim()}</li>
            ))
          ) : (
            <li>No additional requirements</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentCard;
