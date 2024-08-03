import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Registering the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Activity",
        data: Array.from({ length: 30 }, () =>
          Math.floor(Math.random() * 10000)
        ),
        borderColor: "#4e73df",
        fill: false,
      },
    ],
  };

  return (
    <Card className="text-light bg-dark mb-3">
      <Card.Body>
        <Card.Title>Activity</Card.Title>
        <Line data={data} />
      </Card.Body>
    </Card>
  );
};

export default ActivityChart;
