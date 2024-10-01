import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookingsDetailsButtons() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/completed');
  }
  const handleRegisterComplaint = () => {
    navigate('/complaint');
  }
  const handleDecline = () => {
    navigate('/decline');
  }
  return (
    <div className='mx-12 my-4'>
      <div className="flex justify-center mt-4">
  <button onClick={handleComplete} className="bg-completebtn font-semibold text-white p-2  h-12 rounded-full w-full">
    Complete
  </button>
</div>
<div className="flex justify-center mt-4">
  <button onClick={handleRegisterComplaint} className="bg-declainbtn font-semibold text-white p-2  h-12 rounded-full w-full">
    Register Complaint
  </button>
</div>
<div className="flex justify-center mt-4">
  <button onClick={handleDecline} className="bg-declainbtn font-semibold text-white p-2 mb-4 h-12 rounded-full w-full">
    Decline
  </button>
</div>
    </div>
  )
}

export default BookingsDetailsButtons
