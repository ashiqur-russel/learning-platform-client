import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { Spinner } from "react-bootstrap";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user?.uid);
  let location = useLocation();
  if (loading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }
  if (user && user.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoutes;
