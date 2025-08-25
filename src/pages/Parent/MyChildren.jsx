import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const menuItems = [
  { label: "My Children", path: "/parent/children" },
  { label: "Attendance", path: "/parent/attendance" },
  { label: "Results", path: "/parent/results" },
  { label: "Fees", path: "/parent/fees" },
  { label: "Messages", path: "/parent/messages" },
];

const MyChildren = () => {
  return (
    <DashboardLayout role="Parent" menuItems={menuItems}>
      <h2>My Children</h2>
      <p>Overview of children enrolled in school:</p>
      <ul>
        <li>Subham Jha - 200 Level</li>
        <li>Sachin Gupta - 200 Level</li>
        <li>Saloni Kumari - 100 Level</li>
        <li>Ankit Saini - 300 Level</li>
        <li>Gulshan Anand - 400 Level</li>
        <li>Ankit Kumar - 200 Level</li>
        <li>Riya Singh - 400 Level</li>
        <li>Aditya - 300 Level</li>
      </ul>
    </DashboardLayout>
  );
};

export default MyChildren;
