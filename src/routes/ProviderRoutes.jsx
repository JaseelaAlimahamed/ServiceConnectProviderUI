import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'




import BoostServicePage from '../pages/BoostServicePage'
import Complaint from '../pages/Services/ComplaintPage'
import Decline from '../pages/Services/DeclinePage'
import AdsMana from '../pages/managementPages/AdsManagementPage'


function ProviderRoutes() {
  return (
    <div>
      <Routes>

 
   

        <Route path="/boostservice" element={<BoostServicePage />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/decline" element={<Decline />} />
        <Route path="/adsmanagement" element={<AdsMana />} />

      </Routes>

    </div>
  )
}

export default ProviderRoutes