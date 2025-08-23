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

const Assignments = () => {
  const assignments = [
    { title: "Algebra Homework", course: "Mathematics", due: "2025-09-05" },
    { title: "Law of Gravity", course: "Physics", due: "2025-09-07" },
    { title: "Programming languages Essay", course: "Computer", due: "2025-09-10" },
  ];

  return (
    <DashboardLayout role="Teacher" menuItems={teacherMenu}>
      <h2>Assignments</h2>
      <p>Assignments you've assigned to your students:</p>
      <div className="list-group mt-3">
        {assignments.map((a, index) => (
          <div
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{a.title}</strong> ({a.course})
            </div>
            <span className="badge bg-primary rounded-pill">Due: {a.due}</span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Assignments;
