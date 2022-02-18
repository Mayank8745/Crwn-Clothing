import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.css";

const SignInAndSignUp = () => (
  <div className="sign-up-and-sign-in">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
