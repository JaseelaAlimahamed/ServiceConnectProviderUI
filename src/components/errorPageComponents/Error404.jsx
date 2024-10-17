import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Error404 = () => {
  const navigate = useNavigate(); // Get the navigate function


  return (
    <div className='min-h-screen bg-dark-gray font-heading flex items-center justify-center'>
        <div className="text-center text-primary">
            <h1 className='text-light-yellow text-6xl'>404</h1>
            <h6 className='mt-4'>Ooops...</h6>
            <div className='flex items-center mt-32 border-4 rounded-lg px-3 py-1'>
            <h3 className=' mr-2'>Let's try something different</h3>
            <button onClick={()=> navigate(-1)}>
            <FaArrowRightLong size={18}/>
            </button>

            </div>
        </div>
    </div>
  )
}

export default Error404