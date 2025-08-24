// import React from "react";

// function SystemSettings() {
//   return (
//     <div>
//       <h1>System Settings</h1>
//       <p>Here you will see charts and statistics about the platform.</p>
//     </div>
//   );
// }

// export default SystemSettings;
import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const SystemSettings = () => {
  return (
    <div>
      <h2>System Settings</h2>
      <Card className="p-3">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>School Name</Form.Label>
            <Form.Control type="text" placeholder="Enter school name" defaultValue="Triostack Technologies Academy" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Academic Year</Form.Label>
            <Form.Control type="text" defaultValue="2025/2026" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Notifications</Form.Label>
            <Form.Check type="checkbox" label="Enable" defaultChecked />
          </Form.Group>

          <Button variant="primary">Save Settings</Button>
        </Form>
      </Card>
    </div>
  );
};

export default SystemSettings;
