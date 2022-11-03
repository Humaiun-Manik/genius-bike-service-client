import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import login from "../../../images/login/login.svg";
import google from "../../../images/social-icon/google.png";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">Please Login</h1>
      <Row xs={1} md={1} lg={2} className="px-5">
        <Col>
          <img className="w-100" src={login} alt="" />
        </Col>
        <Col className="p-4">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control size="lg" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>
          <div className="d-flex align-items-center my-3">
            <div className="w-50 border-bottom border-2 mx-4"></div>
            <div className="">
              <p className="m-0">OR</p>
            </div>
            <div className="w-50 border-bottom border-2 mx-4"></div>
          </div>
          <div className="w-75 mx-auto">
            <button className="social-btn">
              <img src={google} alt="" />
              <p>Continue with Google</p>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
