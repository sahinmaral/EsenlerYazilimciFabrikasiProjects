import React from "react";
import CurrencyTable from "./CurrencyTable";
import NameFilter from "./NameFilter";
import { Col, Row } from "antd";
import Navbar from "./Navbar";

function Container() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Row>
          <Col xs={0} sm={2}></Col>
          <Col xs={24} sm={20}>
            <NameFilter />
          </Col>
          <Col xs={0} sm={2}></Col>
        </Row>
        <Row>
          <Col xs={0} sm={2}></Col>
          <Col xs={24} sm={20}>
            <CurrencyTable />
          </Col>
          <Col xs={0} sm={2}></Col>
        </Row>
      </div>
    </>
  );
}

export default Container;
