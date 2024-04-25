import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form3 = () => {
    const [formData, setFormData] = useState({
      firstName: "Ali",
      lastName:"",
      email:"",
      phone:""
    });

    const handleFormData = (e) => { 
      const { name, value } = e.target;
      const newFormData = {...formData, [name]: value};
      setFormData(newFormData);
      
    }


    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(formData);


     }


  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} placeholder="" onChange={handleFormData} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName}  placeholder=""  onChange={handleFormData}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email}   placeholder=""  onChange={handleFormData}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" value={formData.phone} placeholder=""  onChange={handleFormData}/>
        </Form.Group>

       <Button type="submit">Register</Button> 
      </Form>
    </Container>
  );
};

export default Form3;
