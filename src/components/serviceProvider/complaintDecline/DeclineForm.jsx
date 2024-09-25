import React,{useState} from 'react'
import UserCard from '../../complaintForm/UserCard'
import BookingDetails from '../../complaintForm/BookingDetails'
import ButtonComponent from '../../reUsableComponents/ButtonComponent'
import Navbar from '../../reUsableComponents/RegisteredServices/Navbar'
import DeclineInput from '../../complaintForm/DeclineInput'

const DeclineForm = () => {
    const [isOpen, setIsOpen] = useState(false)

  const onClose = () =>{
    setIsOpen(prev => !prev)
  }

  const getApiCall = (type) => {

    console.log(type, "triggered")
  }

  const buttonConfig = [
    {type:"submit", label:"Service Status",  width:"100%", height:"49px", hasIcon:false},
    {type:"submit", label:"Payment Status",width:"100%", height:"49px", hasIcon:false},

  ]

  const userDetails = {name:"Nurul Islam", subject:"Electrification 💪"}

  const bookingDetails = {id:"12aa21w",title:"Bulb Change", description:"asaf ds fdgs fsfdds ds",appoinment:{date:"Jun 10, 2024",time:"9:41 AM"}}


  return (
    <section>
      <Navbar
        title="DECLINE FORM"
        search={false}
        bgColor="bg-navbar"
        textColor="text-white"
      />
      

      <div className="bg-[#D9D9DB] min-h-screen w-full py-4 md:px-6 px-4">
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
                width={btn.width}
                height={btn.height}
                hasIcon={btn.hasIcon}
                onClick={()=>getApiCall(btn.label)}
              />
            ))}
          </div>

          </div>

          <div className="w-full md:w-1/2">
          <DeclineInput isOpen={isOpen} onClose={onClose} getApiCall={getApiCall}/>
        </div>

          </div>
          </div>

      </div>
    </section>
  );
}

export default DeclineForm