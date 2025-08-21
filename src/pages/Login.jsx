import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // 🚀 If user already logged in, send them to their dashboard
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      switch (savedRole) {
        case "admin":
          navigate("/admin", { replace: true });
          break;
        case "teacher":
          navigate("/teacher", { replace: true });
          break;
        case "student":
          navigate("/student", { replace: true });
          break;
        case "parent":
          navigate("/parent", { replace: true });
          break;
        default:
          navigate("/login", { replace: true });
      }
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault(); // ✅ prevent page refresh

    if (!role) {
      alert("Please select a role");
      return;
    }

    // store role in localStorage
    localStorage.setItem("role", role);

    // redirect to correct dashboard
      switch (role) {
      case "admin":
        navigate("/admin/dashboard", { replace: true });
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
  //   switch (role) {
  //     case "admin":
  //       navigate("/admin");
  //       break;
  //     case "teacher":
  //       navigate("/teacher");
  //       break;
  //     case "student":
  //       navigate("/student");
  //       break;
  //     case "parent":
  //       navigate("/parent");
  //       break;
  //     default:
  //       navigate("/login");
  //   }
  // };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-3">School ERP Login</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Select Role</Form.Label>
                <Form.Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">-- Select Role --</option> {/* ✅ placeholder */}
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
