import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import login from "../../../images/login/login.svg";
import "./SignIn.css";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user1, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger text-center">{error?.message}</p>
      </div>
    );
  }

  const from = location.state?.from?.pathname || "/";
  if (user1) {
    navigate(from, { replace: true });
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const navigateSignUp = () => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email", { icon: "🚀" });
    } else {
      toast.error("Please enter your email address!");
    }
  };

  return (
    <div className="container">
      <PageTitle title="Login"></PageTitle>
      <h1 className="text-center my-5">Please Login</h1>
      <Row xs={1} md={1} lg={2} className="form-container">
        <Col>
          <img className="w-100" src={login} alt="" />
        </Col>
        <Col>
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-5">Email address or username</Form.Label>
              <Form.Control
                onBlur={(e) => setEmail(e.target.value)}
                size="md"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fs-5">Password</Form.Label>
              <Form.Control
                onBlur={(e) => setPassword(e.target.value)}
                size="md"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <div className=" d-flex justify-content-end">
              <Button className="fs-4 px-5 rounded-pill" variant="dark" type="submit">
                Login
              </Button>
            </div>
            <ToastContainer></ToastContainer>
            {errorElement}
          </Form>
          <p className="text-center mt-4 fs-5">
            Forget Password?
            <button onClick={resetPassword} className="text-primary ms-2 text-decoration-none border-0">
              Reset Password.
            </button>
          </p>
          <div className="d-flex align-items-center my-3">
            <div className="w-50 border-bottom border-2 mx-4"></div>
            <div className="">
              <p className="m-0">OR</p>
            </div>
            <div className="w-50 border-bottom border-2 mx-4"></div>
          </div>
          <SocialLogin></SocialLogin>
          <hr />
          <div className="redirect-signup">
            <h4 className="text-center fw-bold my-4">Don't have an account?</h4>
            <button onClick={navigateSignUp} className="social-btn w-75 mx-auto mb-5">
              Sign up for bike doctor
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
