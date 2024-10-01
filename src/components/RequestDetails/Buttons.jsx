import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const navigate = useNavigate();

const handleAcceptShedule = () => {
  navigate('/book-details');
}
const handleDecline = () => {
    navigate('/declined');
}
  return (
    <div className='mx-4 my-4'>
       <div className="flex justify-center mt-4">
  <button onClick={handleAcceptShedule} className="bg-navbar font-semibold text-white p-2 h-16 rounded-full w-full flex items-center justify-between px-4">
    <span className='flex-grow text-center'>Accept & Schedule</span>
    <IoArrowForwardCircleOutline className="text-black bg-white rounded-full text-5xl" />
  </button>
</div>

<div className="flex justify-center mt-4">
  <button onClick={handleDecline} className="bg-declainbtn font-semibold text-white p-2 mb-4 h-16 rounded-full w-full">
    Decline
  </button>
</div>

</div>

  )
}

export default Buttons
