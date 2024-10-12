
import React from 'react';
import { FaHeadphonesAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactCard = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center bg-primary shadow-md rounded-3xl h-20 px-4 my-6 mb-8 sm:mb-6 md:mb-4">
      <div className="text-2xl ml-6 mr-6">
        <Icon />
      </div>
      <div className="text-lg font-semibold">{title}</div>
    </div>
  );
};

export default ContactCard;