import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import CardComponent from '../components/reUsableComponents/CardComponent'



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/Booking" element={ <CardComponent/>} />
       
      </Routes>
    </div>
  )
}

export default ProviderRoutes