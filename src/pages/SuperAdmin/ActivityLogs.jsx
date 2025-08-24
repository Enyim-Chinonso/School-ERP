// import React from "react";
// import { ListGroup } from "react-bootstrap";

// const ActivityLogs = () => {
//   return (
//     <div>
//       <h2>Activity Logs</h2>
//       <ListGroup>
//         <ListGroup.Item>Admin created a new teacher account – 22 Aug, 2025</ListGroup.Item>
//         <ListGroup.Item>System backup completed – 21 Aug, 2025</ListGroup.Item>
//         <ListGroup.Item>Parent logged in – 21 Aug, 2025</ListGroup.Item>
//         <ListGroup.Item>Student updated profile – 20 Aug, 2025</ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// };

// export default ActivityLogs;


import React from "react";
import { Table } from "react-bootstrap";

const ActivityLogs = () => {
  const logs = [
    { id: 1, action: "Admin logged in", time: "22-Aug-2025 10:00 AM" },
    { id: 2, action: "Teacher uploaded assignment", time: "22-Aug-2025 11:15 AM" },
    { id: 3, action: "Student submitted fees", time: "22-Aug-2025 01:00 PM" },
  ];

  return (
    <div>
      <h2>Activity Logs</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.action}</td>
              <td>{log.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ActivityLogs;
