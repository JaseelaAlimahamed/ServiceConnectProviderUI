import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/reUsableComponents/RegisteredServices/Navbar'
import ProfileUserCard from '../components/reUsableComponents/ProfileUserCard';
import { SlArrowRight } from "react-icons/sl";
import {profileDetails, BottomSheet  } from './ProfileDetails';

const ProfilePage = () => {
    const userDetails = {
        name: 'James S. Hernandez',
        email: 'hernandex.redial@gmail.ac.in',
      };
      const navigate = useNavigate();

      const MenuItem = ({ icon, label, value, link }) => {
        return (
          <li 
          onClick={() => navigate(link)}
          className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-300 cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="text-xl text-gray-600">{icon}</div>
              <span className="text-gray-700 font-semibold">{label}</span>
            </div>
            <div className="flex items-center space-x-2">
              {value && <span className="text-black-500 font-semibold" >{value}</span>}
              <SlArrowRight  strokeWidth={90} />
            </div>
          </li>
        );
      };

    return (
        <div className="bg-light_gray min-h-screen w-full ">
        <Navbar 
        title="Profile" 
        search={true}
        /> 
        

      <div className="max-w-md bg-primary p-6 rounded-3xl shadow-md mt-10 mx-8 mb-3 relative">
        {/* UserCard with profile info */}
        <div className="relative flex flex-col items-center">
          <ProfileUserCard userDetails={userDetails} className="absolute -top-14 w-28 h-28 rounded-full border-4 border-white overflow-hidden"/>
        </div>

        {/* Menu Options */}
        <div className="mt-6">
          <ul className="space-y-4">
            
            {profileDetails.map((item,index)=>(
            <li className="profile-item" key={index}>
            <MenuItem icon={item.icon} label={item.label} value={item.value} link={item.link}/>
            </li> 
            ))}
         
          </ul>
          
        </div>
         
      </div>
      {/* Bottom Navigation */}
      <div className="  bg-medium_gray p-4 max-w-md rounded-2xl mx-8 mb-4">
        <div className="flex justify-around relative items-center">
          {BottomSheet.map((item,index)=>(
            <div key={index} className="flex flex-col items-center">
        <div className="text-2xl">{item.icon}</div> 
        <span className="mt-2 text-sm">{item.label}</span>
      </div>
          ))}
          
        </div>
      </div>
    </div>
    );
};

export default ProfilePage



