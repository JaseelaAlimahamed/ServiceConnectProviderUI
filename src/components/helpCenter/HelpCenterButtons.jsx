import React from 'react'
import { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import GeneralButton from './GeneralButton';

function HelpCenterButtons() {
    const [activeButton,setActiveButton]=useState("General");
    
    const handleClick=(label) =>{
        setActiveButton(label);
    }
    
  return (
    <div>
    <div className='flex md:ml-6 mb-6 sm:gap-3 md:gap-8 lg:gap-12 xl:gap-12'>
         <ButtonComponent
        label="General"
        isActive={activeButton === "General"}
        onClick={()=>handleClick("General")}/>

         <ButtonComponent
        label="Account"
        isActive={activeButton === "Account"}
        onClick={()=>handleClick("Account")}/>

         <ButtonComponent
        label="Payment"
        isActive={activeButton === "Payment"}
        onClick={()=>handleClick("Payment")}/>

         <ButtonComponent
        label="Service"
        isActive={activeButton === "Service"}
        onClick={()=>handleClick("Service")}/>
        
    </div>

      
    <div>
        {activeButton==="General" && <GeneralButton/>}
        
         {/* Add button here */}

    </div>
    </div>
  )
}

export default HelpCenterButtons
