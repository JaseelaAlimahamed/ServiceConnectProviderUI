import React from 'react'
import { BottomSheet } from '../../profileComponents/ProfileDetails'

const BottomNav = () => {
    return (
<div className="  bg-medium_gray p-4 max-w-md rounded-2xl mx-8 mb-4">
<div className="flex justify-around relative items-center">
  {BottomSheet.map((item,index)=>(
    <div key={index} className="flex flex-col items-center">
<div className="text-2xl">{item.icon}</div> 
<span className="mt-2 text-sm">{item.label}</span>
</div>
  ))}
  
</div>
</div>
    )
}
export default BottomNav