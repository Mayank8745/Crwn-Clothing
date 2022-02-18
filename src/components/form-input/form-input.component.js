import React from "react";
import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...othersProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...othersProps}
    ></input>
    {label ? (
      <label
        className={`${
          othersProps.value.length ? "shirnk" : ""
        }form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
