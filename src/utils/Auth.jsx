import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth'; // Your authentication hook

const ProtectedRoute = ({ children }) => {
  // const { isAuthenticated } = useAuth(); // Check if the user is authenticated
  const { isLoggedIn} = useSelector((state) => state.auth);

  // if (!isLoggedIn) {
  //   // Redirect the user to the login page if they are not authenticated
  //   return <Navigate to="/sign-in" replace />;
  // }

  // If the user is authenticated, allow them to access the route
  return children;
};

export default ProtectedRoute;
