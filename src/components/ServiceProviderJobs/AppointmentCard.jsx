import React from "react";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { BsExclamationOctagonFill } from "react-icons/bs";
import ButtonComponentWithoutArrow from "./BtComponentWithoutArrow";

const AppointmentCard = ({ appointments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {" "}
      {/* Grid layout */}
      {appointments.map((appointment, index) => (
        <div
          key={index}
          className="bg-primary shadow-lg rounded-2xl overflow-hidden relative p-4"
          style={{ minHeight: "148px", fontFamily: "Poppins, sans-serif" }}
        >
          <div
            className={`w-3 ${
              appointment.status === "Active"
                ? "bg-warning-clr"
                : appointment.status === "Payment Pending"
                ? "bg-warning-yellow"
                : appointment.status === "Completed"
                ? "bg-success-green"
                : "bg-blue-drk"
            }`}
          ></div>

          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold text-cardfont">
                {appointment.title}
              </h1>
              <a href={appointment.viewLink} className="text-sm underline mr-4">
                View
              </a>
              <div className="font-medium text-daytime">
                {" "}
                {`${new Date(appointment.request_date).toLocaleDateString(
                  "en-US",
                  { weekday: "long" }
                )} ${appointment.request_date.split("T")[1].slice(0, 5)}`}
              </div>
            </div>

            <div className="mt-1 flex items-center">
              <div className="bg-customPurple rounded-full h-6 w-6 mr-3"></div>
              <div>
                <p className="text-sm text-gray-600">
                  {appointment.customer_name}
                </p>
                <div className="flex">
                  <p
                    className={`text-sm ${
                      appointment.work_status === "Payment Pending"
                        ? "text-pending-red"
                        : "text-gray-400"
                    }`}
                  >
                    {appointment.work_status}
                  </p>
                  {appointment.work_status === "Payment Pending" && (
                    <BsExclamationOctagonFill className="w-4 h-4 mt-1 text-pending-red ml-2" />
                  )}
                </div>
              </div>
            </div>

            {appointment.work_status === "Active" && (
              <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                <div className="flex items-center">
                  <CiCalendar className="w-5 h-5 text-red-500 mr-2" />
                  <p>
                    {" "}
                    {new Date(appointment.request_date).toLocaleDateString(
                      "en-US",
                      { month: "long", day: "numeric", year: "numeric" }
                    )}
                  </p>
                </div>
                <div className="flex items-center">
                  <CiClock2 className="w-5 h-5 text-yellow-500 mr-1" />
                  <p>
                    {`${
                      new Date(appointment.availability_from).getHours() % 12 ||
                      12
                    }:00 ${
                      new Date(appointment.availability_from).getHours() >= 12
                        ? "PM"
                        : "AM"
                    } - ${
                      new Date(appointment.availability_to).getHours() % 12 ||
                      12
                    }:00 ${
                      new Date(appointment.availability_to).getHours() >= 12
                        ? "PM"
                        : "AM"
                    }`}
                  </p>
                </div>
              </div>
            )}

            <ButtonComponentWithoutArrow
              label={
                appointment.work_status === "Active"
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
