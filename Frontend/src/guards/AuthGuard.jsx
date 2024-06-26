import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <div>{children}</div>;
}

export default AuthGuard;
