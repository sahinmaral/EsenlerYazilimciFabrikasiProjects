import React, { Component } from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../redux/dispatchUtils";

class ResetCounter extends Component {
  render() {
    let { dispatch, reset } = { ...this.props };

    return (
      <div>
        <button onClick={() => dispatch(reset)}>R</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ResetCounter);
