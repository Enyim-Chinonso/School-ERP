import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


import React from 'react'

const Login = () => {
     const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("role", role);

    if (role === "admin") navigate("/admin/dashboard");
    if (role === "teacher") navigate("/teacher/dashboard");
    if (role === "student") navigate("/student/dashboard");
    if (role === "parent") navigate("/parent/dashboard");
  };


  return (
<Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-3">School ERP Login</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Select Role</Form.Label>
                <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">Login</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

 