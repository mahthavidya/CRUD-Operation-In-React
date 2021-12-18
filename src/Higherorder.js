import React, { Component } from "react";

const Army = (Men, shot) => {
  class Higherorder extends Component {
    state = {
      gunshots: 0,
    };
    handlegunshots = () => {
      this.setState({ gunshots: this.state.gunshots + shot });
    };
    render() {
      return (
        <Men
          hocgunname="Ak47"
          hocgunshots={this.state.gunshots}
          hochadlegunshots={this.handlegunshots}
          {...this.props}
        />
      );
    }
  }
  return Higherorder;
};
export default Army;
