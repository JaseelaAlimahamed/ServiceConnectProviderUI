import React, { useState } from 'react';

function AppointmentDetailsSheduling({ onDone }) {
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
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date || !formData.time) newErrors.date = 'Date and time is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.quantity || isNaN(formData.quantity) || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be a positive number';
    }
    if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }
    if (!formData.terms) newErrors.terms = 'Terms are required';
    if (!formData.additional) newErrors.additional = 'Additional requirements are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDone = () => {
    if (validateForm()) {
      onDone(formData);
    }
  };

  const handleAddAnother = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <div>
      <div>
        <div className='ml-8 font-semibold'>
          <h1>Appointment</h1>
        </div>

        <div className="flex flex-col mt-2 mb-2 ml-8 mr-8">
          <div className="relative grid grid-cols-2 gap-4">
            <label className='absolute p-1 text-gray-500 -top-0 left-2'>Date</label>
            <div className="flex items-center justify-between bg-white rounded-xl">
              <input
                type="date"
                className="w-full p-5 text-sm font-semibold rounded-lg sm:text-sm sm:text-center text-medium-gray"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative flex flex-col">
              <label className="absolute p-1 -top-0 left-2 text-medium-gray">Time</label>
              <div className='flex items-center bg-white shadow-xl rounded-xl'>
                <input
                  type="time"
                  className="w-full p-5 text-sm font-semibold rounded-lg cursor-pointer text-medium-gray sm:text-sm sm:text-center"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                />
              </div>
            </div>

          </div>
          {errors.date && <span className="mt-1 text-xs text-red-500">{errors.date}</span>}

        </div>

        <div className='mb-2 ml-8 font-semibold'>
          <h1>Invoice</h1>
        </div>

        <div className=''>
          <div className="relative flex flex-col mb-4 ml-8 mr-8">
            <label className='absolute p-1 text-gray-500'>Description</label>
            <div className="flex items-center justify-between bg-white rounded-xl">
              <input
                type="text"
                placeholder='Plumbing'
                className="w-full p-5 text-sm rounded-lg text-secondary"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            {errors.description && <span className="mt-1 text-xs text-red-500">{errors.description}</span>}
          </div>
          <div className='grid sm:grid-cols-2'>
            <div className="relative flex flex-col mb-4 ml-8 mr-8 sm:mb-0 sm:mr-2">
              <label className='absolute p-1 text-gray-500'>Qty</label>
              <div className="flex items-center justify-between bg-white rounded-xl">
                <input
                  type="text"
                  placeholder='01'
                  className="w-full p-5 text-sm rounded-lg text-secondary"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </div>
              {errors.quantity && <span className="mt-1 text-xs text-red-500">{errors.quantity}</span>}
            </div>
            <div className="relative flex flex-col ml-8 mr-8 sm:ml-2">
              <label className='absolute p-1 text-gray-500'>Price</label>
              <div className="flex items-center justify-between bg-white rounded-xl">
                <input
                  type="text"
                  placeholder='300'
                  className="w-full p-5 text-sm rounded-lg text-secondary"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
              {errors.price && <span className="mt-1 text-xs text-red-500">{errors.price}</span>}
            </div>
          </div>
        </div>

        <div className='flex flex-col p-4 ml-8 mr-8 sm:ml-12 sm:mr-12'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='p-2 font-semibold text-center text-white rounded-full bg-medium-gray text-md'>
              <button className="w-full" onClick={handleAddAnother}>+ Add Another</button>
            </div>
            <div className='p-2 font-semibold text-center text-white rounded-full text-md bg-complete-btn'>
              <button className="w-full" onClick={handleDone}>Done</button>
            </div>
          </div>
        </div>

        <div className='grid sm:grid-cols-2'>
          <div className="relative flex flex-col ml-8 mr-8 sm:mr-2">
            <label className='absolute p-1 text-medium-gray'>Terms & Conditions</label>
            <div className="flex items-center justify-between bg-white rounded-none">
              <textarea
                placeholder='Need to provide keys'
                className="w-full p-5 text-sm rounded-lg text-secondary focus:outline-none"
                name="terms"
                value={formData.terms}
                onChange={handleInputChange}
              />
            </div>
            {errors.terms && <span className="mt-1 text-xs text-red-500">{errors.terms}</span>}
          </div>
          <div className="relative flex flex-col mt-4 ml-8 mr-8 sm:mt-0 sm:ml-2">
            <label className='absolute p-1 text-gray-500'>Additional Requirements</label>
            <div className="flex items-center justify-between bg-white rounded-none">
              <textarea
                placeholder='Need to help if need any!'
                className="w-full p-5 text-sm rounded-lg text-secondary focus:outline-none"
                name="additional"
                value={formData.additional}
                onChange={handleInputChange}
              />
            </div>
            {errors.additional && <span className="mt-1 text-xs text-red-500">{errors.additional}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetailsSheduling;
