import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default class UserModal extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.setModalToggle(!this.props.modalToggle)
  }

  render() {
    let user = this.props.currentUser;

    return (
      <div>
        <Modal
          isOpen={this.props.modalToggle}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{user.name}</ModalHeader>
          <ModalBody>
            <div className="main-informations">
              <div className="thumbnail">
              <FontAwesomeIcon icon={faUser} />
              </div>
              <div style={{display:"flex",flexDirection:"column"}}>
                <label>{user.name}</label>
                <label style={{fontSize:"13px",color:"#636363"}}>{user.username}</label>
              </div>
            </div>
            <div className="extra-information-cards">
              <div style={{display:"flex",flexDirection:"column"}}>
                <label  style={{fontSize:"13px",color:"#7C7C7C"}}>Phone Number</label>
                <label>{user.phone}</label>
              </div>
              <div style={{backgroundColor:"rgba(137, 242, 166, 0.66)",width:"40px",height:"40px",borderRadius:"6px"}}>
                <FontAwesomeIcon icon={faPhone} style={{color:"#00C938",marginTop:"12px",marginLeft:"12px"}}/>
              </div>
            </div>
            <div className="extra-information-cards">
              <div style={{display:"flex",flexDirection:"column"}}>
                <label  style={{fontSize:"13px",color:"#7C7C7C"}}>Email Address</label>
                <label>{user.email}</label>
              </div>
              <div style={{backgroundColor:"rgba(242, 225, 137, 0.66)",width:"40px",height:"40px",borderRadius:"6px"}}>
                <FontAwesomeIcon icon={faEnvelope} style={{color:"#FFB422",marginTop:"12px",marginLeft:"12px"}}/>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
