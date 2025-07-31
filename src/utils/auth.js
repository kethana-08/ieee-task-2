import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isMember = localStorage.getItem("ieee_member") === "true";
  return isMember ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
