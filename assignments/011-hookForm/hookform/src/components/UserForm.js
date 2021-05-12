import React, { useState } from "react";

const UserForm = (props) => {
  const { inputs, setInputs } = props;
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const errorCheck = (e) => {
    if (e.target.name === "firstName") {
      if (e.target.value.length < 2) {
        setErrors({
          ...errors,
          firstNameError: "First name must be at least 2 characters",
        });
      } else {
        setErrors({
          ...errors,
          firstNameError: "",
        });
      }
    }
    if (e.target.name === "lastName") {
      if (e.target.value.length < 2) {
        setErrors({
          ...errors,
          lastNameError: "Last name must be at least 2 characters",
        });
      } else {
        setErrors({
          ...errors,
          lastNameError: "",
        });
      }
    }
    if (e.target.name === "email") {
      if (e.target.value.length < 5) {
        setErrors({
          ...errors,
          emailError: "Email must be at least 5 characters",
        });
      } else {
        setErrors({
          ...errors,
          emailError: "",
        });
      }
    }
    if (e.target.name === "password") {
      if (e.target.value.length < 8) {
        setErrors({
          ...errors,
          passwordError: "Password must be at least 8 characters",
        });
      } else {
        setErrors({
          ...errors,
          passwordError: "",
        });
      }
    }

    if (e.target.name === "confirmPassword") {
      if (e.target.value != inputs.password) {
        setErrors({
          ...errors,
          confirmPasswordError: "Passwords do not match",
        });
      } else {
        setErrors({
          ...errors,
          confirmPasswordError: "",
        });
      }
    }
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    errorCheck(e);
  };

  return (
    <form>
      {/* {JSON.stringify(errors)}
      {JSON.stringify(inputs)} */}
      <div className="inputBox">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" onChange={onChange} />
      </div>
      {errors.firstNameError ? <p>{errors.firstNameError}</p> : ""}
      <div className="inputBox">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" onChange={onChange} />
      </div>
      {errors.lastNameError ? <p>{errors.lastNameError}</p> : ""}
      <div className="inputBox">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={onChange} />
      </div>
      {errors.emailError ? <p>{errors.emailError}</p> : ""}
      <div className="inputBox">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" onChange={onChange} />
      </div>
      {errors.passwordError ? <p>{errors.passwordError}</p> : ""}
      <div className="inputBox">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="text" name="confirmPassword" onChange={onChange} />
      </div>
      {errors.confirmPasswordError ? <p>{errors.confirmPasswordError}</p> : ""}
      <input type="submit" className="submitButton" />
    </form>
  );
};

export default UserForm;
