import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/features/authSlice";
import {
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaCrown,
} from "react-icons/fa";
import { AiOutlineLeft } from "react-icons/ai";
import NotificationButton from "./NotificationButton";
import Sidebar from "./Sidebar";
import ProfileSidebar from "../rightSideMenuBar/rightSideMenuBar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Directly use isLoggedIn from Redux state
  const { isLoggedIn } = useSelector((state) => state.auth);
  const profileName = "Stone Stellar";

  // Close the right sidebar when location changes
  useEffect(() => {
    setIsRightSidebarOpen(false);
  }, [location]);

  const toggleSidebar = () => {
    if (isLoggedIn) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const toggleRightSidebar = () => {
    if (isLoggedIn) {
      setIsRightSidebarOpen(!isRightSidebarOpen);
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Clear Redux auth state
    setIsSidebarOpen(false);
    setIsRightSidebarOpen(false);
    sessionStorage.removeItem("accessToken"); // Clear session storage token
    navigate("/signin");
  };

  const handleLogin = () => {
    navigate("/sign-in");
  };

  const pathParts = location.pathname.split("/");
  const pathName = pathParts[1] || "Home";
  const currentPage =
    pathName.charAt(0).toUpperCase() +
    pathName.slice(1).toLowerCase().replace(/-/g, " ");

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleOnClickNotification = () => {
    navigate("/notification");
  };

  return (
    <div className="mb-16">
      <nav className="bg-dark-gray z-50 fixed top-0 left-0 w-full">
        <div className="mx-auto px-2 lg:px-10">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button / Back button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => navigate(-1)}
                className="text-primary text-xl"
              >
                <AiOutlineLeft className="h-[20px] w-[20px]" />
              </button>
              {isLoggedIn && (
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-3xl p-1 text-primary hover:text-gray-300 focus:outline-none"
                  onClick={toggleSidebar}
                >
                  {isSidebarOpen ? (
                    <FaTimes className="h-3 w-3" />
                  ) : (
                    <FaBars className="h-4 w-4" />
                  )}
                </button>
              )}
              <h1 className="ml-1 text-primary font-semibold text-md">
                {currentPage}
              </h1>
            </div>

            {/* Logo and Company Name for larger screens */}
            <div className="hidden sm:flex flex-1 items-center justify-start">
              <img className="h-8" src="/vite.svg" alt="Company Logo" />
              <span className="ml-3 text-primary font-semibold text-xl">
                {currentPage}
              </span>
            </div>

            {/* Profile and Authenticated Views */}
            <div className="flex items-center pr-2 sm:ml-6">
              {isLoggedIn && (
                <NotificationButton onClick={handleOnClickNotification} />
              )}

              {isLoggedIn && (
                <div className="relative flex items-center">
                  <div className="flex flex-col items-center mr-4 ml-1 hidden sm:block">
                    <span className="text-roundborder text-lg text-center">
                      {profileName}
                    </span>
                    <span className="text-idyellow text-xs sm:block text-center">
                      Prime Member <FaCrown className="inline text-xs" />
                    </span>
                  </div>
                  <button onClick={toggleRightSidebar}>
                    <img
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:ring-1 hover:ring-blue-500"
                      src="/profileImage.svg"
                      alt="Profile"
                    />
                  </button>
                </div>
              )}

              {!isLoggedIn ? (
                <NavLink
                  onClick={handleLogin}
                  className="text-primary px-4 py-2 flex items-center hover:bg-gray-700 rounded"
                >
                  Sign In <FaSignInAlt className="ml-2" />
                </NavLink>
              ) : (
                <NavLink
                  onClick={handleLogout}
                  className="ml-4 text-primary px-4 py-2 hidden sm:flex items-center hover:bg-gray-700 rounded"
                >
                  Logout <FaSignOutAlt className="ml-2" />
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Sidebar Component */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isAuthenticated={isLoggedIn}
        onLogout={handleLogout}
      />
      {/* Right Sidebar Component */}
      {isLoggedIn && (
        <ProfileSidebar
          isRightSidebarOpen={isRightSidebarOpen}
          toggleRightSidebar={toggleRightSidebar}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default Navbar;
