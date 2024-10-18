import React from "react";
import AppointmentCard from "./AppointmentCard";

const CardComponent = ({ Head, Appointments, children }) => {
  return (
    <div className="w-full max-w-full mx-auto p-4">
      <div className="bg-light-gray  rounded-[23px] overflow-hidden">
        <div className="p-4 bg-light-grey space-y-8">
          {children}
          <AppointmentCard appointments={Appointments} />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
