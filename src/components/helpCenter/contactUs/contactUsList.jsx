import React, { useState } from 'react';
import { FaHeadphonesAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ContactCard from './contactUsCard';

const contacts = [
  { title: 'Customer Services', icon: FaHeadphonesAlt },
  { title: 'WhatsApp', icon: FaWhatsapp },
  { title: 'Facebook', icon: FaFacebook },
  { title: 'Twitter', icon: FaTwitter },
  { title: 'Instagram', icon: FaInstagram },
];

const ContactList = () => {
const [activeTab,setActiveTab] = useState('contact');

  return (
    <div className="">
      <div>
        <div className='flex justify-between mb-10 lg:mb-14'>
            <button
            onClick={() => setActiveTab('faq')} 
            className={`w-1/2 py-3 border-b-4 text-center font-semibold ${activeTab == 'faq' ? 'bg-white border-divider-pri text-secondary' : 'border-divider-clr text-nonactive-btn' }`}
            >FAQ</button>
            <button onClick={() => setActiveTab('contact')}
            className={`w-1/2 py-3 border-b-4 text-center font-semibold ${activeTab == 'contact' ? 'bg-white border-divider-pri text-secondary' : 'border-divider-clr text-nonactive-btn'}`}
            >CONTACT US</button>
        </div>
        <div>
            {activeTab == 'contact' ? (
              <div className='px-4 lg:px-44'>
                {contacts.map((contact, index) => (
                <ContactCard key={index} title={contact.title} icon={contact.icon} />
                ))}
              </div>  
            ) : (
                <div className='text-center py-20 font-bold text-5xl'>THIS IS FAQ TAB</div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
