import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonComponent from '../reUsableComponents/ButtonComponent';
import InputFieldAds from './inputFieldAds';
import { FaCalendarAlt } from "react-icons/fa";

const EditAdsPage = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('12:00');
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState('12:00');
  const [targetArea, setTargetArea] = useState('upto 5 km radius');
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Step 2: Trigger the file input click
  };

  return (
    <div className="bg-light-gray min-h-screen w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <ButtonComponent
          label="Add your image +"
          bgColor="bg-primary"
          fontColor="text-primary"
          onClick={handleButtonClick} // Step 3: Handle button click to trigger file input
        />
        <ButtonComponent
          label="Status"
          bgColor="bg-statusopened"
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
      {image && <img src={image} alt="Uploaded" className="w-full h-40 object-cover rounded-lg mb-4" />}

      {/* Title and Description Input */}
      {/* Title Field */}
      <InputFieldAds
        name="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Description Field */}
      <InputFieldAds
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Schedule Section */}
      <div className="mb-4">
        <h4 className="text-black-500 font-semibold ">Schedule</h4>
        <div className="flex space-x-2">
          <div className="flex-1">
            <label className="block text-black-500 mb-1 font-semibold">From</label>
            <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-2 border rounded-lg" 
            />
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            
            <TimePicker
              value={startTime}
              onChange={setStartTime}
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-500 mb-1">To</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full p-2 border rounded-lg"
            />
            <TimePicker
              value={endTime}
              onChange={setEndTime}
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>
        </div>
      </div>

      {/* Target Area Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-500 mb-1">Target Area</label>
        <select
          value={targetArea}
          onChange={(e) => setTargetArea(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="upto 5 km radius">upto 5 km radius</option>
          <option value="upto 10 km radius">upto 10 km radius</option>
          <option value="upto 20 km radius">upto 20 km radius</option>
        </select>
      </div>

      {/* Price and Days Info */}
      <div className="mb-4 text-gray-500">
        <p>Total number of Days: 30</p>
        <p>Estimated Price: Rs 350/-</p>
      </div>

      {/* Confirm Button */}
      <button className="w-full bg-black text-white py-3 rounded-lg">
        Confirm and Pay
      </button>
    </div>
  );
};

export default EditAdsPage;
