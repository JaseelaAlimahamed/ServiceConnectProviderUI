import React from 'react'
import HeaderWithprofile from '../../components/reUsableComponents/ServiceRequestDetails/HeaderWithProfile'
import RequestDetailsCard from '../../components/reUsableComponents/ServiceRequestDetails/RequestDetailsCard'
import RequestButton from '../../components/reUsableComponents/ServiceRequestDetails/RequestButton'

const RequestDetailsPage = () => {
  return (
    <div className='bg-light-gray md:max-w-screen-lg mx-auto p-4'>
    <div className="flex flex-col md:flex-row md:justify-between gap-8">
  
      <div className="md:w-1/3">
        <HeaderWithprofile />
      </div>
  
    
      <div className="md:w-2/3">
        <RequestDetailsCard />
  

        <div className="mt-4">
          <RequestButton />
        </div>
      </div>
    </div>
  </div>
  
  //   <div className='bg-pagebg md:max-w-screen-sm mx-auto  '>
  //       <HeaderWithprofile/>
  //       <RequestDetailsCard/>
  //       <RequestButton/>
  //   </div>
 
   )
}

export default RequestDetailsPage
