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
    { student: "Subham Jha", course: "Mathematics", grade: "A" },
    { student: "Ankit Kumar", course: "Chemistry", grade: "B" },
    { student: "Sachin Gupta", course: "Physics", grade: "B" },
    { student: "Aditya", course: "Computer science", grade: "A" },
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
