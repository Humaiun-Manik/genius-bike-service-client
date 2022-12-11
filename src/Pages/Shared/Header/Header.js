import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

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
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link href="/home#experts">Experts</Nav.Link>
              {user && (
                <>
                  <Nav.Link href="/addService">Add</Nav.Link>
                  <Nav.Link href="/manage">Manage</Nav.Link>
                  <Nav.Link href="/Orders">Orders</Nav.Link>
                </>
              )}
              {user ? (
                <button
                  className="border-0 bg-info text-white fs-5 sign-out-btn"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
