import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../helper/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }
  console.log("printing from ProtectRoute user: ", user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
