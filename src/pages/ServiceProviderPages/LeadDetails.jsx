import React, { useState } from 'react'
import eclipse from '../../assets/images/Ellipse309.png'
import { FaLocationDot } from "react-icons/fa6";
import Button from '../../components/reUsableComponents/ServiceRequestList/Button';
import shape from '../../assets/images/shape.png'
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';
const LeadDetails = () => {
    const [tab,setTab]=useState(false)
    const [open,setOpen]=useState(false)
    ReactModal.setAppElement('#root');

    const booking={
        bookingId:'12aa21w',
        title:'Bulb Change',
        description:'Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, natus ullam assumenda, necessitatibus qui, beatae modi repella.',
        images:[shape],
        availabiliyFromdate:'June 10,2024',
        availabilityFromTime:'10PM',
         availabiliyTodate:'June 10,2024',
        availabilityToTime:'10PM'
    }
    const user={
        name:'Sharavanan',
        address:'Karthika Vilasam Kokkunnu',
        pincode:'306589',
        landmark:'Sanjaram Road',
        phone:'8252225222',
        email:'krk@email.com'


    }
    const navigate=useNavigate()
const handleDecline=()=>{
    navigate('/')

}
const handleAddress=()=>{
    setOpen(true)
    

}
const handleCall=()=>{

}
const handleCancel=()=>{
    setTab(true)
    setOpen(false)
}
const handleOk=()=>{
    setTab(false)
    setOpen(false)
}
  return (
    <div className='bg-light-gray font-daytime h-screen py-10'>
        
        <div className="flex flex-row justify-start p-3 items-center gap-3  border-b border-primary">
            <img src={eclipse} alt="" className='rounded-full aspect-square w-16 h-16'/>
            <div className="">
                <h2 className='text-lg font-semibold'>Marcus Lucus</h2>
                <div className="flex gap-2">
                <FaLocationDot />
                <p className='text-sm'>North Paravoor, Ellavam</p>
                </div>
            </div>
           
        </div>
        <p className='text-daytime text-sm mb-10 pl-4 pt-4'>Booking id: {booking.bookingId}</p>
        
            <div className="container mx-auto flex flex-col justify-center items-center  shadow-2xl w-8/12 max-lg:w-full  bg-primary rounded-2xl ">
                <div className="flex justify-between w-full border-b-2 px-3  border-light-gray font-semibold">
                    <div className={`flex justify-center items-center w-full cursor-pointer ${tab?'border-b-2 ':''} py-2 border-cardfont`}  onClick={()=>setTab(true)}>
                        <h3>Request</h3>
                    </div>
                    <div className={`flex justify-center items-center w-full cursor-pointer ${!tab?'border-b-2 ':''} py-2 border-cardfont`} onClick={handleAddress}>
                        <h3>Address</h3>
                    </div>
                </div>
                <div className="">

               
                <div className="p-4 font-daytime max-md:min-h-[450px] object-cover">
                    <div className={`${tab?'block':'hidden'}`}>
                        <div className="">
                            <h3 className='font-medium text-lg'>Title</h3>
                            <p className='text-cardfont text-sm '>{booking.title}</p>
                        </div>
                        <div className="">
                            <h3 className='font-medium'>Description</h3>
                            <p className='text-sm text-cardfont'>{booking.description}</p>
                        </div>
                        <div className="py-2">
                            <h3 className='font-medium'>Images & Video</h3>
                            {
                                booking.images.map((image,index)=>
                                <img key={index} src={image} alt="" className='w-20 h-20 rounded-full aspect-square object-cover'/>
                                )
                            }
                        </div>
                        <div className="">
                            <h3 className='font-medium'>Availability</h3>
                            <div className="">
                            <div className="">
                                 <h1 className='text-cardfont'>
                                    From
                                 </h1>
                                 <div className="flex gap-2">
                                    <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                                        {booking.availabiliyFromdate}
                                    </div>
                                    <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                                        {booking.availabilityFromTime}
                                    </div>
                                 </div>
                            </div>
                            <div className="">
                                 <h1 className='text-cardfont'>
                                    To
                                 </h1>
                                 <div className="flex gap-2">
                                    <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                                        {booking.availabiliyTodate}
                                    </div>
                                    <div className="bg-light-gray p-2 rounded-lg shadow-lg font-medium">
                                        {booking.availabilityToTime}
                                    </div>
                                 </div>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className={`${tab?'hidden':'block'} font-semibold py-4 flex flex-col justify-center items-start`}>
                        <h3 className=''>Name: {user.name}</h3>
                        <h3>Address: {user.address}</h3>
                        <h3>Pincode: {user.pincode}</h3>
                        <h3>Land Mark: {user.landmark}</h3>
                        <h3>Ph: {user.phone}</h3>
                        <h3>Email: {user.email}</h3>

                    </div>
                </div>
            </div>
            </div>
            <Button label={tab?'Decline':'Call'} color={tab?'declainbtn':'statusopened'} width='300px' onClick={tab?handleDecline:handleCall} />
            <ReactModal
      isOpen={open}
      onRequestClose={()=>setOpen(false)}
      
      style={{
        overlay: {
         margin:'',
         backgroundColor:'transparent',
          backdropFilter: 'blur(5px)', 
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "90%", 
          maxWidth: "500px", 
          padding: "20px", 
          borderRadius: "10px",
          textAlign: "center",
          backgroundColor: "#D9D9DB",
          
        },
      }}
    >
     
      <h2 className='font-heading font-medium tracking-wide text-lg mb-4' style={{ wordWrap: 'break-word', lineHeight: '1.5em' }}>
        By attending your lead, your balance will be reduced by one.
      </h2>
      
     
      <div className="flex gap-2 justify-center">

      <Button label={'Okay'} color={'dark-gray'} onClick={handleOk} width={'126px'} />
      <Button label={'Cancel'} color={'dark-gray'} onClick={handleCancel} width={'126px'}/>
      </div>

    </ReactModal>
        </div>

    
  )
}

export default LeadDetails