import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, redirectTo = "/" }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isLoggedIn) {
    // Redirect logged-in users to the desired page
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Render the children if not logged in
  return children;
};

export default ProtectedRoute;
