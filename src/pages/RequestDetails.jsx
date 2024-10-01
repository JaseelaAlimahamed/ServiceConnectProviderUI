import React from 'react'
import CardWithButton from '../components/RequestDetails/CardWithButton'
import HeaderWithprofile from '../components/RequestDetails/HeaderWithprofile'
import Buttons from '../components/RequestDetails/Buttons'

function RequestDetails() {
  return (
    <div className="bg-light-gray sm:bg-white min-h-screen">
      <div className="md:max-w-screen-sm mx-auto bg-light-gray ">
      <HeaderWithprofile/>
      <CardWithButton/>
      <Buttons/>
    </div>
    </div>
  )
}

export default RequestDetails
