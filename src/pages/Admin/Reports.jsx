import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const adminMenu = [
  { label: "Dashboard", path: "/admin" },
  { label: "Manage Users", path: "/admin/users" },
  { label: "Reports", path: "/admin/reports" },
  { label: "Settings", path: "/admin/settings" },
];

const AdminReports = () => {
  return (
    <DashboardLayout role="Admin" menuItems={adminMenu}>
      <h2>Reports</h2>
      <p>View system reports: User activity, Attendance, Fees, and more.</p>
      <div className="list-group mt-3">
        <button className="list-group-item list-group-item-action">Attendance Report</button>
        <button className="list-group-item list-group-item-action">Fees Collection Report</button>
        <button className="list-group-item list-group-item-action">User Activity Report</button>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;
