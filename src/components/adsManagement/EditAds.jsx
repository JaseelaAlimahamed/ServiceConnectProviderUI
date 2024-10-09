import React, { useState, useRef } from 'react';
import Schedule from '../boostService/Schedule';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonComponent from '../reUsableComponents/ButtonComponent';
import EstimatedPrice from '../boostService/EstimatedPrice';
import TargetArea from '../boostService/TargetArea';
import InputFieldAds from './inputFieldAds';

const EditAdsPage = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  // Schedule states
  const [fromSchedule, setFromSchedule] = useState({ date: '', time: '' });
  const [toSchedule, setToSchedule] = useState({ date: '', time: '' });
  const [targetArea, setTargetArea] = useState('upto 5 km radius');

  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle file input click
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  // Schedule change handlers
  const handleFromSchedule = (name, value) => {
    setFromSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleToSchedule = (name, value) => {
    setToSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleTargetAreaChange = (value) => {
    setTargetArea(value);
  };

  return (
    <div className="bg-light-gray min-h-screen w-full max-w-2xl mx-auto p-4">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <ButtonComponent
          label="Add your image +"
          bgColor="bg-primary"
          fontColor="text-primary"
          onClick={handleButtonClick} // Handle button click to trigger file input
        />
        <ButtonComponent
          label="Status"
          btnColor="bg-complete-btn"
          fontColor="text-primary"
        />
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }} // Hide the file input
        onChange={handleImageUpload} // Handle image file selection
        accept="image/*"
      />

      {/* Display uploaded image */}
      {image && (
        <img
          src={image}
          alt="Uploaded"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      {/* Title and Description Input */}
      <InputFieldAds
        name="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <InputFieldAds
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Schedule Section */}
      <h3 className='text-secondary font-medium mt-6 ml-2'>Schedule</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* From Schedule */}
        <div className="w-full">
          <h3 className='text-secondary font-medium '>From</h3>
          <div className='ml-2'>
            <Schedule
              schedule={fromSchedule}
              onScheduleChange={handleFromSchedule}
            />
          </div>
        </div>

        {/* To Schedule */}
        <div className="w-full">
          <h3 className='text-secondary font-medium '>To</h3>
          <div className='ml-2'>
            <Schedule
              schedule={toSchedule}
              onScheduleChange={handleToSchedule}
            />
          </div>
        </div>
      </div>

      {/* Target Area and Estimated Price */}
      <div className="sm:flex w-full items-start mt-6 gap-4">
        <TargetArea
          targetArea={targetArea}
          onTargetAreaChange={handleTargetAreaChange}
        />
        <div className="w-full mt-4 sm:mt-0">
          <EstimatedPrice days={30} price={350} />
        </div>
      </div>

      {/* Confirm and Pay Button */}
      <div className="flex justify-center mt-8">
        <ButtonComponent
          label="Confirm and Pay"
          type="submit"
          btnHeight="h-[56px]"
          hasIcon={false}
        />
      </div>
    </div>
  );
};

export default EditAdsPage;
