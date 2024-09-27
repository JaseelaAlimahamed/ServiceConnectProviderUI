import React from 'react';
import { IoAlertCircle } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

function AppointmentCard() {
  const location = useLocation();
  const {appointment } = location.state || {};
  const dummyAppointment = {
    description: "bulb change",
    quantity: 0,
    price: 300,
    total: 300,
    appointDate: "Sep 22, 2024",
    appointTime: "09:30 AM",
    additionalRequirements: [
      'Provide machines',
      'scissor,comb should be provided',
  ],
};
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md max-w-md mx-auto lg:max-w-2xl ml-4 mr-4">
      <h2 className="text-lg text-base font-bold ml-6 mb-4">Appointment</h2>

      <div className="flex flex-col ml-8 mt-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              value={dummyAppointment.appointDate}
              readOnly
              className="border shadow-xl ml-12 rounded-lg p-2 bg-gray-200 w-3/4 text-center"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              value={dummyAppointment.appointTime}
              readOnly
              className="border shadow-xl rounded-lg p-2 bg-gray-200 w-24 text-center"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <h3 className="text-md font-bold mb-4">Invoice</h3>
 

        <table className="w-full text-sm font-semibold mb-2">
          <thead>
            <tr>
              <th className="text-left pb-2">Sl. No</th>
              <th className="text-left pb-2">Description</th>
              <th className="text-right pb-2">Qty</th>
              <th className="text-right pb-2">Price</th>
              <th className="text-right pb-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>1</td>
              <td>{dummyAppointment.description}</td>
              <td className="text-right">{dummyAppointment.quantity}</td>
              <td className="text-right">{dummyAppointment.price}</td>
              <td className="text-right">{dummyAppointment.total}</td>
            </tr>

          </tbody>
        </table>
        <div className="pt-2 text-right text-sm font-semibold">
          Grand Total: {dummyAppointment.total}
        </div>
      </div>


      <div className="mt-4 text-sm text-gray-600">
        <p>Terms and conditions</p>
        <p>Valid up to 1 month</p>
      </div>


      <div className="mt-4">
        <h4 className="text-red-600 font-bold flex items-center mb-2">
          Additional Requirements
          <IoAlertCircle className="mr-2 text-3xl" />
        </h4>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          {dummyAppointment.additionalRequirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentCard;
