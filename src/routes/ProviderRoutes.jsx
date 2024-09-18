import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'



function ProviderRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path='/addprofile' element={<AddProfilePage/>}/>

      </Routes>
    </div>
  )
}

export default ProviderRoutes