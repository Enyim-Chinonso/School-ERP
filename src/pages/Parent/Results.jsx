import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const menuItems = [
  { label: "My Children", path: "/parent/children" },
  { label: "Attendance", path: "/parent/attendance" },
  { label: "Results", path: "/parent/results" },
  { label: "Fees", path: "/parent/fees" },
  { label: "Messages", path: "/parent/messages" },
];

const Results = () => {
  return (
    <DashboardLayout role="Parent" menuItems={menuItems}>
      <h2>Results</h2>
      <p>Check your children’s exam results:</p>
      <ul>
        <li>Enyim Chinonso - Mathematics: A, English Literature: A</li>
        <li>Enyim Chinonso - Mathematics: B, Computer Science: A</li>
      </ul>
    </DashboardLayout>
  );
};

export default Results;
