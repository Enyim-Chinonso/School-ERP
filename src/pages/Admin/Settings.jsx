import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const adminMenu = [
  { label: "Dashboard", path: "/admin" },
  { label: "Manage Users", path: "/admin/users" },
  { label: "Reports", path: "/admin/reports" },
  { label: "Settings", path: "/admin/settings" },
];

const Settings = () => {
  return (
    <DashboardLayout role="Admin" menuItems={adminMenu}>
      <h2>Settings</h2>
      <p>Configure system preferences and update admin settings.</p>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">System Name</label>
          <input type="text" className="form-control" placeholder="School ERP" />
        </div>
        <div className="mb-3">
          <label className="form-label">Academic Year</label>
          <input type="text" className="form-control" placeholder="2025/2026" />
        </div>
        <div className="mb-3">
          <label className="form-label">Default Password Policy</label>
          <select className="form-select">
            <option>8 characters, alphanumeric</option>
            <option>10 characters, alphanumeric + symbols</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Save Settings</button>
      </form>
    </DashboardLayout>
  );
};

export default Settings;
