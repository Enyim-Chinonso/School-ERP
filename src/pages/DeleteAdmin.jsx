// import React from "react";
// import DashboardLayout from "../../components/DashboardLayout";

// const superAdminMenu = [
//   { label: "Dashboard", path: "/super-admin" },
//   { label: "Create Admin", path: "/super-admin/create" },
//   { label: "View Admins", path: "/super-admin/read" },
//   { label: "Update Admin", path: "/super-admin/update" },
//   { label: "Delete Admin", path: "/super-admin/delete" },
// ];

// const DeleteAdmin = () => {
//   return (
//     <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
//       <h2>Delete Admin</h2>
//       <p>This is a placeholder page for deleting an Admin account.</p>
//     </DashboardLayout>
//   );
// };

// export default DeleteAdmin;



import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const superAdminMenu = [
  { label: "Dashboard", path: "/super-admin" },
  { label: "Create Admin", path: "/super-admin/create" },
  { label: "View Admins", path: "/super-admin/read" },
  { label: "Update Admin", path: "/super-admin/update" },
  { label: "Delete Admin", path: "/super-admin/delete" },
];

const DeleteAdmin = () => {
  return (
    <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
      <div className="card p-4 shadow-sm">
        <h3>Delete Admin</h3>
        <p>Here you can remove Admins from the system.</p>
        <button className="btn btn-danger">Delete Selected Admin</button>
      </div>
    </DashboardLayout>
  );
};

export default DeleteAdmin;
