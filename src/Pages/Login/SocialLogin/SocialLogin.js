import { faFacebookSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/social-icon/google.png";
import "./Sociallogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger text-center">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div className="mx-auto social-buttons">
      <button onClick={() => signInWithGoogle()} className="social-btn">
        <img src={google} alt="" />
        <p>Continue with Google</p>
      </button>
      <button onClick={() => signInWithGithub()} className="social-btn github-btn">
        <FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon>
        <p>Continue with Github</p>
      </button>
      <button className="social-btn facebook-btn">
        <FontAwesomeIcon className="icon" icon={faFacebookSquare}></FontAwesomeIcon>
        <p>Continue with Facebook</p>
      </button>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
