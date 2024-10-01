import React from 'react'

const BookingDetails = ({bookingDetails}) => {

    const {id,title, description,appoinment} = bookingDetails
  return (

     <div className='bg-primary p-5 rounded-3xl mt-1 shadow-boxshadow-1'>
     <p className='text-id-gray text-lg font-semibold'>Booking Id : {id}</p>

     <div className='pt-2'>
         <h3 className='font-semibold'>Title</h3>
         <h4 className='ml-5  font-semibold'>{title}</h4>

         <h3 className='font-semibold'>Description</h3>
         <h4 className='font-semibold ml-5'>{description}</h4>

         <h3 className='font-semibold'>Appointment</h3>
         <div className="flex flex-wrap gap-2 ml-[50px] sm:ml-[90px]">

             <span className='text-lg font-semibold rounded-lg px-4 py-2 bg-[#7878801F] shadow-boxshadow-1'>{appoinment.date}</span>
             <span className='text-lg font-semibold rounded-lg px-4 py-2 bg-[#7878801F] shadow-boxshadow-1'>{appoinment.time}</span>

         </div>

         <div className="overflow-x-auto text-[#303972] pt-2">
             <table className='w-full'>
                 <caption className='text-left font-bold'>Invoice</caption>
                 <thead>
                     <tr>
                         <th className='text-left'>Sl.No</th>
                         <th className='text-left'>Description</th>
                         <th className='text-left'>Quantity</th>
                         <th className='text-left'>Price</th>
                         <th className='text-left'>Total</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr className='font-bold'>
                         <td>1</td>
                         <td>{title}</td>
                         <td>1</td>
                         <td>300</td>
                         <td>300</td>
                     </tr>
                    
                 </tbody>
             </table>
             <div className='text-right mt-12'>
             <span className='mr-10 font-bold'>Grand Total  300</span>
             </div>
         </div>
         <div className='text-[#303972] lg:flex lg:mt-2'>
            <div>
         <p>Terms and conditions</p>
         <p className='ml-6'>Valid up to 1 month</p>
         
         <div className="flex py-1">
         <span className='text-sm font-semibold text-[#EC221F] mr-2'>Additional requirements</span>
         <img src="/complaintformAlert-icon.svg" alt="" />
         </div>
            </div>
            <div>
         <p className='ml-5'>Provide Ladder</p>
         <p className='ml-5'>Bulb should be provided</p>
            </div>

         </div>


     </div>

 </div>
  )
}

export default BookingDetails