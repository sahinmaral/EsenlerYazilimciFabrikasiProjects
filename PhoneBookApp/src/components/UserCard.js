import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";

export default class UserCard extends Component {
  render() {
    let user = this.props.user;

    return (
      <Card onClick={() => this.props.setCurrentUser(user)}>
        <CardBody>
          <div className="thumbnail">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <Container className="main-informations">
            <Row>
              <Col>
                <Row>
                  <label>{user.name}</label>
                </Row>
                <Row>
                  <label style={{fontSize:"13px",color:"#636363"}}>{user.username}</label>
                </Row>
              </Col>
              <Col className="phone-number">
                <label>{user.phone}</label>
              </Col>
              <Col className="email-address">
                <label>{user.email}</label>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    );
  }
}
