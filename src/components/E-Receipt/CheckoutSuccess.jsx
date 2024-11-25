import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CheckoutSuccess = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBackToHome = () => {
    navigate('/my-services'); // Navigate to the /services path
  };

  return (
    <div className='bg-gray-700 text-white flex justify-center items-center flex-row min-h-screen '>
      <div className='font-semibold text-2xl text-center'>
        <div className='mb-5 ml-2'>
          <img src="/Done.png" alt="Success" width={300} />
        </div>
        <h2>Service Registration Successful</h2>
        <div className='mt-10'>
          <button
            onClick={handleBackToHome}
            className="bg-none text-white py-2 px-4 rounded transition duration-200"
          >
            Back to Services
          </button>
        </div>
      </div> 
    </div>
  );
};

export default CheckoutSuccess;
