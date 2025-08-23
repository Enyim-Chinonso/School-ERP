import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const menuItems = [
  { label: "My Children", path: "/parent/children" },
  { label: "Attendance", path: "/parent/attendance" },
  { label: "Results", path: "/parent/results" },
  { label: "Fees", path: "/parent/fees" },
  { label: "Messages", path: "/parent/messages" },
];

const ParentMessages = () => {
  return (
    <DashboardLayout role="Parent" menuItems={menuItems}>
      <h2>Messages</h2>
      <p>Check messages from teachers and school administration:</p>
      <ul>
        <li>Teacher: John Doe absent on 12th Aug</li>
        <li>Admin: School reopening on 1st Sept</li>
        <li>Teacher: Reminder for parent-teacher meeting</li>
      </ul>
    </DashboardLayout>
  );
};

export default ParentMessages;
