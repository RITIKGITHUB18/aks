import React, { useEffect } from "react";
import { supabase } from "../helper/supabaseConfig";
import { useNavigate } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const { data, error } = await supabase.auth.getSessionFromUrl({
          storeSession: true,
        });
        if (error) {
          console.error("Error getting session:", error.message);
          navigate("/login");
        } else {
          console.log("Session Data:", data);
          navigate("/phone-auth");
        }
      } catch (err) {
        console.error("Unexpected error during auth callback:", err);
        navigate("/login");
      }
    };

    handleAuth();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#090D14] text-white">
      <div className="flex items-center justify-center h-screen">
        <FallingLines
          color="#3579DD"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    </div>
  );
};

export default AuthCallback;
