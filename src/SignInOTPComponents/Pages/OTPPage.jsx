import React from "react";
import OTPComponent from "../../components/reUsableComponents/OtpComponent";


const OTPPage = () => {
    return (
        <div className="min-h-screen bg-light-gray flex items-center justify-center">
            <OTPComponent />
        </div>
    );
};

export default OTPPage;

// import React, { useState } from 'react';
// import OTPComponent from '../../components/reUsableComponents/OtpComponent';
// import ResendOTPComponent from '../../components/reUsableComponents/ResendOtpComponent' // Adjust the path as needed



// const OTPPage = () => {
//     const [otp, setOtp] = useState(''); // State to hold the entered OTP

//     // Function to handle OTP resend logic
//     const handleResendOTP = async () => {
//         try {
//             // Placeholder for API call to resend OTP
//             // await axios.post('/api/resend-otp', { userId });
//             console.log('Resending OTP...');
//         } catch (error) {
//             console.error('Error resending OTP:', error);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle OTP verification logic
//         console.log('OTP submitted:', otp);
//     };

//     return (
//         <div className="min-h-screen bg-light-gray flex items-center justify-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-2xl">
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4">Enter OTP</h2>
//                 <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//                     <OTPComponent />
//                     <input
//                         type="text"
//                         value={otp}
//                         onChange={(e) => setOtp(e.target.value)}
//                         placeholder="Enter OTP"
//                         className="border border-gray-300 p-2 rounded"
//                         maxLength="4"
//                     />
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white p-2 rounded"
//                     >
//                         Verify OTP
//                     </button>
//                     <ResendOTPComponent onResend={handleResendOTP} />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default OTPPage;



