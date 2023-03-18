import React, { Component } from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../redux/dispatchUtils";

class IncreaseCounter extends Component {
  render() {
    let { dispatch, increment } = { ...this.props };

    return (
      <div>
        <button onClick={() => dispatch(increment)}>+</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(IncreaseCounter);
