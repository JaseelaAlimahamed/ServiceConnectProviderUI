import React from 'react'
import CardComponent from './CardComponent'
import HelpCenterTabComponent from './HelpCenterTabComponent'

function HelpCenterComponent() {
  return (
    <div>
        <CardComponent Head="Help Center">
          <HelpCenterTabComponent/>
        </CardComponent>
       
      
    </div>
  )
}

export default HelpCenterComponent
