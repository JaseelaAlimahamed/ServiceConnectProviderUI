import { useState, useEffect } from 'react';

const ProfileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    const [activeSection, setActiveSection] = useState('profile'); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        if (isMobile) {
            setIsOpen(false); 
        }
    };

    const updateView = () => {
        setIsMobile(window.innerWidth <= 768); 
    };

    useEffect(() => {
        window.addEventListener('resize', updateView);
        return () => window.removeEventListener('resize', updateView);
    }, []);

    const handleNavClick = (section) => {
        setActiveSection(section);
        closeSidebar(); 
    };
    return (
        <div className="relative min-h-screen flex">
            <nav className="w-full bg-dark-gray text-white p-1 flex justify-between items-center fixed top-0 left-0 z-50">
                <div className="text-lg ">Page Name</div>
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-full bg-gray-200 focus:outline-none"
                >
                    <img
                        src="https://via.placeholder.com/50" 
                        alt="Profile"
                        className="rounded-full w-12 h-12"
                    />
                </button>
            </nav>
            <div
                className={`${
                    isMobile
                        ? `fixed top-[64px] right-0 h-full w-80 bg-dark-gray text-white shadow-lg transform ${
                              isOpen ? 'translate-x-0' : 'translate-x-full'
                          } transition-transform duration-300 ease-in-out z-40`
                        : 'fixed top-[64px] right-0 h-[calc(100vh-64px)] w-80 bg-dark-gray text-white shadow-lg'
                }`}
            >
                {isMobile && (
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-4 right-4 text-gray-300 text-2xl focus:outline-none"
                    >
                        &times;
                    </button>
                )}
                <div className="p-6 overflow-y-auto h-[calc(100%-64px)] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://via.placeholder.com/60" 
                                alt="User Profile"
                                className="rounded-full border-2 border-[#FA5075] w-16 h-16"
                            />
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold text-[#FA5075]">Stone Stellar</h2>
                                <p className="text-[#F4C73E]">UID: CUFRADEL10032</p>
                                <p className="text-[#36C703]">Online</p>
                            </div>
                        </div>
                        <nav>
                            <div
                                onClick={() => handleNavClick('profile')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                My Profile
                            </div>
                            <div
                                onClick={() => handleNavClick('request')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Request
                            </div>
                            <div
                                onClick={() => handleNavClick('services')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                My Services
                            </div>
                            <div
                                onClick={() => handleNavClick('adManage')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Ad Management
                            </div>
                            <div
                                onClick={() => handleNavClick('history')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                History
                            </div>
                            <div
                                onClick={() => handleNavClick('financedata')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Financial Data
                            </div>
                            <div
                                onClick={() => handleNavClick('settings')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Settings
                            </div>
                            <div
                                onClick={() => handleNavClick('leads')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Leads
                            </div>
                            <div
                                onClick={() => handleNavClick('myratings')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                My Ratings
                            </div>
                            <div
                                onClick={() => handleNavClick('complaintdisputes')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Complaint & Disputes
                            </div>
                            <div
                                onClick={() => handleNavClick('financemanage')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Financial Management
                            </div>
                            <div
                                onClick={() => handleNavClick('franchise')}
                                className="block py-2 px-4 text-white hover:bg-gray-500 rounded cursor-pointer"
                            >
                                Francisee Details
                            </div>
                        </nav>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-2 px-4 text-white hover:bg-gray-500 rounded flex items-center justify-center">
                            <span className="mr-2">&#8592;</span> Logout
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    !isMobile
                        ? 'ml-auto mr-80 p-4 mt-[64px] w-[calc(100%-320px)]'
                        : 'p-4 mt-[64px]'
                }`}
            >
                {activeSection === 'profile' && <ProfileContent />}
                {activeSection === 'request' && <RequestContent />}
                {activeSection === 'services' && <ServicesContent />}
                {activeSection === 'adManage' && <AdManageContent />}
                {activeSection === 'history ' && <History />}
                {activeSection === 'financedata' && <financialData />}
                {activeSection === 'setting' && <Settings />}
                {activeSection === 'lead' && <Leads />}
                {activeSection === 'myratings' && <myRatings />}
                {activeSection === 'complaintdisputes' && <complaintAndDisputes />}
                {activeSection === 'financemanage' && <financialManagement />}
                {activeSection === 'franchise' && <franchiseeDeatails />}
              
            </div>
        </div>
    );
};
const ProfileContent = () => <div>Profile Content</div>;
const RequestContent = () => <div>Request Content</div>;
const ServicesContent = () => <div>Services Content</div>;
const AdManageContent = () => <div>Ad Management Content</div>;

export default ProfileSidebar;