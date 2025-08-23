import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const menuItems = [
  { label: "My Children", path: "/parent/children" },
  { label: "Attendance", path: "/parent/attendance" },
  { label: "Results", path: "/parent/results" },
  { label: "Fees", path: "/parent/fees" },
  { label: "Messages", path: "/parent/messages" },
];

const Attendance = () => {
  return (
    <DashboardLayout role="Parent" menuItems={menuItems}>
      <h2>Attendance</h2>
      <p>Track your children’s attendance:</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Child</th>
            <th>Days Present</th>
            <th>Days Absent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Enyim Chinonso</td>
            <td>140</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Enyim Chinonso</td>
            <td>138</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default Attendance;
