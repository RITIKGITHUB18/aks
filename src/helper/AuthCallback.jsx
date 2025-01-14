// // src/pages/AuthCallback.js
// import React, { useEffect } from "react";
// import { supabase } from "./supabaseConfig";
// import { useNavigate } from "react-router-dom";

// const AuthCallback = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleAuth = async () => {
//       try {
//         const { data, error } = await supabase.auth.getSessionFromUrl();
//         console.log("AuthCallback - Data:", data);
//         console.log("AuthCallback - Error:", error);
//         if (error) {
//           console.error("Error getting session:", error.message);
//           navigate("/login");
//         } else {
//           console.log("DATA: ", data);
//           const { session } = data;
//           supabase.auth.setSession(session);
//           navigate("/welcome-to-aks");
//         }
//       } catch (error) {
//         console.error("Error during login", error);
//       }
//     };

//     handleAuth();
//   }, [navigate]);

//   return (
//     <div className="flex items-center justify-center h-screen bg-[#090D14] text-white">
//       <div>Loading...</div>
//     </div>
//   );
// };

// export default AuthCallback;

// src/pages/AuthCallback.js

import React, { useEffect } from "react";
import { supabase } from "../helper/supabaseConfig";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Extract session from URL
        const { data, error } = await supabase.auth.getSessionFromUrl({
          storeSession: true, // Automatically store session
        });

        if (error) {
          console.error("Error getting session:", error.message);
          navigate("/login"); // Redirect on error
        } else {
          console.log("Session Data:", data); // Log session data for debugging
          navigate("/welcome-to-aks");
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
      <div>Loading...</div>
    </div>
  );
};

export default AuthCallback;
