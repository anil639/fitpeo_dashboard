import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const CustomerFeedback = () => {
  return (
    <Card className="text-light bg-dark mb-3">
      <Card.Body>
        <Card.Title>Customer's Feedback</Card.Title>
        <ListGroup variant="flush">
          <ListGroupItem className="bg-dark text-light">
            <strong>Jenny Wilson</strong>
            <p>
              The food was excellent and so was the service. I had the mushroom
              risotto with scallops which was awesome. I had a burger over
              greens (gluten-free) which was also very good.
            </p>
          </ListGroupItem>
          <ListGroupItem className="bg-dark text-light">
            <strong>Dianne Russell</strong>
            <p>
              We enjoyed the Eggs Benedict served on homemade focaccia bread and
              hot coffee. Perfect service.
            </p>
          </ListGroupItem>
          <ListGroupItem className="bg-dark text-light">
            <strong>Devon Lane</strong>
            <p>
              Normally wings are wings, but theirs are lean meaty and tender,
              and they have 6 different sauce options that are all great.
            </p>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CustomerFeedback;
