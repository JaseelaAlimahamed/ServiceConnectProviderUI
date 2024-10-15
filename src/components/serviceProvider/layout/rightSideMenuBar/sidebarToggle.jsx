import { useState, useEffect } from 'react';
import SidebarContent from './sidebarContent';

const SidebarToggle = () => {
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
      {/* Navbar dummy with profile icon */}
      <nav className="w-full bg-dark-gray text-primary p-1 flex justify-between items-center fixed top-0 left-0 z-50">
        <div className="text-lg ml-8 ">Rightsidebar</div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-primary focus:outline-none"
        >
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12"
          />
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? `fixed top-[64px] right-0 h-full w-80 bg-dark-gray text-primary shadow-lg transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300 ease-in-out z-40`
            : 'fixed top-[64px] right-0 h-[calc(100vh-64px)] w-80 bg-dark-gray text-primary shadow-lg'
        }`}
      >
        <SidebarContent
          isMobile={isMobile}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          handleNavClick={handleNavClick}
          activeSection={activeSection}
        />
      </div>

      {/* Main Content */}
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
        {activeSection === 'history' && <History />}
        {activeSection === 'financedata' && <FinancialData />}
        {activeSection === 'settings' && <Settings />}
        {activeSection === 'leads' && <Leads />}
        {activeSection === 'myratings' && <MyRatings />}
        {activeSection === 'complaintdisputes' && <ComplaintAndDisputes />}
        {activeSection === 'financemanage' && <FinancialManagement />}
        {activeSection === 'franchise' && <FranchiseeDetails />}
      </div>
    </div>
  );
};
const ProfileContent = () => <div>prolile contents goes here</div>
const RequestContent = () => <div>Request Content</div>
const ServicesContent = () => <div>Services Content</div>
const AdManageContent = () => <div>Ad Management Content</div>
const History = () => <div>history page goes here</div>
const FinancialData = () => <div>finance data goes here</div>
const Settings = () => <div>settings</div>
const Leads = () => <div> leads</div>
const MyRatings = () => <div>ratings page</div>
const ComplaintAndDisputes = () => <div>complaintss</div>
const FinancialManagement = () => <div>finance manage</div>
const FranchiseeDetails = () => <div>franchise details goes</div>

export default SidebarToggle;
