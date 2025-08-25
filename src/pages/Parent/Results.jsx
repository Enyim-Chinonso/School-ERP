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
        <li>Subham Jha - Mathematics: A, English Literature: A</li> <br />
        <li>Sachin Gupta - Physics: B, Computer Science: A</li> <br />
        <li>Gulshan Anand - Mathematics: B, Computer Science: A</li> <br />
        <li>Ankit Kumar - Chemistry: B, Computer Science: A</li> <br />
        <li>Riya Singh - Mathematics: A, Computer Science: A</li> <br />
        <li>Aditya - English Literature: B, Computer Science: A</li> <br />
        <li>Saloni Kumari - English Literature: B, Computer Science: A</li> <br />
        <li>Ankit Saini - Biology: B, Computer Science: A</li>
      </ul>
    </DashboardLayout>
  );
};

export default Results;
