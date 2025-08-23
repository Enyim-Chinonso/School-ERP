import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const studentMenu = [
  { label: "Dashboard", path: "/student" },
  { label: "My Courses", path: "/student/courses" },
  { label: "Timetable", path: "/student/timetable" },
  { label: "Results", path: "/student/results" },
  { label: "Fees", path: "/student/fees" },
  { label: "Library", path: "/student/library" },
  { label: "Messages", path: "/student/messages" },
];

const Timetable = () => {
  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <h2>Timetable</h2>
      <p>Your weekly class schedule:</p>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>Day</th>
            <th>8:00 - 9:30</th>
            <th>9:45 - 11:15</th>
            <th>11:30 - 1:00</th>
            <th>2:00 - 3:30</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Math</td>
            <td>English</td>
            <td>Physics</td>
            <td>Computer science</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Chemistry</td>
            <td>Biology</td>
            <td>Math</td>
            <td>Computer science</td>
          </tr>
          {/* Add more days */}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default Timetable;
