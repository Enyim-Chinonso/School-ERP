import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const studentMenu = [
  { label: "Dashboard", path: "/student/dashboard" },
  { label: "My Courses", path: "/student/courses" },
  { label: "Assignments", path: "/student/assignments" },
  { label: "Grades", path: "/student/grades" },
  { label: "Profile", path: "/student/profile" },
];

const StudentDashboard = () => {
  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <h2>Student Dashboard</h2>
      <p>Access your courses, assignments, grades, and profile here.</p>
    </DashboardLayout>
  );
};

export default StudentDashboard;
