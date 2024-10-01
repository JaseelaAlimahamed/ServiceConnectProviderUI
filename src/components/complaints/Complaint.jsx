import React, { useState } from 'react';
import Card from './ComplaintCard';
import Navbar from '../reUsableComponents/RegisteredServices/Navbar';

const ComplaintList = () => {

const [activeTab, setActiveTab] = useState('active');

const complaints = {
    active: [
        { id: 1, title: "Tap Repair", name: "Rose", bookingId: "B001", disputeStatus: "Pending", sideColor: "bg-purple-600" },
        { id: 2, title: "Electrical Issue", name: "John", bookingId: "B002", disputeStatus: "In Progress", sideColor: "bg-blue-600" },
        { id: 3, title: "Electrical Issue", name: "John", bookingId: "B002", disputeStatus: "In Progress", sideColor: "bg-yellow-300" },
    ],
    Closed: [
        { id: 3, title: "Plumbing Fix", name: "Alice", bookingId: "B003", disputeStatus: "Resolved", sideColor: "bg-green-500" },
        { id: 4, title: "Painting Job", name: "Bob", bookingId: "B004", disputeStatus: "Closed", sideColor: "bg-red-500" },
        { id: 5, title: "Painting Job", name: "Bob", bookingId: "B004", disputeStatus: "Closed", sideColor: "bg-red-500" },
    ],
};

return (
    <>
    <Navbar
      title="Complaints"
      search={true}
    />

        <div className="w-full h-screen pt-8 p-3 bg-slate-100">
            <div className='flex justify-center lg:w-full'>
                <div className="flex mb-7 bg-medium-gray p-1 w-full justify-evenly rounded-full font-bold overflow-hidden">
                    <button
                        className={`relative z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-full transition-colors duration-400 
                                ${activeTab === 'active' ? 'bg-white text-black font-semibold' : 'bg-transparent text-white'}`}
                        onClick={() => setActiveTab('active')}>
                        Active
                    </button>
                    <button
                        className={`relative z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-full transition-colors duration-400 
                                ${activeTab === 'Closed' ? 'bg-white text-black font-semibold' : 'bg-transparent text-white'}`}
                        onClick={() => setActiveTab('Closed')}>
                        Closed
                    </button>
                </div>
            </div>

            <div className='flex gap-5 flex-wrap justify-center pb-5'>
                {complaints[activeTab].map((detail) => (
                    <Card
                        key={detail.id}
                        title={detail.title}
                        name={detail.name}
                        bookingId={detail.bookingId}
                        disputeStatus={detail.disputeStatus}
                        sideColor={detail.sideColor}
                    />
                ))}
            </div>
        </div>
    </>
);
};

export default ComplaintList;
