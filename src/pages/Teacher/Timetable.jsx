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

const Timetable2 = () => {
  const timetable = [
    { day: "Monday", course: "Mathematics", time: "08:00 - 10:00" },
    { day: "Tuesday", course: "Physics", time: "10:00 - 12:00" },
    { day: "Wednesday", course: "Chemistry", time: "09:00 - 11:00" },
  ];

  return (
    <DashboardLayout role="Teacher" menuItems={teacherMenu}>
      <h2>Timetable</h2>
      <p>Check your weekly teaching schedule:</p>
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Day</th>
              <th>Course</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((t, index) => (
              <tr key={index}>
                <td>{t.day}</td>
                <td>{t.course}</td>
                <td>{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Timetable2;
