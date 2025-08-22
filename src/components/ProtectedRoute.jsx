// // src/components/ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowedRole }) => {
//   const role = localStorage.getItem("role");

//   if (!role) {
//     // Not logged in
//     return <Navigate to="/login" replace />;
//   }

//   if (role !== allowedRole) {
//     // Wrong role trying to access another dashboard
//     return <Navigate to="/login" replace />;
//   }

//   //Correct role, render the protected page
//   return children;
// };

// export default ProtectedRoute;



import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, expectedRole }) => {
  const role = localStorage.getItem("role"); // ✅ handled here

  if (!role) {
    // 🚫 not logged in
    return <Navigate to="/login" replace />;
  }

  if (role !== expectedRole) {
    // 🚫 wrong role
    return <Navigate to="/login" replace />;
  }

  // ✅ correct role
  return children;
};

export default ProtectedRoute;
