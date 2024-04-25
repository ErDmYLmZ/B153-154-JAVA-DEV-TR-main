import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form2 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => { 
        e.preventDefault();

        console.log(firstName, lastName, email, phone);

     }


  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="" onChange={(e)=>setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder=""  onChange={(e)=>setLastName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder=""  onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder=""  onChange={(e)=>setPhone(e.target.value)}/>
        </Form.Group>

       <Button type="submit">Register</Button> 
      </Form>
    </Container>
  );
};

export default Form2;
