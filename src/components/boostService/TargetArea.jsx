import React from 'react';

const TargetArea = ({targetArea,onTargetAreaChange}) => {

    const handleTargetArea = (e) =>{
        onTargetAreaChange(e.target.value)
    }
  return (
    <div className="w-full">
      <h3 className='text-secondary font-medium text-lg my-2'>Target Area</h3>
      <select value={targetArea} onChange={handleTargetArea} className='text-secondary font-medium w-full p-3 shadow-boxshadow-1 rounded-lg outline-none '>
        <option className='text-secondary font-medium' value="upto 5 km radius">upto 5 km radius</option>
        <option className='text-secondary font-medium' value="upto 10 km radius">upto 10 km radius</option>
        <option className='text-secondary font-medium' value="upto 15 km radius">upto 15 km radius</option>
      </select>
    </div>
  );
};

export default TargetArea;
