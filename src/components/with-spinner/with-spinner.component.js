import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles.jsx";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...othersProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...othersProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
