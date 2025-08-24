import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import SystemSettings from "./pages/SuperAdmin/SystemSettings";
import Reports from "./pages/SuperAdmin/Reports";
import ActivityLogs from "./pages/SuperAdmin/ActivityLogs";

// Admin Sub-Pages
import ManageUsers from "./pages/Admin/ManageUsers";
import AdminReports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";

// Student Sub-Pages
import MyCourses from "./pages/MyCourses";
import Timetable from "./pages/Timetable";
import Results from "./pages/Results";
import Fees from "./pages/Fees";
import Library from "./pages/Library";
import Messages from "./pages/Messages";

// Teacher Sub-Pages
import TeacherCourses from "./pages/Teacher/MyCourses";
import Gradebook from "./pages/Teacher/Gradebook";
import Assignments from "./pages/Teacher/Assignments";
import TeacherTimetable from "./pages/Teacher/Timetable";
import TeacherMessages from "./pages/Teacher/Messages";

// Parent Sub-pages
import MyChildren from "./pages/Parent/MyChildren";
import ParentAttendance from "./pages/Parent/Attendance";
import ParentResults from "./pages/Parent/Results";
import ParentFees from "./pages/Parent/Fees";
import ParentMessages from "./pages/Parent/Messages";

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
          path="/teacher"
          element={
            <ProtectedRoute expectedRole="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/courses"
          element={
            <ProtectedRoute expectedRole="teacher">
              <TeacherCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/gradebook"
          element={
            <ProtectedRoute expectedRole="teacher">
              <Gradebook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/assignments"
          element={
            <ProtectedRoute expectedRole="teacher">
              <Assignments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/timetable"
          element={
            <ProtectedRoute expectedRole="teacher">
              <TeacherTimetable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/messages"
          element={
            <ProtectedRoute expectedRole="teacher">
              <TeacherMessages />
            </ProtectedRoute>
          }
        />

        {/* === Student Dashboard === */}
        <Route
          path="/student"
          element={
            <ProtectedRoute expectedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/courses"
          element={
            <ProtectedRoute expectedRole="student">
              <MyCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/timetable"
          element={
            <ProtectedRoute expectedRole="student">
              <Timetable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/results"
          element={
            <ProtectedRoute expectedRole="student">
              <Results />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/fees"
          element={
            <ProtectedRoute expectedRole="student">
              <Fees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/library"
          element={
            <ProtectedRoute expectedRole="student">
              <Library />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/messages"
          element={
            <ProtectedRoute expectedRole="student">
              <Messages />
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
        {/* Super Admin CRUD Pages */}
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
        {/* Super Admin Extra Feature Pages */}
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
       
        {/* === Admin Dashboard === */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute expectedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute expectedRole="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute expectedRole="admin">
              <AdminReports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute expectedRole="admin">
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* === Parent Dashboard === */}
        <Route
          path="/parent"
          element={
            <ProtectedRoute expectedRole="parent">
              <ParentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent/children"
          element={
            <ProtectedRoute expectedRole="parent">
              <MyChildren />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent/attendance"
          element={
            <ProtectedRoute expectedRole="parent">
              <ParentAttendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent/results"
          element={
            <ProtectedRoute expectedRole="parent">
              <ParentResults />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent/fees"
          element={
            <ProtectedRoute expectedRole="parent">
              <ParentFees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent/messages"
          element={
            <ProtectedRoute expectedRole="parent">
              <ParentMessages />
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
