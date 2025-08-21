import React from "react";
import DashboardLayout from "../components/DashboardLayout";


const teacherMenu = [
  { label: "Dashboard", path: "/teacher/dashboard" },
  { label: "My Classes", path: "/teacher/classes" },
  { label: "Assignments", path: "/teacher/assignments" },
  { label: "Grades", path: "/teacher/grades" },
];

const TeacherDashboard = () => {
  return (
    <DashboardLayout role="Teacher" menuItems={teacherMenu}>
      <h2>Teacher Dashboard</h2>
      <p>Manage classes, assignments, and student grades here.</p>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
