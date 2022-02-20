import React from "react";
import { CustomButtonContainer } from "./custom-button.styles.jsx";

const CustomButton = (props) => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
);

export default CustomButton;
