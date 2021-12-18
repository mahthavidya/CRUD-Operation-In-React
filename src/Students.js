import React, { Component } from "react";
import Marks from "./Marks";

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      roll: 101,
    };
  }
  clickHandler = () => {
    console.log("button clicked");
    // this.setState({ roll: 102 });
    this.setState({ roll: this.state.roll + 2 });
  };

  render() {
    return (
      <div>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandler}>Change</button>
      </div>
    );
  }
}
