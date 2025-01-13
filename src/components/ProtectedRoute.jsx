import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../helper/AuthContext";
import { FallingLines } from "react-loader-spinner";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FallingLines
          color="#3579DD"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    );
  }
  console.log("printing from ProtectRoute user: ", user);
  return user ? <Outlet /> : <Navigate to="/getStarted" replace />;
};

export default ProtectedRoute;
