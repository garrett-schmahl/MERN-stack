import React, { Component } from "react";

const PersonCard = (props) => {
  return (
    <div>
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {props.startingAge}</p>
      <p> Hair Color: {props.hairColor}</p>
    </div>
  );
};

export default PersonCard;
