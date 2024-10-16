import React, { useState } from 'react';
import HelpCenterButtons from './HelpCenterButtons';
import ContactUS from './ContactUS';

const HelpCenterTabComponent = () => {
    const [activeTab, setActiveTab] = useState('faq'); 

    const toggleButton = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className='flex mb-8'>
                <button 
                    onClick={() => toggleButton('faq')}
                    className={`bg-light-gray w-1/2 border-b-4 ${activeTab === 'faq' ? 'border-divider-pri' : 'border-transparent bg-primary'} h-[48px]`}>
                    FAQ
                </button>

                <button
                    onClick={() => toggleButton('contact')}
                    className={`w-1/2 border-b-4 ${activeTab === 'contact' ? ' border-divider-pri ' : 'border-transparent bg-primary'} h-[48px]`}>
                    CONTACT US
                </button>
            </div>
            {activeTab === 'faq' && <HelpCenterButtons />}
            {activeTab === 'contact' && <ContactUS />}
        </div>
    );
}

export default HelpCenterTabComponent;
