import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Logout from "../components/Logout/Logout";
import Posts from "../components/Posts/Posts";
import Categories from "../components/Categories/Categories";
import Checkout from "../components/Checkout/Checkout";
import { PrivateRoutes } from "./PrivateRoutes";

const RoutesComponent = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    <Route path="/" element={<h1>Welcome!</h1>} />
    <Route
      path="/posts"
      element={
        <PrivateRoutes>
          <Posts
            postList={[
              { title: "Nueva" },
              { title: "Otra" },
              { title: "Bien!!" },
            ]}
          />
        </PrivateRoutes>
      }
    />
    <Route
      path="/categories"
      element={
        <PrivateRoutes>
          <Categories />
        </PrivateRoutes>
      }
    />
    <Route
      path="/checkout"
      element={
        <PrivateRoutes>
          <Checkout />
        </PrivateRoutes>
      }
    />
    <Route
      path="/logout"
      element={
        <PrivateRoutes>
          <Logout />
        </PrivateRoutes>
      }
    />
  </Routes>
);

export default RoutesComponent;
