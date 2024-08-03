import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaBox, FaTruck, FaTimes, FaDollarSign } from "react-icons/fa";

const DashboardCards = () => {
  return (
    <Row>
      <Col>
        <Card className="text-center text-light bg-dark mb-3">
          <Card.Body>
            <FaBox size={30} />
            <Card.Title>Total Orders</Card.Title>
            <Card.Text>75</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="text-center text-light bg-dark mb-3">
          <Card.Body>
            <FaTruck size={30} />
            <Card.Title>Total Delivered</Card.Title>
            <Card.Text>70</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="text-center text-light bg-dark mb-3">
          <Card.Body>
            <FaTimes size={30} />
            <Card.Title>Total Cancelled</Card.Title>
            <Card.Text>5</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="text-center text-light bg-dark mb-3">
          <Card.Body>
            <FaDollarSign size={30} />
            <Card.Title>Total Revenue</Card.Title>
            <Card.Text>$12k</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardCards;
