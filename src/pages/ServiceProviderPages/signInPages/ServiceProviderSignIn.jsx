import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignInProvider from "../../../components/serviceProvider/SignInComponents/SignInProvider";

const ServiceProviderSignIn = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      // Navigate to the previous page if logged in
      navigate(-1);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <SignInProvider />
    </div>
  );
};

export default ServiceProviderSignIn;
