import React, { Component } from "react";
import Army from "./Higherorder";

class Vidya extends Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.hochadlegunshots}>
          vidya{this.props.hocgunname} gunshots:{this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Vidya, 10);
