import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Cars List</h5>
            <p>
              In this application you will get cars information. You can easily search cars by Manufacturer Name, 
              add car information, delete & update cars information. One extra feature of this application is you can easily 
              add bulk car information by uploading excel with (manufacturer_name, model, year, producing_country_name) required columns.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Technology Used</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"> NodeJS & ReactJs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Python (FastAPI)</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">NoSQL (MongoDB)</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; Copyright: <a href="https://ashikunnabi.web.app"> Md. Ashikun Nabi </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;