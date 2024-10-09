import React,{useState} from 'react'
import UserCard from './UserCard'
import BookingDetails from './BookingDetails'
import ButtonComponent from '../reUsableComponents/ButtonComponent'
import ComplaintInput from './ComplaintInput'

const ComplaintForm = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () =>{
    setIsOpen(prev => !prev)
  }

  const getApiCall = (type) => {
    console.log(type, "triggered")
  }

  const buttonConfig = [
    {type:"submit", label:"Service Status", btnWidth:"w-full", btnHeight:"h-[49px]", variant:"complaint"},
    {type:"submit", label:"Payment Status", btnWidth:"w-full", btnHeight:"h-[49px]", variant:"complaint"},

  ]

  const userDetails = {name:"Nurul Islam", subject:"Electrification 💪"}

  const bookingDetails = {id:"12aa21w",title:"Bulb Change", description:"asaf ds fdgs fsfdds ds",appoinment:{date:"Jun 10, 2024",time:"9:41 AM"}}


  return (
    <section>
      <div className="bg-light-gray min-h-screen w-full py-4 md:px-6 px-4">
          <div className='w-full lg:flex'>

          <div className='lg:w-1/5 w-full'>
          <UserCard userDetails={userDetails} />
          </div>

        <div className="md:flex lg:w-4/5 w-full md:space-x-3 m-auto">

          <div className='w-full md:w-1/2'>
          <BookingDetails bookingDetails={bookingDetails} />

          <div className="space-y-2 mt-4">
            {buttonConfig.map((btn, index) => (
              <ButtonComponent
                key={index}
                type={btn.type}
                label={btn.label}
                btnWidth={btn.btnWidth}
                btnHeight={btn.btnHeight}
                variant={btn.variant}
                onClick={()=>getApiCall(btn.label)}
              />
            ))}
          </div>

          </div>

          <div className="w-full md:w-1/2">
          <ComplaintInput isOpen={isOpen} onClose={onClose} getApiCall={getApiCall}/>
        </div>

          </div>
          </div>

      </div>
    </section>
  );
}

export default ComplaintForm