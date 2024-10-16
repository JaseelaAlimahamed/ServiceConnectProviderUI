import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const AccessDenied403 = () => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className='min-h-screen bg-dark-gray font-heading flex items-center justify-center'>
    <div className="flex flex-col items-center text-center text-primary">
        <h1 className='text-light-yellow text-6xl'>403</h1>
        <h6 className='mt-6'>Access Denied</h6>
        <h6 className='sm:w-full w-1/2 mt-10'>Sorry, You don't have access to this page</h6>
        <div className='flex items-center mt-10 border-4 rounded-lg px-3 py-1 w-fit'>
        <h3 className='mr-2'>Go back to the Previous page</h3>
        <button onClick={()=> navigate(-1)}>
        <FaArrowRightLong size={18} />
        </button>
        </div>
    </div>
</div>
  )
}

export default AccessDenied403