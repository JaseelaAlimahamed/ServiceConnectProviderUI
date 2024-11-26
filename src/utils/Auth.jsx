import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth'; // Your authentication hook

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn} = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  // If the user is authenticated, allow them to access the route
  return children;
};

export default ProtectedRoute;
