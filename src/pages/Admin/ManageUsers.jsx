import React from "react";
import DashboardLayout from "../../components/DashboardLayout"; 

const adminMenu = [
  { label: "Dashboard", path: "/admin" },
  { label: "Manage Users", path: "/admin/users" },
  { label: "Reports", path: "/admin/reports" },
  { label: "Settings", path: "/admin/settings" },
];

const ManageUsers = () => {
  return (
    <DashboardLayout role="Admin" menuItems={adminMenu}>
      <h2>Manage Users</h2>
      <p>Here you can add, update, or remove users from the system.</p>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Abhishek Pandey</td>
            <td>Teacher</td>
            <td>Active</td>
            <td>
              <button className="btn btn-sm btn-primary me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>002</td>
            <td>Aritra Chakraborty</td>
            <td>Teacher</td>
            <td>Active</td>
            <td>
              <button className="btn btn-sm btn-primary me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>003</td>
            <td>Anshika Aggarwal</td>
            <td>Teacher</td>
            <td>Active</td>
            <td>
              <button className="btn btn-sm btn-primary me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>004</td>
            <td>Priyanshu Patel</td>
            <td>Teacher</td>
            <td>Active</td>
            <td>
              <button className="btn btn-sm btn-primary me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>005</td>
            <td>Arpit Ranjan</td>
            <td>Teacher</td>
            <td>Active</td>
            <td>
              <button className="btn btn-sm btn-primary me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>006</td>
            <td>Riya Singh</td>
            <td>Student</td>
            <td>Active</td>
            <td>
              <button className="btn btn-sm btn-primary me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default ManageUsers;
