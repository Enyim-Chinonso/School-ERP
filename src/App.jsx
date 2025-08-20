import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ParentDashboard from "./pages/ParentDashboard";

import React from 'react'

const App = () => {

const role = localStorage.getItem("role"); // dummy auth


  return (
 <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Role-based routes */}
        <Route path="/admin/dashboard" element={role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/teacher/dashboard" element={role === "teacher" ? <TeacherDashboard /> : <Navigate to="/login" />} />
        <Route path="/student/dashboard" element={role === "student" ? <StudentDashboard /> : <Navigate to="/login" />} />
        <Route path="/parent/dashboard" element={role === "parent" ? <ParentDashboard /> : <Navigate to="/login" />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;