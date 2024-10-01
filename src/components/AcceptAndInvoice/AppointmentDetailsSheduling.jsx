import React, { useState } from 'react';

function AppointmentDetailsSheduling() {
  // Initial form state
  const initialFormData = {
    date: '',
    time: '',
    description: '',
    quantity: '',
    price: '',
    terms: '',
    additional: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleDone = () => {
    console.log(formData);
  };

  
  const handleAddAnother = () => {
    setFormData(initialFormData); 
  };

  return (
    <div>
      <div>
        <div className='font-semibold ml-8'>
          <h1>Appointment</h1>
        </div>

        <div className="flex flex-col mt-2 mb-2 ml-8 sm:ml-10 mr-8 sm:mr-10">
          <div className="grid grid-cols-2 relative gap-4">
            <label className='absolute -top-0 left-2 p-1 text-gray-500'>Date</label>
            <div className="flex items-center bg-white rounded-xl justify-between">
              <input
                type="date"
                placeholder='12/10/2000'
                className="font-semibold text-xl sm:text-2xl w-full rounded-lg p-5 sm:text-center text-gray-400"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              
            </div>
            <div className="flex flex-col relative">
              <label className="absolute -top-0 left-2 p-1 text-gray-500">Time</label>
              <div className='flex items-center shadow-xl bg-white rounded-xl'>
                <input
                  type="time"
                  placeholder="12:00 PM"
                  className="rounded-lg p-5 font-semibold text-gray-400 text-xl sm:text-2xl w-full sm:text-center cursor-pointer"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                />
                
              </div>
            </div>
          </div>
        </div>

        <div className='font-semibold ml-8 mb-2'>
          <h1>Invoice</h1>
        </div>

        <div className=''>
          <div className="flex mb-4 flex-col ml-8 mr-8 relative">
            <label className='absolute p-1 text-gray-500'>Description</label>
            <div className="flex items-center bg-white rounded-xl justify-between">
              <input
                type="text"
                placeholder='Plumbing'
                className="text-xl w-full rounded-lg p-5 text-secondary"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='grid sm:grid-cols-2'>
            <div className="flex flex-col mb-4 sm:mb-0 ml-8 mr-8 sm:mr-2 relative">
              <label className='absolute p-1 text-gray-500'>Qty</label>
              <div className="flex items-center bg-white rounded-xl justify-between">
                <input
                  type="text"
                  placeholder='01'
                  className="text-xl w-full rounded-lg p-5 text-secondary"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col sm:ml-2 ml-8 mr-8 relative">
              <label className='absolute p-1 text-gray-500'>Price</label>
              <div className="flex items-center bg-white rounded-xl justify-between">
                <input
                  type="text"
                  placeholder='300'
                  className="text-xl w-full rounded-lg p-5 text-secondary"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col p-4 ml-8 mr-8 sm:ml-12 sm:mr-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='bg-gray-600 rounded-full p-4 text-white text-xl font-semibold text-center'>
              <button className="w-full" onClick={handleAddAnother}>+ Add Another</button>
            </div>
            <div className='bg-completebtn rounded-full p-4 text-center text-xl font-semibold text-white'>
              <button className="w-full" onClick={handleDone}>Done</button>
            </div>
          </div>
        </div>

        <div className='grid sm:grid-cols-2'>
          <div className="flex flex-col ml-8 mr-8 sm:mr-2 relative">
            <label className='absolute p-1 text-gray-500'>Terms & Conditions</label>
            <div className="flex items-center bg-white rounded-xl justify-between">
              <textarea
                type="text"
                placeholder='Need to provide keys'
                className="text-xl w-full rounded-lg p-5 text-secondary"
                name="terms"
                value={formData.terms}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col sm:mt-0 mt-4 sm:ml-2 ml-8 mr-8 relative">
            <label className='absolute p-1 text-gray-500'>Additional Requirements</label>
            <div className="flex items-center bg-white rounded-xl justify-between">
              <textarea
                type="text"
                placeholder='Need to help if need any!'
                className="text-xl w-full rounded-lg p-5 text-secondary"
                name="additional"
                value={formData.additional}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetailsSheduling;
