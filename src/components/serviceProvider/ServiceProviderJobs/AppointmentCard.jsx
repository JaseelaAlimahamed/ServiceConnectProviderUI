import React from "react";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { BsExclamationOctagonFill } from "react-icons/bs";
import ButtonComponentWithoutArrow from "./BtComponentWithoutArrow";

const AppointmentCard = ({ appointments,}) => {
  return (
    <div>
      {appointments.map((appointment, index) => (
    <div key={index}
     className="flex max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden relative mb-4" 
    style={{ minHeight: '148px', fontFamily: 'Poppins, sans-serif' }} >
           <div
            className={`w-3 ${
              appointment.status === 'Active' ?'bg-orange-500' : appointment.status === 'Payment Pending' ? 'bg-yellow-500' : 
              appointment.status === 'Completed' ? 'bg-green-500' : 'bg-[#135275]'
            }`}
          ></div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold text-[#303972]">{appointment.title}</h1>
              <a href={appointment.viewLink} className="text-sm underline mr-4">View</a>
              <div className="font-medium text-[#797C7B]">{appointment.time}</div>
              
            </div>

            <div className="mt-1 flex items-center">
              <div className="bg-[#C1BBEB] rounded-full h-6 w-6 mr-3"></div>
              <div>
                <p className="text-sm text-gray-600">{appointment.userName}</p>
                <div className="flex">
                <p className={`text-sm ${appointment.status === 'Payment Pending' ? 'text-red-500' : 'text-gray-400'}`}>{appointment.status}</p>
                {appointment.status === 'Payment Pending' && (
                 <div className="bg-white">
                  <BsExclamationOctagonFill className="w-4 h-4 mt-1 text-red-500 ml-2" />
                  </div>
                )}
                
                </div>
              </div>
            </div>
            
            {appointment.status==='Active' && (
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <div className="flex items-center">
                <CiCalendar className="w-5 h-5 text-red-500 mr-2" />
                <p>{appointment.date}</p>
              </div>
              <div className="flex items-center">
                <CiClock2 className="w-5 h-5 text-yellow-500 mr-1" />
                <p>{appointment.bookingTime}</p>
              </div>
            </div>
             )
            }
            
            <ButtonComponentWithoutArrow className=""
              label={
                appointment.status === "Active"
                  ? "Mark Complete"
                  : appointment.status === "Payment Pending"
                  ? "View"
                  : "Completed"
              }
              disabled={appointment.status === "Completed"}
              btnWidth="282px"
              btnHeight="25px"
            />
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCard;
