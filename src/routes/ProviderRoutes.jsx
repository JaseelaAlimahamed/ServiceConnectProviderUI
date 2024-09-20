import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NewPassword from '../pages/NewPassword'
import ForgotPassword from '../pages/ForgotPassword'
import OTPPage from '../pages/ForgotOtp'



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/newpassword" element={ <NewPassword/>} />
        <Route path="/forgotpassword" element={ <ForgotPassword/>} />
        <Route path="/otp" element={ <OTPPage/>} />

      </Routes>
    </div>
  )
}

export default ProviderRoutes