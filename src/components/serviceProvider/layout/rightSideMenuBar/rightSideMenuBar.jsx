import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const ProfileSidebar = ({ isRightSidebarOpen, toggleRightSidebar, onLogout }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const updateView = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateView);
        return () => window.removeEventListener('resize', updateView);
    }, []);

    const dataLink = [
        { label: 'My Profile', path: '/home' },
        { label: 'Request', path: '/service-request' },
        { label: 'My Services', path: '/my-services' },
        { label: 'Ad Management', path: '/advertisement' },
        { label: 'History', path: '/home' },
        { label: 'Financial Data', path: '/home' },
        { label: 'Settings', path: '/notification-settings' },
        { label: 'Leads', path: '/lead-details/:id' },
        { label: 'My Ratings', path: '/reviews' },
        { label: 'Complaint & Disputes', path: '/complaints' },
        { label: 'Financial Management', path: '/financial' },
        { label: 'Franchisee Details', path: '/franchise-details' },
    ];

    return (
        <div
            className={`fixed top-6 right-0 h-full w-[17rem] bg-dark-gray text-primary shadow-lg transition-transform duration-300 ease-in-out z-40 ${
                isMobile ? (isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full') : 'translate-x-0'
            }`}
        >
            {isMobile && (
                <button
                    onClick={toggleRightSidebar}
                    className="absolute top-4 right-4 text-gray-300 text-2xl focus:outline-none"
                >
                    &times;
                </button>
            )}
            <div className="p-6 flex flex-col h-full">
                <div className="mt-8 flex-grow overflow-y-auto pr-1">
                    <div className="flex items-center mb-4 mt-6">
                        <img
                            src="https://via.placeholder.com/60"
                            alt="User Profile"
                            className="rounded-full border-2 border-roundborder w-16 h-16"
                        />
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-roundborder">Stone Stellar</h2>
                            <p className="text-idyellow text-sm">UID: CUFRADEL10032</p>
                            <p className="text-textonline text-sm">Online</p>
                        </div>
                    </div>
                    <nav>
                        {dataLink.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) =>
                                    `block py-1 px-4 text-primary rounded cursor-pointer ${
                                        isActive ? 'bg-gray-500' : 'hover:bg-gray-500'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                    {isMobile && (
                    <div className="mt-20">
                     <button 
                        onClick={onLogout} 
                        className="w-full py-1 px-4 mb-2 text-primary hover:bg-gray-500 rounded flex items-center justify-center">
                        <FaSignOutAlt className='transform rotate-180 mr-2'/> Logout
                     </button>
                    </div>
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default ProfileSidebar;
