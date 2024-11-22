import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { completeBooking } from "../../services/StatusComplete";

function BookingsDetailsButtons({ id }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);

  const handleComplete = () => {
    setAction("complete");
    setShowModal(true);
  };

  const handleRegisterComplaint = () => {
    navigate(`/register-complaint/${id}`); // Corrected template literal
  };

  const handleDecline = () => {
    setAction("decline");
    setShowModal(true);
  };

  const handleConfirm = async () => {
    if (action === "complete") {
      try {
        await completeBooking(id); // Call the completeBooking function
        navigate("/bookings");
      } catch (error) {
        console.error("Failed to complete booking");
      }
    } else if (action === "decline") {
      navigate(`/${action}-form/${id}`); // Corrected template literal
    }
    setShowModal(false);
  };

  return (
    <div className="mx-6 my-4">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-bold">
              Are you sure you want to {action} this booking?
            </h2>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
        <button
          onClick={handleComplete}
          className="bg-complete-btn font-semibold text-white p-2 h-12 rounded-full w-full md:w-auto md:px-6"
        >
          Complete
        </button>
        <button
          onClick={handleRegisterComplaint}
          className="bg-decline-btn font-semibold text-white p-2 h-12 rounded-full w-full md:w-auto md:px-6"
        >
          Register Complaint
        </button>
        <button
          onClick={handleDecline}
          className="bg-decline-btn font-semibold text-white p-2 h-12 rounded-full w-full md:w-auto md:px-6"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default BookingsDetailsButtons;
