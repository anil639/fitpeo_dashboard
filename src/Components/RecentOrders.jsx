import React from "react";
import { Table, Card } from "react-bootstrap";

const RecentOrders = () => {
  return (
    <Card className="text-light bg-dark mb-3">
      <Card.Body>
        <Card.Title>Recent Orders</Card.Title>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wade Warren</td>
              <td>15478256</td>
              <td>$124.00</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>Jane Cooper</td>
              <td>48967586</td>
              <td>$305.02</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>Guy Hawkins</td>
              <td>78958215</td>
              <td>$45.88</td>
              <td>Cancelled</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecentOrders;
