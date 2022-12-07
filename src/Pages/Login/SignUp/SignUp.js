import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error || updateError) {
    errorElement = (
      <div>
        <p className="text-danger text-center">{error?.message}</p>
      </div>
    );
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Your two passwords are not the same 🤯");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  return (
    <div className="container sign-up mb-5">
      <h1 className="text-center my-5 fw-bolder">Sign up for free to start listening.</h1>
      <Row className="form-container">
        <Col lg={3}></Col>
        <Col xs={12} lg={6}>
          <SocialLogin></SocialLogin>
          <div className="d-flex align-items-center my-4">
            <div className="w-50 border-bottom border-2 mx-4"></div>
            <div className="">
              <p className="m-0">OR</p>
            </div>
            <div className="w-50 border-bottom border-2 mx-4"></div>
          </div>
          <h4 className="text-center fw-bolder mb-3">Sign up with your email address</h4>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="input-label fw-bolder">What's your name?</Form.Label>
              <Form.Control
                onBlur={(e) => setName(e.target.value)}
                size="md"
                type="text"
                placeholder="Enter your name."
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="input-label fw-bolder">What's your email?</Form.Label>
              <Form.Control
                onBlur={(e) => setEmail(e.target.value)}
                size="md"
                type="email"
                placeholder="Enter your email."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="input-label fw-bold">Create a password</Form.Label>
              <Form.Control
                onBlur={(e) => setPassword(e.target.value)}
                size="md"
                type="password"
                placeholder="Create a password."
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="input-label fw-bold">Confirm password</Form.Label>
              <Form.Control
                onBlur={(e) => setConfirmPassword(e.target.value)}
                size="md"
                type="password"
                placeholder="Confirm password."
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className={agree ? "" : "text-danger"}
                onClick={() => setAgree(!agree)}
                type="checkbox"
                name="terms"
                id="terms"
                label="Accept Bike Doctor Terms and Condition."
              />
            </Form.Group>
            <div className="text-center">
              <Button disabled={!agree} className="fs-4 px-5 rounded-pill" variant="dark" type="submit">
                Sign up
              </Button>
            </div>
          </Form>
          {errorElement}
          <p className="text-center my-4 fs-5">
            Have an account?{" "}
            <Link className="text-primary fw-bold" to={"/login"}>
              Login.
            </Link>
          </p>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
};

export default SignUp;
