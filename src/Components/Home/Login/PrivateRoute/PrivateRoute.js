import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  if (!user.email) {
    return <Navigate to="/login" replace state={{ from: rest.location }} />;
  }

  return (
    <Routes>
      <Route {...rest} element={children} />
    </Routes>
  );
};

export default PrivateRoute;
