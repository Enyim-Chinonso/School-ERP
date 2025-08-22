// // import { Container } from "react-bootstrap";


// // const ParentDashboard = () => {
// //   return (
// //      <Container className="mt-5">
// //       <h2>Parent Dashboard</h2>
// //       <p>Welcome Parent! Track your ward’s attendance, fees, and performance.</p>
// //     </Container>
// //   )
// // }

// // export default ParentDashboard;


// import React from "react";
// import DashboardLayout from "../components/DashboardLayout";

// const parentMenu = [
//   { label: "Dashboard", path: "/parent/dashboard" },
//   { label: "My Children", path: "/parent/children" },
//   { label: "Progress Reports", path: "/parent/reports" },
//   { label: "Fees & Payments", path: "/parent/payments" },
//   { label: "Messages", path: "/parent/messages" },
// ];

// const ParentDashboard = () => {
//   return (
//     <DashboardLayout role="Parent" menuItems={parentMenu}>
//       <h2>Parent Dashboard</h2>
//       <p>Monitor your children’s progress, manage payments, and communicate with teachers.</p>
//     </DashboardLayout>
//   );
// };

// export default ParentDashboard;



// src/pages/ParentDashboard.jsx
import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const parentMenu = [
  { label: "Dashboard", path: "/parent" },
  { label: "My Children", path: "/parent/children" },
  { label: "Attendance", path: "/parent/attendance" },
  { label: "Results", path: "/parent/results" },
  { label: "Fees", path: "/parent/fees" },
  { label: "Messages", path: "/parent/messages" },
];

const ParentDashboard = () => {
  return (
    <DashboardLayout role="Parent" menuItems={parentMenu}>
      <div className="container mt-3">
        <h2>Parent Dashboard</h2>
        <p>Welcome, dear Parent! Stay updated on your child’s progress and school activities.</p>

        {/* Quick Stats */}
        <div className="row my-4">
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Children Enrolled</h5>
                <p className="display-6">2</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Attendance</h5>
                <p className="display-6">92%</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pending Fees</h5>
                <p className="display-6">₦50,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Child’s Academic Progress */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header">📊 Child’s Academic Progress</div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Child</th>
                  <th>Class</th>
                  <th>Average Grade</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>David Johnson</td>
                  <td>Grade 10</td>
                  <td>A</td>
                  <td><span className="badge bg-success">Excellent</span></td>
                </tr>
                <tr>
                  <td>Sophia Johnson</td>
                  <td>Grade 7</td>
                  <td>B+</td>
                  <td><span className="badge bg-warning">Good</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header">📅 Upcoming Events</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">PTA Meeting – Sept 15</li>
            <li className="list-group-item">Mid-Term Break – Oct 5</li>
            <li className="list-group-item">Sports Day – Nov 12</li>
          </ul>
        </div>

        {/* Recent Notices */}
        <div className="card shadow-sm">
          <div className="card-header">📢 Recent Notices</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Fees for 2nd Term due by Sept 20.</li>
            <li className="list-group-item">Vaccination program for Grade 7 students.</li>
            <li className="list-group-item">School bus schedule updated.</li>
          </ul>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default ParentDashboard;
