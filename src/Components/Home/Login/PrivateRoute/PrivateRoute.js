import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user.email) {
    // Store the relevant information from window.location in a serializable format
    const currentLocation = window.location.pathname + window.location.search;

    return <Navigate to="/login" replace state={{ from: currentLocation }} />;
  }

  return children;
};

export default PrivateRoute;
