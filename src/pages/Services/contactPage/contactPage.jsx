import React from 'react';
import ContactList from '../../../components/helpCenter/contactUs/contactUsList';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-light-gray flex flex-col items-center">
      <div className="w-full  mt-2">
        <ContactList />
      </div>
    </div>
  );
};

export default ContactPage;
