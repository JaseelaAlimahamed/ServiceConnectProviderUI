import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AllowLocationComponent from '../components/reUsableComponents/AllowLocationComponent'



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/location" element={<AllowLocationComponent/>} />

      </Routes>
    </div>
  )
}

export default ProviderRoutes