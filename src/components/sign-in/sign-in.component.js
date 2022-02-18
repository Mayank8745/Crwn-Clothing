import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./sign-in.styles.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Sign In</h1>
        <h2>I already have an account</h2>
        <span>Sign In with Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} googleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
