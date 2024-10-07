import React from 'react';
import { useParams } from 'react-router-dom';
import CardWithButton from '../../../components/RequestDetails/CardWithButton';
import HeaderWithProfile from '../../../components/RequestDetails/HeaderWithProfile';
import Buttons from '../../../components/RequestDetails/Buttons';

function RequestDetails() {
  const { id } = useParams();

  return (
    <div className="bg-light-gray min-h-screen flex items-center justify-center p-4">
      <div className="md:max-w-screen-sm w-full bg-light-gray rounded-lg shadow-md">
        {/* Pass the id as a prop */}
        <HeaderWithProfile id={id} />
        <CardWithButton id={id} />
        <Buttons id={id} />
      </div>
    </div>
  );
}

export default RequestDetails;
