// import React from "react";
// import DashboardLayout from "../components/DashboardLayout";

// const teacherMenu = [
//   { label: "Dashboard", path: "/teacher" },
//   { label: "My Courses", path: "/teacher/courses" },
//   { label: "Gradebook", path: "/teacher/gradebook" },
//   { label: "Assignments", path: "/teacher/assignments" },
//   { label: "Timetable", path: "/teacher/timetable" },
//   { label: "Messages", path: "/teacher/messages" },
// ];

// const Courses = () => {
//   return (
//     <DashboardLayout role="Teacher" menuItems={teacherMenu}>
//       <h2>My Courses</h2>
//       <p>View and manage the courses you are teaching.</p>
//     </DashboardLayout>
//   );
// };

// export default Courses;



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

const MyCourses = () => {
  const courses = [
    { name: "Mathematics", code: "MATH101", students: 50 },
    { name: "Physics", code: "PHY201", students: 50 },
    { name: "Chemistry", code: "CHEM301", students: 50 },
    { name: "Computer science", code: "CSC411", students: 50 },
  ];

  return (
    <DashboardLayout role="Teacher" menuItems={teacherMenu}>
      <h2>My Courses</h2>
      <p>Here are the courses you are teaching this semester:</p>
      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Enrolled Students</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default MyCourses;
