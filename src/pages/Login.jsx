import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  //n On first load, check if already logged in
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      navigate(`/${savedRole}`, { replace: true }); 
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role");
      return;
    }

    // Save role
    localStorage.setItem("role", role);

    // Navigate directly to role dashboard (matches App.jsx)
    navigate(`/${role}`, { replace: true });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card className="p-4 shadow rounded-3" style={{ minWidth: "350px" }}>
            <h3 className="text-center mb-4 fw-bold text-primary">
              School ERP Login
            </h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Select Role</Form.Label>
                <Form.Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">-- Select Role --</option>
                  <option value="super-admin">Super-Admin</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Login
              </Button>
            </Form>

            {/* Footer */}
            <div className="text-center mt-4">
              <small className="text-muted">
                © {new Date().getFullYear()} Triostack Technologies Pvt. Ltd.
              </small>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
