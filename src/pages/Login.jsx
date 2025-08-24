import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      navigateToDashboard(savedRole);
    }
  }, [navigate]);

  // ✅ Helper: navigate to dashboard
  const navigateToDashboard = (userRole) => {
    switch (userRole) {
      case "admin":
        navigate("/admin/dashboard", { replace: true });
        break;
      case "super-admin":
        navigate("/super-admin/dashboard", { replace: true });
        break;
      case "teacher":
        navigate("/teacher/dashboard", { replace: true });
        break;
      case "student":
        navigate("/student/dashboard", { replace: true });
        break;
      case "parent":
        navigate("/parent/dashboard", { replace: true });
        break;
      default:
        navigate("/login", { replace: true });
    }
  };

  // ✅ Handle login submit
  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("⚠️ Please select a role before logging in.");
      return;
    }

    // Save role & navigate
    localStorage.setItem("role", role);
    navigateToDashboard(role);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={5}>
          <Card className="p-4 shadow-lg border-0 rounded-4">
            <h3 className="text-center mb-4 fw-bold text-primary">School ERP Login</h3>

            <Form onSubmit={handleLogin}>
              {/* Role Selector */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Select Role</Form.Label>
                <Form.Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">-- Choose Role --</option>
                  <option value="admin">Admin</option>
                  <option value="super-admin">Super Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                </Form.Select>
              </Form.Group>

              {/* Login Button */}
              <Button type="submit" variant="primary" className="w-100 py-2 fw-semibold rounded-3">
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
