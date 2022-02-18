import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children, googleSignIn, inverted, ...othersProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      googleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...othersProps}
  >
    {children}
  </button>
);

export default CustomButton;
