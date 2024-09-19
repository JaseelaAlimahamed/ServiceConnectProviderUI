import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NewPassword from '../pages/NewPassword'
import ForgotPassword from '../pages/ForgotPassword'



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/newpassword" element={ <NewPassword/>} />
        <Route path="/forgotpassword" element={ <ForgotPassword/>} />

      </Routes>
    </div>
  )
}

export default ProviderRoutes