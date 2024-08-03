import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

const NetProfit = () => {
  return (
    <Card className="text-light bg-dark mb-3">
      <Card.Body>
        <Card.Title>Net Profit</Card.Title>
        <Card.Text>$6759.25</Card.Text>
        <ProgressBar now={70} label="70%" variant="success" />
      </Card.Body>
    </Card>
  );
};

export default NetProfit;
