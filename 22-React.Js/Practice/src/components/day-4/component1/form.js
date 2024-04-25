import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";

const FormPractise = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    web: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // name -> firstName, value -> "Ali"
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isNaN(formData.phone)) {
      alert("Lütfen doğru telefon numarasını giriniz");
      setLoading(false);
    } else if (formData.web.includes(".com") && formData.web.includes("www.")) {
      setTimeout(() => {
        setLoading(false);
        alert("Üyelik Alındı");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          web: "",
        });
      }, 2500);
    } else {
      alert("web adresinizi doğru girin");
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            required
            minLength={3}
            maxLength={25}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            required
            minLength={3}
            maxLength={25}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            required
            minLength={10}
            maxLength={10}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Web</Form.Label>
          <Form.Control
            type="web"
            name="web"
            value={formData.web}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="warning" type="submit" disabled={loading}>
          {loading && <Spinner animation="border" size="sm" />} Register
        </Button>
      </Form>
    </Container>
  );
};

export default FormPractise;
