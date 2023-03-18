import React, { Component } from "react";
import { connect } from "react-redux";
import DecreaseCounter from "./DecreaseCounter";
import IncreaseCounter from "./IncreaseCounter";
import ResetCounter from "./ResetCounter";

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.counterReducer.counter}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DecreaseCounter />
          <ResetCounter />
          <IncreaseCounter />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counterReducer: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
