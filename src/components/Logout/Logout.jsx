import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { clearToken } = useContext(UserContext);
  useEffect(() => {
    clearToken();
  }, []);

  return (
    <Navigate to='/login' />
  )
}

export default Logout
