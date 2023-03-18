import { Spin } from "antd";
import React from "react";

function Loading() {
  return (
    <div>
      <Spin size="large" className="loading"/>
    </div>
  );
}

export default Loading;
