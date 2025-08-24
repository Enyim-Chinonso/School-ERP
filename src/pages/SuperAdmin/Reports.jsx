// import React from "react";

// function Reports() {
//   return (
//     <div>
//       <h1>System Reports</h1>
//       <p>Here you will see charts and statistics about the platform.</p>
//     </div>
//   );
// }

// export default Reports;


import React from "react";
import { Table } from "react-bootstrap";

const Reports = () => {
  return (
    <div>
      <h2>System Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Report Name</th>
            <th>Generated On</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>User Activity Report</td>
            <td>22 Aug, 2025</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>2</td>
            <td>System Usage Summary</td>
            <td>21 Aug, 2025</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Fees Collection Report</td>
            <td>20 Aug, 2025</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Reports;
