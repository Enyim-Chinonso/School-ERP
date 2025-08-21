// import { Container } from "react-bootstrap";
import React from "react";
import DashboardLayout from "../components/DashboardLayout";


const adminMenu = [
  { label: "Dashboard", path: "/admin" },
  { label: "Manage Users", path: "/admin/users" },
  { label: "Reports", path: "/admin/reports" },
  { label: "Settings", path: "/admin/settings" },
];

const AdminDashboard = () => {
  return (
   <DashboardLayout role="Admin" menuItems={adminMenu}>
      <h2>Admin Dashboard</h2>
      <p>Welcome Admin! Manage users, view reports, fees, and configure settings here.</p>
    </DashboardLayout>
  );
}

export default AdminDashboard;



