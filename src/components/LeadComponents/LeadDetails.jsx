import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import BookingsDetalsPart from './BookingsDetalsPart';
import AddressDetails from './AddressDetails';
import ActionButton from './ActionButton';
import CustomModal from './CustomModal';
import { useNavigate, useParams } from 'react-router-dom';
import shape from '../../assets/images/shape.png';
import { getServiceRequestsDetails } from '../../services/providerAxios';
const LeadDetails = () => {
  const [tab, setTab] = useState(false);
  const [open, setOpen] = useState(false);
  const {id} = useParams()
  const booking = {
    bookingId: '12aa21w',
    title: 'Bulb Change',
    description: 'Lorem ipsum dolor sit amet...',
    images: [shape],
    availabiliyFromdate: 'June 10,2024',
    availabilityFromTime: '10PM',
    availabiliyTodate: 'June 10,2024',
    availabilityToTime: '10PM',
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServiceRequestsDetails(id); // Assuming it returns a promise
        console.log('Service Requests Details:', response);
      } catch (error) {
        console.error('Error fetching service requests details:', error);
      }
    };

    fetchData(); // Call the async function
    setTab(true); 
  }, []);
  const user = {
    name: 'Sharavanan',
    address: 'Karthika Vilasam Kokkunnu',
    pincode: '306589',
    landmark: 'Sanjaram Road',
    phone: '8252225222',
    email: 'krk@email.com',
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTab(true); 
  }, []);

  const handleDecline = () => navigate(`/decline-form/${booking.bookingId}`);
  const handleAddress = () => setOpen(true);
  const handleCall = () => {
    window.location.href = `tel:${user.phone}`;
  };
  const handleCancel = () => {
    setTab(true);
    setOpen(false);
  };
  const handleOk = () => {
    setTab(false);
    setOpen(false);
  };

  return (
    <div className='bg-light-gray font-daytime min-h-screen flex flex-col py-8'>
      <ProfileHeader />
      <p className='text-daytime text-sm mb-10 pl-4 pt-4'>Booking id: {booking.bookingId}</p>
      <div className="container mx-auto flex flex-col justify-center items-center flex-grow shadow-2xl w-8/12 bg-primary rounded-2xl p-4">
        <div className="flex justify-between w-full border-b-2 px-3 mb-4">
          <div className={`flex justify-center w-full cursor-pointer ${tab ? 'border-b-2' : ''} py-2`} onClick={() => setTab(true)}>
            <h3>Request</h3>
          </div>
          <div className={`flex justify-center w-full cursor-pointer ${!tab ? 'border-b-2' : ''} py-2`} onClick={handleAddress}>
            <h3>Address</h3>
          </div>
        </div>
        <div className="flex-grow overflow-auto">
          {tab ? <BookingsDetalsPart booking={booking} /> : <AddressDetails user={user} />}
        </div>
      </div>
      <ActionButton 
        label={tab ? 'Decline' : 'Call'} 
        color={tab ? 'decline-btn' : 'complete-btn'} 
        width="300px" 
        onClick={tab ? handleDecline : handleCall} 
      />
      <CustomModal open={open} onRequestClose={() => setOpen(false)} onOk={handleOk} onCancel={handleCancel} bookingId={booking.bookingId} />
    </div>
  );
};

export default LeadDetails;
