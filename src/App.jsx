// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";

// // Pages
// import Login from "./pages/Login";
// import AdminDashboard from "./pages/AdminDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";
// import StudentDashboard from "./pages/StudentDashboard";
// import ParentDashboard from "./pages/ParentDashboard";
// import SuperAdminDashboard from "./pages/SuperAdminDashboard";

// // Super-Admin CRUD pages
// import CreateAdmin from "./pages/CreateAdmin";
// import ReadAdmins from "./pages/ReadAdmins";
// import UpdateAdmin from "./pages/UpdateAdmin";
// import DeleteAdmin from "./pages/DeleteAdmin";
// import SystemSettings from "./pages/SystemSettings";
// import Reports from "./pages/Reports";
// import ActivityLogs from "./pages/ActivityLogs";
// import SupportTickets from "./pages/SupportTickets";


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* === Auth Route === */}
//         <Route path="/login" element={<Login />} />

//         {/* === Admin Dashboard === */}
//         <Route
//           path="/admin/*"
//           element={
//             <ProtectedRoute expectedRole="admin">
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* === Teacher Dashboard === */}
//         <Route
//           path="/teacher/*"
//           element={
//             <ProtectedRoute expectedRole="teacher">
//               <TeacherDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* === Student Dashboard === */}
//         <Route
//           path="/student/*"
//           element={
//             <ProtectedRoute expectedRole="student">
//               <StudentDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* === Parent Dashboard === */}
//         <Route
//           path="/parent/*"
//           element={
//             <ProtectedRoute expectedRole="parent">
//               <ParentDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* === Super-admin Dashboard === */}
//         <Route
//           path="/super-admin"
//           element={
//             <ProtectedRoute expectedRole="super-admin">
//               <SuperAdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* === Super Admin CRUD Pages === */}
//         <Route
//           path="/super-admin/create"
//           element={
//             <ProtectedRoute expectedRole="super-admin">
//               <CreateAdmin />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/super-admin/read"
//           element={
//             <ProtectedRoute expectedRole="super-admin">
//               <ReadAdmins />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/super-admin/update"
//           element={
//             <ProtectedRoute expectedRole="super-admin">
//               <UpdateAdmin />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/super-admin/delete"
//           element={
//             <ProtectedRoute expectedRole="super-admin">
//               <DeleteAdmin />
//             </ProtectedRoute>
//           }
//         />

//         {/* === Default Redirect === */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";

// Super-Admin CRUD pages
import CreateAdmin from "./pages/CreateAdmin";
import ReadAdmins from "./pages/ReadAdmins";
import UpdateAdmin from "./pages/UpdateAdmin";
import DeleteAdmin from "./pages/DeleteAdmin";

// Super-Admin Extra Features
import SystemSettings from "./pages/SystemSettings";
import Reports from "./pages/Reports";
import ActivityLogs from "./pages/ActivityLogs";
import SupportTickets from "./pages/SupportTickets";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* === Auth Route === */}
        <Route path="/login" element={<Login />} />

        {/* === Admin Dashboard === */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute expectedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* === Teacher Dashboard === */}
        <Route
          path="/teacher/*"
          element={
            <ProtectedRoute expectedRole="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        {/* === Student Dashboard === */}
        <Route
          path="/student/*"
          element={
            <ProtectedRoute expectedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* === Parent Dashboard === */}
        <Route
          path="/parent/*"
          element={
            <ProtectedRoute expectedRole="parent">
              <ParentDashboard />
            </ProtectedRoute>
          }
        />

        {/* === Super-admin Dashboard === */}
        <Route
          path="/super-admin"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* === Super Admin CRUD Pages === */}
        <Route
          path="/super-admin/create"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <CreateAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/read"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <ReadAdmins />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/update"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <UpdateAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/delete"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <DeleteAdmin />
            </ProtectedRoute>
          }
        />

        {/* === Super Admin Extra Feature Pages === */}
        <Route
          path="/super-admin/settings"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <SystemSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/reports"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/logs"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <ActivityLogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/support"
          element={
            <ProtectedRoute expectedRole="super-admin">
              <SupportTickets />
            </ProtectedRoute>
          }
        />

        {/* === Default Redirect === */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

