import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./sign-up.styles.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ name: "", email: "", password: "", confirmPassword: "" });
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfile(user, { displayName });
      this.setState({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      console.error(err);
      this.setState({ name: "", email: "", password: "", confirmPassword: "" });
      return;
    }

    return;
  };

  handleChange = async (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">Sign Up</h2>
        <span>Create a new account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Name"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          ></FormInput>

          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          ></FormInput>

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
