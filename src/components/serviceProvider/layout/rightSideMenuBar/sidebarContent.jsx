const SidebarContent = ({ isMobile, isOpen, toggleSidebar, handleNavClick, activeSection }) => {
    return (
      <>
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-light-gray text-2xl focus:outline-none"
          >
            &times;
          </button>
        )}
        <div className="p-6 overflow-y-auto h-[calc(100%-64px)] flex flex-col justify-between">
          <div>
            {/* Profile Info */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/60"
                alt="User Profile"
                className="rounded-full border-2 border-roundborder w-16 h-16"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-roundborder">Stone Stellar</h2>
                <p className="text-idyellow">UID: CUFRADEL10032</p>
                <p className="text-textonline">Online</p>
              </div>
            </div>
  
            {/* Navigation Links */}
            <nav>
              <div
                onClick={() => handleNavClick('profile')}
                className="block py-2 px-4 text-primary hover:bg-gray-500 rounded cursor-pointer"
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
  
          {/* Logout Button */}
          <div className="mt-6">
            <button className="w-full py-2 px-4 text-white hover:bg-gray-500 rounded flex items-center justify-center">
              <span className="mr-2">&#8592;</span> Logout
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default SidebarContent;
  