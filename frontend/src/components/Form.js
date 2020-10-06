import React from "react";
import './Form.css'
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const Form = (props) => {
  const api = "http://127.0.0.1:8000"

  const setSearchValue = (text) => {
    props.setSearchQueryParameter(text);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value });
    var data = JSON.stringify(object);
    console.log(data);
    fetch(`${api}/car/add/`, {
      method: 'POST',
      body: data,
    })
      .then(response => response.json())
      .then(result => {
        document.getElementById('success').removeAttribute('hidden');
        document.getElementById('error').setAttribute('hidden', 'hidden');
        setSearchValue('all');
      })
      .catch(error => {
        document.getElementById('success').setAttribute('hidden', 'hidden');
        document.getElementById('error').removeAttribute('hidden');
        console.error('Error:', error);
      });
  }

  return (
    <MDBRow>
      <MDBCol md="12">
        <form onSubmit={handleSubmit}>
          <div>
            <MDBInput label="Manufacturer name" group name="manufacturer_name" type="text" validate error="wrong" required
              success="right" />
            <MDBInput label="Model" group type="text" name="model" validate error="wrong" required
              success="right" />
            <MDBInput label="Year" type="number" name="year" validate error="wrong" required
              success="right" />
            <MDBInput label="Producing country name" name="producing_country_name" type="text" validate error="wrong" required
              success="right" />
          </div>
          <div className="text-center">
            <MDBBtn type="submit" color="primary">Save</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  );
};

export default Form;