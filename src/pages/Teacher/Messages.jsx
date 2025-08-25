import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const teacherMenu = [
  { label: "Dashboard", path: "/teacher" },
  { label: "My Courses", path: "/teacher/courses" },
  { label: "Gradebook", path: "/teacher/gradebook" },
  { label: "Assignments", path: "/teacher/assignments" },
  { label: "Timetable", path: "/teacher/timetable" },
  { label: "Messages", path: "/teacher/messages" },
];

const Messages = () => {
  const messages = [
    { from: "Saloni Kumari", subject: "Question about assignment", date: "2025-08-20" },
    { from: "Parent: Enyim Chinonso", subject: "Attendance inquiry", date: "2025-08-21" },
    { from: "Gulshan Anand", subject: "Exam schedule clarification", date: "2025-08-22" },
  ];

  return (
    <DashboardLayout role="Teacher" menuItems={teacherMenu}>
      <h2>Messages</h2>
      <p>View messages from students and parents:</p>
      <ul className="list-group mt-3">
        {messages.map((msg, index) => (
          <li key={index} className="list-group-item">
            <strong>From:</strong> {msg.from} <br />
            <strong>Subject:</strong> {msg.subject} <br />
            <small className="text-muted">{msg.date}</small>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default Messages;
