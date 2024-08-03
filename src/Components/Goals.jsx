import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaBullseye, FaUtensils, FaList } from "react-icons/fa";

const Goals = () => {
  return (
    <Card className="text-light bg-dark mb-3">
      <Card.Body>
        <Card.Title>Goals</Card.Title>
        <ListGroup variant="flush">
          <ListGroupItem className="bg-dark text-light">
            <FaBullseye /> Goals
          </ListGroupItem>
          <ListGroupItem className="bg-dark text-light">
            <FaUtensils /> Popular Dishes
          </ListGroupItem>
          <ListGroupItem className="bg-dark text-light">
            <FaList /> Menus
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Goals;
