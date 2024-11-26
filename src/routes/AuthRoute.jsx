import React from "react";
import ServiceProviderSignIn from "../Pages/ServiceProviderPages/signInPages/ServiceProviderSignIn";
import OTPPage from "../Pages/ServiceProviderPages/signInPages/OTPPage";
import ForgotPassword from "../Pages/ServiceProviderPages/signInPages/Forgotpassword";
import OtpForgotPasswordPage from "../Pages/ServiceProviderPages/signInPages/OtpForgotPasswordPage";
import AddProfilePage from "../Pages/ServiceProviderPages/signInPages/AddProfilePage";
import { Navigate } from "react-router-dom";

export const AuthRoute = [
  {
    path: "sign-in",
    element: <ServiceProviderSignIn />,
  },
  {
    path: "otp",
    element: <OTPPage />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "otp-forgot-password",
    element: <OtpForgotPasswordPage />,
  },
  {
    path: "fill-your-profile",
    element: <AddProfilePage />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" replace />, 
  },
];
