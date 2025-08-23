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

const Fees = () => {
  const fees = [
    { term: "Term 1", amount: 50000, status: "Paid" },
    { term: "Term 2", amount: 55000, status: "Pending" },
    { term: "Term 3", amount: 60000, status: "Unpaid" },
  ];

  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <h2>Fees</h2>
      <p>Your fee status for the academic year:</p>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Term</th>
            <th>Amount (₦)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((f, index) => (
            <tr key={index}>
              <td>{f.term}</td>
              <td>{f.amount}</td>
              <td>{f.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default Fees;
