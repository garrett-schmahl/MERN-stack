import React, { Component } from "react";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.startingAge,
    };
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.lastName}, {this.props.firstName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={this.incrementAge}>Happy Birthday! </button>
      </div>
    );
  }
  incrementAge = () => {
    this.setState({ age: this.state.age + 1 });
    console.log(this.state.age);
  };
}

export default CardComponent;
