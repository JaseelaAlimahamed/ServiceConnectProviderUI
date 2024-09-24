import React from 'react'
import HeaderWithprofile from '../components/reUsableComponents/RequestDetails/HeaderWithProfile'
import RequestDetailsCard from '../components/reUsableComponents/RequestDetails/RequestDetailsCard'
import RequestButton from '../components/reUsableComponents/RequestDetails/RequestButton'

const RequestDetailsPage = () => {
  return (
   
    <div className='bg-pagebg md:max-w-screen-sm mx-auto h-screen '>
        <HeaderWithprofile/>
        <RequestDetailsCard/>
        <RequestButton/>
    </div>
 
  )
}

export default RequestDetailsPage
