import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu-items">
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Brand as={Link} className="logo" to="/">
            <p>The</p>
            <img src={logo} alt="" />
            <p>Doctor</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#experts">Experts</Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
