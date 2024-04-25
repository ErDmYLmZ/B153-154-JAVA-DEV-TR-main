import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({name, email}) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <h2>{name}</h2>
        <em>{email}</em>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
