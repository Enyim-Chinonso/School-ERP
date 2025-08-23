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

const Messages = () => {
  const messages = [
    { from: "Teacher A", subject: "Homework Reminder", status: "Unread" },
    { from: "Admin", subject: "Fee Payment Notice", status: "Read" },
  ];

  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <h2>Messages</h2>
      <p>Recent messages and notifications:</p>
      <ul className="list-group mt-3">
        {messages.map((msg, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {msg.from} - {msg.subject}
            <span className={`badge ${msg.status === "Unread" ? "bg-danger" : "bg-success"}`}>
              {msg.status}
            </span>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default Messages;
