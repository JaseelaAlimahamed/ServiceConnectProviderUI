import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import RegisteredServices from '../pages/RegisteredServices'


function ProviderRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/Registered-Services" element={<RegisteredServices />} />
        <Route path="/" element={<Navigate to="/Registered-Services" />} />
      </Routes>
    </div>
  )
}

export default ProviderRoutes