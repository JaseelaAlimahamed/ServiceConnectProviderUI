import React, { useState } from 'react';
import { IoArrowForward} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal'; // Import the reusable modal

function RequestButton() {
  const [isAcceptModalOpen, setAcceptModalOpen] = useState(false);
  const [isDeclineModalOpen, setDeclineModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAcceptShedule = () => {
    navigate('/booking-details');
  };

  const handleDecline = () => {
    navigate('/service-request');
  };

  return (
    <div className='mx-4 my-4 '>
      <div className="flex justify-center mt-4">
        <button 
          onClick={() => setAcceptModalOpen(true)} 
          className="bg-black font-semibold text-white p-2 h-16 mb-4 rounded-full w-full flex items-center justify-between text-center px-1"
        >
          <span className='flex-grow text-center margin-left-2'>Accept & Schedule</span>
          <IoArrowForward className=" bg-white rounded-full text-5xl text-black" />
        </button>
      </div>

      <div className="flex justify-center ">
        <button 
          onClick={() => setDeclineModalOpen(true)} 
          className="bg-declainbtn font-semibold text-white p-2 mb-4 h-16 rounded-full w-full"
        >
          Decline
        </button>
      </div>

      {/* Accept & Schedule Confirmation Modal */}
      <ConfirmationModal
        isOpen={isAcceptModalOpen}
        title="Confirm Schedule"
        content="Are you sure you want to accept and schedule this request?"
        onConfirm={handleAcceptShedule}
        onCancel={() => setAcceptModalOpen(false)}
      />

      {/* Decline Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeclineModalOpen}
        title="Confirm Decline"
        content="Are you sure you want to decline this request?"
        onConfirm={handleDecline}
        onCancel={() => setDeclineModalOpen(false)}
      />
    </div>
  );
}

export default RequestButton;
