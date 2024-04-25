import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useStore } from "../../store";
import { login } from "../../store/auth/auth-actions";
import { useNavigate } from "react-router-dom";

const API_URL = "https://carrental-v3-backend.herokuapp.com";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatchAuth } = useStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        throw new Error("Please enter email and password");
      }

      const payload = { email, password };
      const respAuth = await axios.post(`${API_URL}/login`, payload);
      const token = respAuth.data.token;

      const authHeader = { Authorization: `Bearer ${token}` };

      const respUser = await axios.get(`${API_URL}/user`, {
        headers: authHeader,
      });
      const user = respUser.data;
      dispatchAuth(login(user));
      navigate("/", { replace: true });
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      alert(msg);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin} noValidate>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
