import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const ProtectedRoute = ({ user, children }) => {
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate to={{ pathname: ROUTES.LOGIN }} />;
  }
};

export default ProtectedRoute;

ProtectedRoute.protoTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
