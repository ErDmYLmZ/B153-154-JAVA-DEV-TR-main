import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "./user-card";

const Fetch1 = () => {
  const [users, setUsers] = useState([]);


  const loadUsers = async() => { 

    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();

      setUsers(data);

    } catch (err) {
      console.log(err);
    }

   }

  useEffect(() => {
    // useEffect in kendisi de asenkron çalışır
    loadUsers();
    
  }, []);


  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {users.map((user) => (
          <Col key={user.id}>
            <UserCard name={user.name} email={user.email}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Fetch1;
