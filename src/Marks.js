import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived state From Props");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 107) {
      console.log("marks update");
      console.log(nextProps, nextState);
      return true;
    }
    console.log(nextProps, nextState);
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("marks-get snapshop before update");
    console.log(prevProps, prevState);
    return 45;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("marks-get snapshop after update");
    console.log(prevProps, prevState, snapshot);
  }
  render() {
    return (
      <div>
        <h1>roll no:{this.state.mroll}</h1>
      </div>
    );
  }
}
