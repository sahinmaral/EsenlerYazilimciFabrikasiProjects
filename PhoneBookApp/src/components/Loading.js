import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class Loading extends Component {
  render() {
    return (
      <Fragment>
        <div className="loading-logo">
          <FontAwesomeIcon icon={faSpinner}/>
        </div>
      </Fragment>
    );
  }
}
