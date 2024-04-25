import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const errorInitials = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
}

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName: "Ali",
    lastName: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({...errorInitials});

  const handleFormData = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const handleError = (field, value) => {
    const newError = { ...errorInitials, [field]: value };
    setError(newError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    try {
      if(!formData.firstName) throw new Error("firstName")
      if(!formData.lastName) throw new Error("lastName")
      if(!formData.email) throw new Error("email")
      if(!formData.phone) throw new Error("phone")

      handleError({...errorInitials})

      // API

    } catch (err) {
      const fieldName = err.message;
      handleError(fieldName, true)      
    }

    
    

  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder=""
            onChange={handleFormData}
            isInvalid={error.firstName}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your first name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder=""
            onChange={handleFormData}
            isInvalid={error.lastName}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your last name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            placeholder=""
            onChange={handleFormData}
            isInvalid={error.email}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            placeholder=""
            onChange={handleFormData}
            isInvalid={error.phone}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your phone
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Form4;
