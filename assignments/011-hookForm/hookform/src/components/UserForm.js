import React from "react";

const UserForm = (props) => {
  const { inputs, setInputs } = props;
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="text" name="confirmPassword" onChange={onChange} />
      </div>
      <input type="submit" />
    </form>
  );
};

export default UserForm;
