import React from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";

const Protected = ({ children }) => {
  const tkn = localStorage.getItem("token");

  if (!tkn) {
    return <Navigate to="/" replace />;
  }
  return <Header>{children}</Header>;
};

export default Protected;