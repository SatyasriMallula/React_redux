import React from "react";
import { useAuth } from "./AuthUser";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
