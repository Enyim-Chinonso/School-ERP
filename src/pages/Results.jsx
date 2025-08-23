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

const Results = () => {
  const results = [
    { subject: "Mathematics", grade: "A" },
    { subject: "English Literature", grade: "B" },
    { subject: "Physics", grade: "C" },
    { subject: "Computer science", grade: "A" },
  ];

  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <h2>Results</h2>
      <p>Your recent grades:</p>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr key={index}>
              <td>{r.subject}</td>
              <td>{r.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default Results;
