// import React from "react";
// import DashboardLayout from "../../components/DashboardLayout";

// const superAdminMenu = [
//   { label: "Dashboard", path: "/super-admin" },
//   { label: "Create Admin", path: "/super-admin/create" },
//   { label: "View Admins", path: "/super-admin/read" },
//   { label: "Update Admin", path: "/super-admin/update" },
//   { label: "Delete Admin", path: "/super-admin/delete" },
// ];

// const CreateAdmin = () => {
//   return (
//     <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
//       <h2>Create Admin</h2>
//       <p>This is a placeholder page for creating a new Admin account.</p>
//     </DashboardLayout>
//   );
// };

// export default CreateAdmin;


import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const superAdminMenu = [
  { label: "Dashboard", path: "/super-admin" },
  { label: "Create Admin", path: "/super-admin/create" },
  { label: "View Admins", path: "/super-admin/read" },
  { label: "Update Admin", path: "/super-admin/update" },
  { label: "Delete Admin", path: "/super-admin/delete" },
];

const CreateAdmin = () => {
  return (
    <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
      <div className="card p-4 shadow-sm">
        <h3>Create Admin</h3>
        <p>Here you can add a new Admin user to the system.</p>
        <button className="btn btn-primary">+ Add Admin</button>
      </div>
    </DashboardLayout>
  );
};

export default CreateAdmin;
