import { faFacebookSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/social-icon/google.png";
import Loading from "../../Shared/Loading/Loading";
import "./Sociallogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();

  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <div>
        <p className="text-danger text-center">
          Error: {googleError?.message} {githubError?.message}
        </p>
      </div>
    );
  }

  const from = location.state?.from?.pathname || "/";
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
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
