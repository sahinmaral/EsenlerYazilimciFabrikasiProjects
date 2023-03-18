import React, { Component } from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../redux/dispatchUtils";

class DecreaseCounter extends Component {
  render() {
    let { dispatch, decrement } = { ...this.props };

    return (
      <div>
        <button onClick={() => dispatch(decrement)}>-</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(DecreaseCounter);
