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

const MyCourses = () => {
  const courses = [
    "Mathematics",
    "English Literature",
    "Physics",
    "Computer science",
    "Biology",
    "Chemistry",
  ];

  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <h2>My Courses</h2>
      <p>Here are the courses you are enrolled in:</p>
      <ul className="list-group mt-3">
        {courses.map((course, index) => (
          <li key={index} className="list-group-item">
            {course}
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default MyCourses;
