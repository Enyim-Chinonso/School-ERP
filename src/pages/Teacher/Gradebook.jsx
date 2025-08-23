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

const Gradebook = () => {
  const grades = [
    { student: "Enyim Chinonso", course: "Mathematics", grade: "A" },
    { student: "Enyim Chinonso", course: "Mathematics", grade: "B+" },
    { student: "Enyim Chinonso", course: "Physics", grade: "A-" },
  ];

  return (
    <DashboardLayout role="Teacher" menuItems={teacherMenu}>
      <h2>Gradebook</h2>
      <p>Manage and record student grades:</p>
      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((item, index) => (
              <tr key={index}>
                <td>{item.student}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Gradebook;
