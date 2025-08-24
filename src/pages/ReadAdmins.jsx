import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const superAdminMenu = [
  { label: "Dashboard", path: "/super-admin" },
  { label: "Create Admin", path: "/super-admin/create" },
  { label: "View Admins", path: "/super-admin/read" },
  { label: "Update Admin", path: "/super-admin/update" },
  { label: "Delete Admin", path: "/super-admin/delete" },
];

const ReadAdmins = () => {
  return (
    <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
      <div className="card p-4 shadow-sm">
        <h3>View Admins</h3>
        <p>Here you can see a list of all registered Admins.</p>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Abhishek Pandey</td>
              <td>admin1@example.com</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Aritra Chakraborty</td>
              <td>admin2@example.com</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Priyanshu Patel</td>
              <td>admin3@example.com</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Anshika Aggarwal</td>
              <td>admin4@example.com</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Arpit Ranjan</td>
              <td>admin5@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default ReadAdmins;
