import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        
        position:"absolute",
        top: "94px",
        left: 0,
        backgroundColor: "#f8f9fa",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      
      <Nav className="flex-column">
      
        <NavDropdown title="Woman's Fashion" id="nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Mens's Fashion" id="nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#features">Electronics</Nav.Link>
        <Nav.Link href="#pricing">Home & Lifestyle</Nav.Link>
        <Nav.Link href="#deets">Medicine</Nav.Link>
        <Nav.Link href="#memes">Sports & Outdoor</Nav.Link>
        <Nav.Link href="#pricing">Baby's & Toys</Nav.Link>
        <Nav.Link href="#deets">Groceries</Nav.Link>
        <Nav.Link href="#memes">Health & Beauty</Nav.Link>

      </Nav>
    </div>
  );
};

export default Sidebar;
