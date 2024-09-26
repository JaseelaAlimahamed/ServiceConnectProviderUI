import React from 'react';
import { useParams } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { requestsData } from '../../../assets/fake-data';  


function HeaderWithprofile() {
  const { id } = useParams(); 

  
  const request = requestsData.find(req=>req.id.toString() === id);

  if (!request) {
    return <p>Request not found.</p>;
  }

  return (
    <div className="flex justify-center md:max-w-screen-sm mx-auto bg-light-gray lg:mt-4">
      <div className="bg-light-gray w-full">
        <div className="flex items-center mb-2 space-x-4 my-6 mx-6">
          <img 
            src="https://imgs.search.brave.com/WJZSVWQyBEAcO0uXi7GiTB9odMU4ut6spQo2v6byBDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NzA4NDQxOS9waG90/by9wb3J0cmFpdC1v/Zi1oYXBweS1tYXR1/cmUtd29tZW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVRW/ak5iSHlyU1ZKN1hj/VFpONi1sSG1JdEhJ/RjB2VnpjSXZPWXlY/QVBwOGs9" 
            alt="Profile" 
            className="w-16 h-16 rounded-full" 
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">{request.customer}</h2>
            <div className="flex items-center text-secondary font-medium">
              <MdLocationPin className="text-xl mr-0" />
              <p>{request.location}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-1 mx-6 font-semibold">
          <p className="text-sm text-id-gray text-daytime">Booking ID: {request.id}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderWithprofile;
