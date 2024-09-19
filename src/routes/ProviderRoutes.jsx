import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Navigate to="/ServiceRequestPage" />} />

      </Routes>
    </div>
  )
}

export default ProviderRoutes