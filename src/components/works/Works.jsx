import React, { useState } from 'react'
import TabComponent from '../adsManagement/TabComponent';
import WorksCard from './WorksCard';
import workData from './worksData';

const Works = () => {
    const [activeTab, setActiveTab] = useState(true); 

    const onGoingWorkData = workData.filter((work)=>  work.workStatus === "ongoing" )  // Ongoing works
    const completedGoingWorkData = workData.filter((work)=>  work.workStatus === "completed" ) // Completed works

    
  return (
    <div className="w-full min-h-screen bg-light-gray font-input">

    <div className="py-6 px-2 lg:px-10 lg:w-4/5 m-auto pb-16">

      <TabComponent col1label="Ongoing" col2label="Completed" activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTab &&
          onGoingWorkData.map((work) => (
            <WorksCard key={work.id} workData={work} />
          ))}
        {!activeTab &&
          completedGoingWorkData.map((work) => (
            <WorksCard key={work.id} workData={work} />
          ))}
      </div>
    
    </div>

  </div>
  )
}

export default Works