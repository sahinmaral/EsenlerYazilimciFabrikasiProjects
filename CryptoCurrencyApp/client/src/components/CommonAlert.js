import React from "react";
import { Alert } from "antd";

function CommonAlert({ type, message, className }) {
  return <Alert type={type} message={message} className={className} />;
}

export default CommonAlert;
