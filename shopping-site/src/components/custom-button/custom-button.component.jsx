import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignin,
  inverted,
  ...otherProps
}) => (
  <button
    className={`custom-button ${isGoogleSignin ? "google-sign-in" : ""} 
    ${inverted ? "inverted" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
