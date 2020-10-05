import React, { Component } from 'react';
import { MDBContainer, MDBNavLink, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Form from './Form';
import FileUpload from './FileUpload';

class Modal extends Component {
  state = {
    modal9: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBNavLink to='#' color="info" onClick={this.toggle(9)}>Add</MDBNavLink>
        <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="top">
          <MDBModalHeader toggle={this.toggle(9)}>Add New Car or,
          {<FileUpload setSearchQueryParameter={this.props.setSearchQueryParameter} />}
          </MDBModalHeader>
          <MDBModalBody>
            {<Form setSearchQueryParameter={this.props.setSearchQueryParameter} />}
          </MDBModalBody>
          <MDBModalFooter style={{ justifyContent: "center" }}>
            {/* <MDBBtn color="secondary" onClick={this.toggle(9)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn> */}
            <span id="success" style={{ background: "#34cd34" }} hidden>Car(s) Added Successfully</span>
            <span id="error" style={{ background: "#e6baba" }} hidden>Action Failed. Try Again.</span>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;