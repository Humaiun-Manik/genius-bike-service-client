import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import login from "../../../images/login/login.svg";
import google from "../../../images/social-icon/google.png";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGithub } from "@fortawesome/free-brands-svg-icons";

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
              <Form.Label className="fs-5">Email address or username</Form.Label>
              <Form.Control size="md" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fs-5">Password</Form.Label>
              <Form.Control size="md" type="password" placeholder="Password" />
            </Form.Group>
            <div className=" d-flex justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="fs-4 px-5 rounded-pill" variant="dark" type="submit">
                Login
              </Button>
            </div>
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
            <button className="social-btn github-btn">
              <FontAwesomeIcon className="github-icon" icon={faGithub}></FontAwesomeIcon>
              <p>Continue with Github</p>
            </button>
            <button className="social-btn facebook-btn">
              <FontAwesomeIcon className="facebook-icon" icon={faFacebookSquare}></FontAwesomeIcon>
              <p>Continue with Facebook</p>
            </button>
          </div>
          <hr />
          <div className="redirect-to-signup">
            <h4 className="text-center fw-bold my-4">Don't have an account?</h4>
            <button className="social-btn w-75 mx-auto">Sign up for bike doctor</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
