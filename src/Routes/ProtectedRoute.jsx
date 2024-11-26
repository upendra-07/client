import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES_CONST } from "./RouteConstant";
import verifyToken from "../Utilities/VerifyToken";

const ProtectedRoute = ({ children, authentication }) => {
  let location = useLocation();
  const token = verifyToken(authentication);
  if (!token) {
    // User is not authenticated, redirect to the login page
    return <Navigate to={ROUTES_CONST.LOGIN} state={{ from: location }} />;
  }
  // User is authenticated, allow access to the private route
  return children;
};

export default ProtectedRoute;
