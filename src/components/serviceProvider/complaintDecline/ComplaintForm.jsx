import React,{useState} from 'react'
import UserCard from '../../complaintServices/UserCard'
import BookingDetails from '../../complaintServices/BookingDetails'
import ButtonReusable from '../../complaintServices/Button'
import Navbar from '../../reUsableComponents/RegisteredServices/Navbar'
import ModalComponent from '../../reUsableComponents/ModalComponent'

const ComplaintForm = () => {

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () =>{
    setIsOpen(prev => !prev)
  }

  const getApiCall = (type) => {

    console.log(type, "triggered")
  }

  const buttonConfig = [
    {type:"submit", btnAction:"servicestatus", text:"Service Status", bgColor:"#1D1F2A", fontSize:"14px",width:"100%", height:"49px", hasIcon:false},
    {type:"submit",btnAction:"paymentstatus", bgColor:"#1D1F2A", text:"Payment Status", fontSize:"14px",width:"100%", height:"49px", hasIcon:false},

  ]

  const userDetails = {name:"Nurul Islam", subject:"Electrification 💪"}

  const bookingDetails = {id:"12aa21w",title:"Bulb Change", description:"asaf ds fdgs fsfdds ds",appoinemnt:{date:"Jun 10, 2024",time:"9.41 AM"}}


  return (
    <section>
      <Navbar
        title="COMPLAINT FORM"
        search={false}
        bgColor="bg-navbar"
        textColor="text-white"
      />

      <div className="bg-[#D9D9DB] min-h-screen w-full p-4">
        <div className="m-auto max-w-lg">
          <UserCard userDetails={userDetails} />
          <BookingDetails bookingDetails={bookingDetails} />
          <div className="space-y-2 mt-4">
            {buttonConfig.map((btn, index) => (
              <ButtonReusable
                key={index}
                type={btn.type}
                btnAction={btn.btnAction}
                text={btn.text}
                bgColor={btn.bgColor}
                width={btn.width}
                height={btn.height}
                hasIcon={btn.hasIcon}
                getApiCall={getApiCall}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <input
              type="text"
              placeholder="Title"
              className="h-14 px-4 py-2 shadow-[0px_4px_4px_0px_#00000040] rounded-xl border border-[#5E6366] outline-none"
            />

            <textarea
              placeholder="Description"
              className="min-h-40 px-4 py-2 shadow-[0px_4px_4px_0px_#00000040] rounded-xl border border-[#5E6366] outline-none"
            />

            <div className="relative bg-primary h-14 px-4 py-2 shadow-[0px_4px_4px_0px_#00000040] rounded-xl">
              <input
                type="file"
                className="opacity-0 absolute right-4 w-6 h-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
              />

              <img
                src="/uploadimg-icon.svg"
                alt="upload data"
                className=" absolute right-4 w-6 h-6 top-1/2 transform -translate-y-1/2 z-0"
              />
            </div>
          </div>

          <div className="mt-4" onClick={onClose}>
            <ButtonReusable
              type=""
              btnAction=""
              text="Conform Complaint"
              bgColor="#670200"
              fontSize="16px"
              width="100%"
              height="52px"
            />

            <ModalComponent
              isOpen={isOpen}
              onClose={onClose}
              width="300px"
              height="170px"
              children={
                <div className="flex items-center justify-center h-full">
                  <div>
                    <p className='text-center mb-4'>Are you sure your want to submit complaint?</p>
                    <ButtonReusable
                      getApiCall={getApiCall}
                      type="submit"
                      btnAction="submitcomplaint"
                      text="Conform Complaint"
                      bgColor="#1D1F2A"
                      fontSize="14px"
                      width="100%"
                      height="46px"
                    />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplaintForm