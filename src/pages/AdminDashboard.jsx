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
      <h2 className="mb-4">Admin Dashboard</h2>
      <p>
        Welcome Admin! Manage users, view reports, fees, and configure settings here.
      </p>

      {/* Stats Section */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text display-6">120</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Active Courses</h5>
              <p className="card-text display-6">18</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Pending Fees</h5>
              <p className="card-text display-6">₦45,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Reports</h5>
              <p className="card-text display-6">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">System Usage</h5>
          <p>Users Growth</p>
          <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: "70%" }}>
              70%
            </div>
          </div>
          <p>Fees Collection</p>
          <div className="progress mb-3">
            <div className="progress-bar bg-info" style={{ width: "55%" }}>
              55%
            </div>
          </div>
          <p>Report Submissions</p>
          <div className="progress">
            <div className="progress-bar bg-warning" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Recent Activities</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abhishek Pandey</td>
                <td>Updated profile</td>
                <td>Aug 24, 2025</td>
              </tr>

              <tr>
                <td>Priyanshu Patel</td>
                <td>Updated profile</td>
                <td>Aug 23, 2025</td>
              </tr>

              <tr>
                <td>Aritra Chakraborty</td>
                <td>Updated profile</td>
                <td>Aug 22, 2025</td>
              </tr>

              <tr>
                <td>Anshika Aggarwal</td>
                <td>Updated profile</td>
                <td>Aug 21, 2025</td>
              </tr>

              <tr>
                <td>Arpit Ranjan</td>
                <td>Generated report</td>
                <td>Aug 20, 2025</td>
              </tr>
              
              <tr>
                <td>Enyim Chinonso</td>
                <td>Paid fees</td>
                <td>Aug 19, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
