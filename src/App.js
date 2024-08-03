import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Components/Sidebar";
import DashboardCards from "./Components/DashboardCards ";
import ActivityChart from "./Components/ActivityChart";
import NetProfit from "./Components/NetProfit";
import Goals from "./Components/Goals";
import RecentOrders from "./Components/RecentOrders";
import CustomerFeedback from "./Components/CustomerFeedback";
function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-4">
          <DashboardCards />
          <Row>
            <Col md={8}>
              <ActivityChart />
            </Col>
            <Col md={4}>
              <NetProfit />
              <Goals />
            </Col>
          </Row>
          <RecentOrders />
          <CustomerFeedback />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
