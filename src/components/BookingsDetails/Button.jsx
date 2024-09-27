
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingsDetailsButtons({ id }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);

  const handleComplete = () => {
    setAction('complete');
    setShowModal(true);
  };

  const handleRegisterComplaint = () => {
    navigate('/register-complaint');
  };

  const handleDecline = () => {
    setAction('decline');
    setShowModal(true);
  };

  const handleConfirm = () => {
    console.log(`API called for ${action} action on Booking ID: ${id}`);
    navigate('/booking-page');
  };

  return (
    <div className='mx-12 my-4'>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-bold">Are you sure you want to {action} this booking?</h2>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowModal(false)} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
                Cancel
              </button>
              <button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-center mt-4">
        <button onClick={handleComplete} className="bg-complete-btn font-semibold text-white p-2 h-12 rounded-full w-full">
          Complete
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleRegisterComplaint} className="bg-decline-btn font-semibold text-white p-2 h-12 rounded-full w-full">
          Register Complaint
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleDecline} className="bg-decline-btn font-semibold text-white p-2 mb-4 h-12 rounded-full w-full">
          Decline
        </button>
      </div>
    </div>
  );
}

export default BookingsDetailsButtons;
