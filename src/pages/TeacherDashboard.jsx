import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const teacherMenu = [
  { label: "Dashboard", path: "/teacher" },
  { label: "My Courses", path: "/teacher/courses" },
  { label: "Timetable", path: "/teacher/timetable" },
  { label: "Assignments", path: "/teacher/assignments" },
  { label: "Gradebook", path: "/teacher/gradebook" },
  { label: "Messages", path: "/teacher/messages" },
];

const TeacherDashboard = () => {
  return (
    <DashboardLayout role="Teacher" menuItems={teacherMenu}>
      <div className="container mt-3">
        <h2>Teacher Dashboard</h2>
        <p>Welcome back, Teacher! Manage your courses, students, and tasks here.</p>

        {/* Quick Stats */}
        <div className="row my-4">
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Courses</h5>
                <p className="display-6">5</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p className="display-6">120</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pending Assignments</h5>
                <p className="display-6">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Today’s Schedule */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header">📅 Today’s Schedule</div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Course</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:00 - 10:30</td>
                  <td>Mathematics</td>
                  <td>Room 101</td>
                </tr>
                <tr>
                  <td>11:00 - 12:30</td>
                  <td>Physics</td>
                  <td>Room 202</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Announcements */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header">📢 Recent Announcements</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Staff meeting at 3 PM today.</li>
            <li className="list-group-item">Submit grades by Friday.</li>
            <li className="list-group-item">New academic policy shared in portal.</li>
          </ul>
        </div>

        {/* Assignment Submissions */}
        <div className="card shadow-sm">
          <div className="card-header">📑 Assignment Submissions</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Assignment</th>
                  <th>Submissions</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mathematics</td>
                  <td>Algebra Homework</td>
                  <td>45/50</td>
                  <td><span className="badge bg-success">Almost Done</span></td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>Lab Report</td>
                  <td>30/40</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
