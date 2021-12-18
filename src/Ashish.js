import React, { Component } from "react";
import Army from "./Higherorder";

class Ashish extends Component {
  render() {
    return (
      <div>
        <h2>camp:{this.props.camp}</h2>
        <h3 onMouseOver={this.props.hochadlegunshots}>
          Ashish{this.props.hocgunname} gunshots:{this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Ashish, 20);
