import React from 'react';
import Button from '../reUsableComponents/ButtonComponent';
import { MdClose } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Card = ({ title, name, bookingId, disputeStatus, sideColor }) => {

    return (
    <div className="relative bg-white shadow-md p-4 w-full max-w-md rounded-[1.25rem] ">
        {/* Side color bar */}
        {sideColor && (
            <span
                className={`absolute top-0 left-0 w-[1.5rem] h-full rounded-s-[1.25rem]  ${sideColor}`}
            ></span>
        )}

        <div className="flex items-center justify-between mb-2 ml-6 ">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                    {/* <img src="" alt="userProfile" /> */}
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-blue-drk">{title}
                        <a href='/view' className='text-gray-500 text-sm ml-5'>View</a></h3>
                    <p className="text-sm text-gray-600">{name}</p>
                </div>
            </div>
            <button className='mb-6 text-xl text-gray-500' onClick={() => console.log('View clicked')}>
                <MdClose />
            </button>
        </div>

        <div className="text-sm text-gray-600 mb-2 ml-6">
            <p>Booking Id: {bookingId}</p>
            <p>Dispute Status: {disputeStatus}</p>
        </div>

        {/* Chat/Call Button */}
        <div className='flex justify-center'>
            <Button onClick={() => console.log('Chat/Call clicked')} 
                variant='complaint' label={"Call/Chat"} btnWidth={"w-3/4"}>
            </Button>
        </div>
    </div>
)};

export default Card;
