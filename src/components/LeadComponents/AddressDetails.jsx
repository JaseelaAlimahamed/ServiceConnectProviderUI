import React from 'react';

const AddressDetails = ({ user }) => {
  return (
    <div className="py-16 flex flex-col justify-center items-start">
      <h3>Name: {user.name}</h3>
      <h3>Address: {user.address}</h3>
      <h3>Pincode: {user.pincode}</h3>
      <h3>Land Mark: {user.landmark}</h3>
      <h3>Ph: {user.phone}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
};

export default AddressDetails;
