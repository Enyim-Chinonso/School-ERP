// import { Container } from "react-bootstrap";


// const ParentDashboard = () => {
//   return (
//      <Container className="mt-5">
//       <h2>Parent Dashboard</h2>
//       <p>Welcome Parent! Track your ward’s attendance, fees, and performance.</p>
//     </Container>
//   )
// }

// export default ParentDashboard;


import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const parentMenu = [
  { label: "Dashboard", path: "/parent/dashboard" },
  { label: "My Children", path: "/parent/children" },
  { label: "Progress Reports", path: "/parent/reports" },
  { label: "Fees & Payments", path: "/parent/payments" },
  { label: "Messages", path: "/parent/messages" },
];

const ParentDashboard = () => {
  return (
    <DashboardLayout role="Parent" menuItems={parentMenu}>
      <h2>Parent Dashboard</h2>
      <p>Monitor your children’s progress, manage payments, and communicate with teachers.</p>
    </DashboardLayout>
  );
};

export default ParentDashboard;
