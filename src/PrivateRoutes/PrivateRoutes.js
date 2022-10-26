import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { Spinner } from "react-bootstrap";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  //prevent logout after refreshing page
  if (loading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }

  /* If user has logged in then it will check
   * It has uid then it will allow to go to private route defined
   */
  if (user && user.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoutes;
