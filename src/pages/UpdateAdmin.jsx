// import React from "react";
// import UpdateAdmin from "../pages/"
// const superAdminMenu = [
//   { label: "Dashboard", path: "/super-admin" },
//   { label: "Create Admin", path: "/super-admin/create" },
//   { label: "View Admins", path: "/super-admin/read" },
//   { label: "Update Admin", path: "/super-admin/update" },
//   { label: "Delete Admin", path: "/super-admin/delete" },
// ];

// const UpdateAdmin = () => {
//   return (
//     <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
//       <h2>Update Admin</h2>
//       <p>This is a placeholder page for updating an Admin’s details.</p>
//     </DashboardLayout>
//   );
// };

// export default UpdateAdmin;


import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const superAdminMenu = [
  { label: "Dashboard", path: "/super-admin" },
  { label: "Create Admin", path: "/super-admin/create" },
  { label: "View Admins", path: "/super-admin/read" },
  { label: "Update Admin", path: "/super-admin/update" },
  { label: "Delete Admin", path: "/super-admin/delete" },
];

const UpdateAdmin = () => {
  return (
    <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
      <div className="card p-4 shadow-sm">
        <h3>Update Admin</h3>
        <p>Here you can edit Admin details.</p>
        <form className="mt-3">
          <div className="mb-3">
            <label className="form-label">Admin Name</label>
            <input type="text" className="form-control" placeholder="Enter admin name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <button className="btn btn-success">Update Admin</button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default UpdateAdmin;
