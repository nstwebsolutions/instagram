import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const IsUserLoggedIn = ({ user, loggedInPath, children }) => {
  if (!user) {
    return children;
  }
  if (user) {
    return <Navigate to={{ pathname: loggedInPath }} />;
  }
};

export default IsUserLoggedIn;

IsUserLoggedIn.protoTypes = {
  user: PropTypes.object,
  loggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
