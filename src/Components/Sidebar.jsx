import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaChartBar, FaBell, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-light">
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-light">
          <FaHome /> Dashboard
        </Nav.Link>
        <Nav.Link href="#" className="text-light">
          <FaChartBar /> Reports
        </Nav.Link>
        <Nav.Link href="#" className="text-light">
          <FaBell /> Notifications
        </Nav.Link>
        <Nav.Link href="#" className="text-light">
          <FaUser /> Profile
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
