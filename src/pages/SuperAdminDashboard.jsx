// import React from "react";
// import DashboardLayout from "../components/DashboardLayout";

// const superAdminMenu = [
//   { label: "Dashboard", path: "/super-admin" },
//   { label: "Create Admin", path: "/super-admin/create" },
//   { label: "View Admins", path: "/super-admin/read" },
//   { label: "Update Admin", path: "/super-admin/update" },
//   { label: "Delete Admin", path: "/super-admin/delete" },
//   { label: "Manage Admins", path: "/super-admin/admins" },
//   { label: "System Settings", path: "/super-admin/settings" },
//   { label: "Reports", path: "/super-admin/reports" },
//   { label: "Activity Logs", path: "/super-admin/activity-logs" },
// ];


// const SuperAdminDashboard = () => {
//   return (
//     <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
//       <h2>Super Admin Dashboard</h2>
//       <p>
//         Welcome Super Admin! Here you can manage school admins, oversee
//         system-wide settings, track reports, and monitor platform activity.
//       </p>

//       <div className="mt-4">
//         <h4>Quick Actions</h4>
//         <ul className="list-group">
//           <li className="list-group-item">➕ Create New Admin</li>
//           <li className="list-group-item">📋 View All Admins</li>
//           <li className="list-group-item">✏️ Update Admin Info</li>
//           <li className="list-group-item">🗑️ Delete Admin</li>
//         </ul>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default SuperAdminDashboard;





import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const superAdminMenu = [
  { label: "Dashboard", path: "/super-admin" },
  { label: "Create Admin", path: "/super-admin/create" },
  { label: "View Admins", path: "/super-admin/read" },
  { label: "Update Admin", path: "/super-admin/update" },
  { label: "Delete Admin", path: "/super-admin/delete" },
  { label: "Manage Admins", path: "/super-admin/admins" },
  { label: "System Settings", path: "/super-admin/settings" },
  { label: "Reports", path: "/super-admin/reports" },
  { label: "Activity Logs", path: "/super-admin/activity-logs" },
];

const SuperAdminDashboard = () => {
  return (
    <DashboardLayout role="Super Admin" menuItems={superAdminMenu}>
      <h2>Super Admin Dashboard</h2>
      <p>
        Welcome Super Admin! Here you can manage school admins, oversee
        system-wide settings, track reports, and monitor platform activity.
      </p>

      {/* Quick Actions Section */}
      <div className="mt-4">
        <h4>Quick Actions</h4>
        <ul className="list-group">
          <li className="list-group-item">➕ Create New Admin</li>
          <li className="list-group-item">📋 View All Admins</li>
          <li className="list-group-item">✏️ Update Admin Info</li>
          <li className="list-group-item">🗑️ Delete Admin</li>
          <li className="list-group-item">📊 View Reports</li>
          <li className="list-group-item">📝 Activity Logs</li>
          <li className="list-group-item">⚙️ System Settings</li>

        </ul>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;




