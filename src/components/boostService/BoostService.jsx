import React, { useState } from 'react'
import HeadCard from '../boostService/HeadCard';
import Schedule from '../boostService/Schedule';
import TargetArea from '../boostService/TargetArea';
import EstimatedPrice from '../boostService/EstimatedPrice';
import ButtonComponent from '../reUsableComponents/ButtonComponent';

const BoostService = () => {
  const [fromSchedule, setFromSchedule] = useState({
    date: '',
    time: '',
  });

  const [toSchedule, setToSchedule] = useState({
    date: '',
    time: '',
  });

  const [targetArea, setTargetArea] = useState('upto 5 km radius');

  const handleFromSchedule = (name,value) =>{
    setFromSchedule((prev)=> ({...prev,[name]:value}))
    
  }
  const handleToSchedule = (name,value) =>{
    setToSchedule((prev)=> ({...prev,[name]:value}))

  }

  const handleTargetAreaChange = (value) => {
    setTargetArea(value);
  };
  
  const getApiCall = (e) =>{
    e.preventDefault()
    const FormData= {
      fromDate:fromSchedule.date,
      fromTime:fromSchedule.time,
      toDate:toSchedule.date,
      toTime:toSchedule.time,
      targetArea:targetArea
    }
    console.log(FormData)
  }


  return (
    <div className="bg-light-gray min-h-screen">
      <div className="p-5 pt-20 max-w-screen-lg mx-auto">
        <HeadCard title="House Electrical" imgSrc="boostservice-img.png" />
      <form onSubmit={getApiCall}>

        <h3 className='text-secondary font-medium mt-6 ml-2'>Schedule</h3>
        <div className="md:flex">
          
        <div className="w-full">
          <h3 className='text-secondary font-medium '>From</h3>
          <div className='ml-2 '>
          <Schedule
            schedule={fromSchedule}
            onScheduleChange={handleFromSchedule}
          />

          </div>
        </div>
        <div className=" w-full">
          <h3 className='text-secondary font-medium '>To</h3>
          <div className='ml-2'>
          <Schedule schedule={toSchedule} onScheduleChange={handleToSchedule} />
          </div>
        </div>
        </div>
        <div className="sm:flex w-full items-end">
          
          <TargetArea
            targetArea={targetArea}
            onTargetAreaChange={handleTargetAreaChange}
          />
          <div className="w-full sm:ml-4 mt-3 md:mt-0">
            <EstimatedPrice days={30} price={350} />
          </div>
        </div>

        <div className="flex md:w-1/2 mt-8 mx-auto">
          <ButtonComponent
            label="Confirm and Pay"
            type="submit"
            btnHeight="h-[56px]"
            hasIcon={false}
          />
        </div>
      </form>
      </div>
    </div>
  );
}

export default BoostService