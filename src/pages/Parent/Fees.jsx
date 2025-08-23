import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const menuItems = [
  { label: "My Children", path: "/parent/children" },
  { label: "Attendance", path: "/parent/attendance" },
  { label: "Results", path: "/parent/results" },
  { label: "Fees", path: "/parent/fees" },
  { label: "Messages", path: "/parent/messages" },
];

const Fees = () => {
  return (
    <DashboardLayout role="Parent" menuItems={menuItems}>
      <h2>Fees</h2>
      <p>Track pending, paid and not paid school fees:</p>
      <ul>
        <li>Enyim Chinonso - Paid: ₦150,000 | Pending: ₦20,000</li>
        <li>Enyim Chinonso - Paid: ₦120,000 | Balance: ₦10,000</li>
        <li>Enyim Chinonso - Paid: ₦120,000 | Complete</li>
        <li>Enyim Chinonso - Not paid: ₦120,000 | Not paid: ₦120,000</li>
      </ul>
    </DashboardLayout>
  );
};

export default Fees;
