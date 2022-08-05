import React, { useEffect, useContext } from 'react';

// Import Provider
import { UserContext } from "../../context/UserContext";

import Nav from '../Nav/Nav'

const Layout = ({ children }) => {
  const { saveToken, clearToken } = useContext(UserContext)
  const verifyToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      saveToken(token);
    } else {
      clearToken();
    }
  }
  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout
