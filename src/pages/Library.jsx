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

const Library = () => {
  const books = [
    { title: "Mathematics Basics", status: "Borrowed" },
    { title: "Physics Advanced", status: "Returned" },
    { title: "English Literature", status: "Borrowed" },
  ];

  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <h2>Library</h2>
      <p>Books borrowed and history:</p>
      <ul className="list-group mt-3">
        {books.map((book, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {book.title} <span className="badge bg-primary">{book.status}</span>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default Library;
