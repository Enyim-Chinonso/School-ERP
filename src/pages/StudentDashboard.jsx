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

const StudentDashboard = () => {
  return (
    <DashboardLayout role="Student" menuItems={studentMenu}>
      <div className="container mt-3">
        <h2>🎓 Student Dashboard</h2>
        <p>Welcome back, Student! Track your academic progress and stay updated here.</p>

        {/* Quick Stats */}
        <div className="row my-4">
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">GPA</h5>
                <p className="display-6">3.8</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Attendance</h5>
                <p className="display-6">92%</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Fees Status</h5>
                <p className="text-success fw-bold">✅ Paid</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timetable */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header">📅 Weekly Timetable</div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Course</th>
                  <th>Time</th>
                  <th>Room</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>Mathematics</td>
                  <td>09:00 - 10:30</td>
                  <td>Room 101</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>Physics</td>
                  <td>11:00 - 12:30</td>
                  <td>Room 202</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Notices */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header">📢 Recent Notices</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Exam starts next week.</li>
            <li className="list-group-item">Library hours updated.</li>
            <li className="list-group-item">Submit assignments by Friday.</li>
          </ul>
        </div>

        {/* Grades Summary */}
        <div className="card shadow-sm">
          <div className="card-header">📊 Grades Summary</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mathematics</td>
                  <td>A</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>B+</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
