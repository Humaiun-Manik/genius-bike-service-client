import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className=" text-center my-5">
        <h1 className="text-danger">Your Email is not verified!!</h1>
        <h3 className="text-success">Please verified your email address.</h3>
        <button
          className="btn btn-primary mt-3"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Sent email");
          }}
        >
          Send verification email again
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
