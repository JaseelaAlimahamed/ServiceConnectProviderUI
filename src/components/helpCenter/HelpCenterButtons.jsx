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
    <div className='flex mb-6 gap-3'>
         <ButtonComponent
        label="General"
        btnHeight={44}
        btnWidth={83}
        isActive={activeButton === "General"}
        onClick={()=>handleClick("General")}/>

         <ButtonComponent
        label="Account"
        btnHeight={44}
        btnWidth={83}
        isActive={activeButton === "Account"}
        onClick={()=>handleClick("Account")}/>

         <ButtonComponent
        label="Payment"
        btnHeight={44}
        btnWidth={83}
        isActive={activeButton === "Payment"}
        onClick={()=>handleClick("Payment")}/>

         <ButtonComponent
        label="Service"
        btnHeight={44}
        btnWidth={83}
        isActive={activeButton === "Service"}
        onClick={()=>handleClick("Service")}/>
        
    </div>
    <div>
        {activeButton==="General" && <GeneralButton/>}

    </div>
    </div>
  )
}

export default HelpCenterButtons
