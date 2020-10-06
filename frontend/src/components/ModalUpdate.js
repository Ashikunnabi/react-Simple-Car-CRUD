import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import FormUpdate from './FormUpdate';

class ModalUpdate extends Component {
  state = {
    modal9: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
    this.props.resetModal();
  }

  componentWillReceiveProps(nextProps) {
    let modalNumber = 'modal' + nextProps.modalNumber;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <MDBContainer>
        {/* <MDBNavLink to='#' color="info" onClick={this.toggle(9)}>Add</MDBNavLink> */}
        <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="top">
          <MDBModalHeader toggle={this.toggle(9)}>Update Car Information
        </MDBModalHeader>
          <MDBModalBody>
            {<FormUpdate data={this.props.rowDetails} closeModal={this.toggle(9)} setSearchQueryParameter={this.props.setSearchQueryParameter}/>}
          </MDBModalBody>
          <MDBModalFooter style={{ justifyContent: "center" }}>
            {/* <MDBBtn color="secondary" onClick={this.toggle(9)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn> */}
            <span id="success" style={{ background: "#34cd34" }} hidden>Car Details Changed Successfully</span>
            <span id="success-delete" style={{ background: "#34cd34" }} hidden>Car Deleted Successfully</span>
            <span id="error" style={{ background: "#e6baba" }} hidden>Action Failed. Try Again.</span>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalUpdate;