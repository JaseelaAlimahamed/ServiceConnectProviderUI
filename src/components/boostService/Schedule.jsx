import React from 'react';

const Schedule = ({schedule,onScheduleChange}) => {

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      onScheduleChange(name, value);
    };

  return (
    <div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-x-2 ">
            <div className="relative w-full">
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-3 pt-5 rounded-lg shadow-boxshadow-1 outline-none"
                value={schedule.date}
                onChange={handleInputChange}
              />
              <span className='absolute top-1 left-4 text-sm text-[#ABAFB1]'>Date</span>
            </div>
            <div className="relative w-full">
              <input
                type="time"
                name="time"
                required
                value={schedule.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pt-5 rounded-lg shadow-boxshadow-1 outline-none"
              />
              <span className='absolute top-1 left-4 text-sm text-[#ABAFB1]'>Time</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Schedule;
