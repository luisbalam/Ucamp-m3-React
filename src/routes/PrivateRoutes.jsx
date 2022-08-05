import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from '../context/UserContext';

function PrivateRoutes({ children }) {
  const { user: token } = useContext(UserContext);

  return token ? children : <Navigate to="/login" />;
}

export { PrivateRoutes };
