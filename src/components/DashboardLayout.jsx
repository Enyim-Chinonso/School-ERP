// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "./DashboardLayout.css";

// const DashboardLayout = ({ role, menuItems, children }) => {
//  const navigate = useNavigate();

// const handleLogout = () => {
//     localStorage.removeItem("role");
//     navigate("/login", { replace: true });
//   };

//   return (
//     <div className="dashboard-container">

//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="sidebar-header">
//           <h3>School ERP</h3>
//           <p className="role-badge">{role}</p>
//         </div>
//         <ul className="menu-list">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//                 <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive ? "active-link" : undefined
//                 }
//               >
//                 {item.label}
//               </NavLink>
//               {/* <Link to={item.path}>{item.label}</Link> */}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Topbar */}
//         <header className="topbar">
//           <span className="welcome">Welcome, {role}</span>
//           <button className="btn btn-danger btn-sm">Logout</button>
//         </header>

//         <div className="content-wrapper">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;




// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./DashboardLayout.css";

// const DashboardLayout = ({ role, menuItems, children }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     navigate("/login", { replace: true });
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="sidebar-header">
//           <h3>School ERP</h3>
//           <p className="role-badge">
//             {role.charAt(0).toUpperCase() + role.slice(1)}
//           </p>
//         </div>
//         <ul className="menu-list">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive ? "active-link" : undefined
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Topbar */}
//         <header className="topbar">
//           <span className="welcome">Welcome, {role}</span>
//           <button
//             className="btn btn-danger btn-sm"
//             onClick={handleLogout} // ✅ added click handler
//           >
//             Logout
//           </button>
//         </header>

//         <div className="content-wrapper">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;



import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = ({ role, menuItems, children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ clear everything (safer than removeItem)
    localStorage.clear();

    // ✅ navigate to login
    navigate("/login", { replace: true });

    // ✅ force refresh so state resets
    window.location.reload();
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>School ERP</h3>
          <p className="role-badge">
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </p>
        </div>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <span className="welcome">Welcome, {role}</span>
          <button
            className="btn btn-danger btn-sm logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </header>

        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
