// import React from "react";
// import D from "../pages/";
// import ReadAdmins from "../pages/"

// const superAdminMenu = [
//   { label: "Dashboard", path: "/super-admin" },
//   { label: "Create Admin", path: "/super-admin/create" },
//   { label: "View Admins", path: "/super-admin/read" },
//   { label: "Update Admin", path: "/super-admin/update" },
//   { label: "Delete Admin", path: "/super-admin/delete" },
// ];

// const ReadAdmins = () => {
//   return (
//     <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
//       <h2>View Admins</h2>
//       <p>This is a placeholder page for listing all Admins.</p>
//     </DashboardLayout>
//   );
// };

// export default ReadAdmins;


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
              <td>John Doe</td>
              <td>admin1@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>admin2@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default ReadAdmins;
