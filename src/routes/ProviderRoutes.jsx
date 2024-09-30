import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'



import ComplaintPage from '../pages/ServiceProviderPages/ComplaintFormPage';
import AdsManagementPage from '../pages/managementPages/AdsManagementPage';





function ProviderRoutes() {
  return (
    <div>
      <Routes>
 
   

        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/adsmanagement" element={<AdsManagementPage />} />
 
    

   
      </Routes>

    </div>
  )
}

export default ProviderRoutes