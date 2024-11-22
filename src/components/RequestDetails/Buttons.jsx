import React from 'react'
import { IoArrowForwardOutline} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Buttons({id}) {
  const navigate = useNavigate();

const handleAcceptShedule = () => {
  navigate(`/invoice/${id}`);
}
const handleDecline = () => {
    navigate(`/decline-form/${id}`);
}
  return (
    <div className='mx-4 my-4'>
       <div className="flex justify-center mt-4">
  <button onClick={handleAcceptShedule} className="bg-dark-gray font-semibold text-white p-2 h-16 rounded-full w-full flex items-center justify-between px-4">
    <span className='flex-grow text-center'>Accept & Schedule</span>
    <IoArrowForwardOutline className="text-black bg-white rounded-full text-4xl" />
  </button>
</div>
<div className="flex justify-center mt-4">
  <button onClick={handleDecline} className="bg-decline-btn font-semibold text-white p-2 mb-4 h-16 rounded-full w-full">
    Decline
  </button>
</div>
</div>

  )
}

export default Buttons