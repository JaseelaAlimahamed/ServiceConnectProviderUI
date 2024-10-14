import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import profile from '../../../../assets/images/profile.jpeg';
import active from '../../../../assets/images/active.jpeg';
import { SearchIcon, IconComponent, recentActivity, services, doughnutData, lineData  } from './DashBoardDetails';
const DashBoard = () => {
  

  

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      {/* Search Bar */}
      <div className="mt-4 flex justify-between items-center bg-medium-gray p-2 rounded-2xl shadow min-h-16">
        <div className="flex items-center space-x-2">
          
          <SearchIcon size={18} className='text-primary mx-2 '/>
          <input
            type="text"
            placeholder="Search for.."
            className="outline-none bg-medium-gray text-primary font-medium"
          />
        </div>
        <div className='bg-primary mx-2 rounded-xl'>
          <IconComponent size={24} className='text-secondary mx-2 my-2 divide-x-2 divide-y-2 '/>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {['Registered Services', 'Revived Quotes', 'Active Bookings', 'Requests'].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-3xl shadow">
            <p className="text-sm text-primary-500 font-bold">{item}</p>
            <p className="text-xl font-bold">12</p>
            <p className="text-base text-green-500 font-medium">+168.00%</p>
          </div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="font-bold text-center text-xl mb-7">Revenue by service</div>
          <Doughnut data={doughnutData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow mt-4">
          <Line data={lineData} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <button className="text-sm text-customPurple">See more</button>
          </div>

          {recentActivity.map((activity, index) => (
            <div key={index} className="mt-2 flex justify-between items-center bg-medium-gray p-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <img src={profile} alt="profilepic" className="w-6 h-6 rounded-full"/>
                <div>
                  <p className="text-sm text-primary">{activity.user}</p>
                  <p className="text-xs text-primary">{activity.status}</p>
                </div>
              </div>
              <p className="text-xs text-primary">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Services */}
      <div className="mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Services</h3>
          {services.map((service, index) => (
            <div key={index} className="mt-2 flex justify-between items-center bg-medium-gray p-2 rounded-lg">
              <div className="flex items-center space-x-2">
              <img src={active} alt="profilepic" className="w-6 h-6 rounded-full"/>
                <div>
                  <p className="text-sm text-primary">{service.name}</p>
                  <p className="text-xs text-primary">{service.customer}</p>
                </div>
              </div>
              <div >
              <p className="text-xs text-primary my-1">{service.time}</p>
              <p className="text-xs text-primary ">{service.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bookings */}
      <div className="mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Bookings</h3>
          {services.map((service, index) => (
            <div key={index} className="mt-2 flex justify-between items-center bg-medium-gray p-2 rounded-lg">
              <div className="flex items-center space-x-2">
              <img src={active} alt="profilepic" className="w-6 h-6 rounded-full"/>
                <div>
                  <p className="text-sm text-primary">{service.name}</p>
                  <p className="text-xs text-primary">{service.customer}</p>
                </div>
              </div>
              <div >
              <p className="text-xs text-primary my-1">{service.time}</p>
              <p className="text-xs text-primary ">{service.location}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Requests */}
      <div className="mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Requests</h3>
          {services.map((service, index) => (
            <div key={index} className="mt-2 flex justify-between items-center bg-medium-gray p-2 rounded-lg">
              <div className="flex items-center space-x-2">
              <img src={active} alt="profilepic" className="w-6 h-6 rounded-full"/>
                <div>
                  <p className="text-sm text-primary">{service.name}</p>
                  <p className="text-xs text-primary">{service.customer}</p>
                  
                </div>
              </div>
              <div >
              <p className="text-xs text-primary my-1">{service.time}</p>
              <p className="text-xs text-primary ">{service.location}</p></div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
