import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingAppointment from "./BookingAppointment";
import { fetchBookings } from "../../service_providers_apis/api";

const BookingCardComponent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBookings()
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data, "Data");

  const handleViewDetails = (appointment) => {
    console.log(appointment.id);
    navigate(`/booking-detail/${appointment.booking_id}`, {
      state: { appointment: appointment },
    });
  };

  // Date to Day Format

  function formatDate(requestDate) {
    const date = new Date(requestDate);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const options = { weekday: "long" }; // For day of the week (e.g., "Monday")

    // Check if the date is Today
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "Today";
    }

    // Check if the date is Yesterday
    if (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    ) {
      return "Yesterday";
    }

    // Check if within the last week
    const daysDifference = (today - date) / (1000 * 60 * 60 * 24);
    if (daysDifference <= 6) {
      return date.toLocaleDateString("en-IN", options); // Day of the week (e.g., "Monday")
    }

    // Otherwise, display the full date in dd-mm-yyyy format
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div className="min-h-screen  bg-light-gray shadow-lg overflow-hidden">
      <div className="p-6 max-w-full bg-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {data.map((appointment) => (
            <div
              key={appointment.id}
              className="mb-8 mx-auto w-full h-auto"
              onClick={() => handleViewDetails(appointment)}
            >
              <BookingAppointment
                title={appointment.title}
                viewLink={appointment.viewLink}
                dateFrom={appointment.availability_from.slice(0, 10)}
                dateTo={appointment.availability_to.slice(0, 10)}
                bookingTimeFrom={new Date(
                  appointment.availability_from
                ).toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata", // GMT time to IST time format
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
                bookingTimeTo={new Date(
                  appointment.availability_to
                ).toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata", // GMT time to IST time format
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
                time={new Date(appointment.request_date).toLocaleTimeString(
                  "en-IN",
                  {
                    timeZone: "Asia/Kolkata", // GMT time to IST time format
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
                day={formatDate(appointment.request_date)}
                userName={appointment.customer_name}
                image={appointment.image}
                status={appointment.acceptance_status}
                bookingTime={appointment.request_date.slice(12, 20)}
                description={appointment.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingCardComponent;
