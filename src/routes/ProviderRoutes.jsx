import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'




import BoostServicePage from '../pages/BoostServicePage'


function ProviderRoutes() {
  return (
    <div>
      <Routes>

 
   

        <Route path="/boostservice" element={<BoostServicePage />} />

      </Routes>

    </div>
  )
}

export default ProviderRoutes