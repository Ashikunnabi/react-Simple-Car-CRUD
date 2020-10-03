import React, { useState } from "react";
import './Form.css'
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const Form = (props) => {
  const api = "http://127.0.0.1:8000"
  const [data, setData] = useState(props.data);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value });
    var data = JSON.stringify(object);

    fetch(`${api}/car/update/${props.data.id}/`, {
      method: 'PATCH',
      body: data,
    })
      .then(response => response.json())
      .then(result => {
        document.getElementById('success').removeAttribute('hidden');
        document.getElementById('error').setAttribute('hidden', 'hidden');
      })
      .catch(error => {
        document.getElementById('success').setAttribute('hidden', 'hidden');
        document.getElementById('error').removeAttribute('hidden');
        console.error('Error:', error);
      });
  }

  const handleDelete = () => {
    fetch(`${api}/car/delete/${props.data.id}/`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(result => {
        document.getElementById('success-delete').removeAttribute('hidden');
        document.getElementById('error').setAttribute('hidden', 'hidden');
      })
      .catch(error => {
        document.getElementById('success-delete').setAttribute('hidden', 'hidden');
        document.getElementById('error').removeAttribute('hidden');
        console.error('Error:', error);
      });
  }

  const handleChange = (e) => {
    var key = document.getElementsByName(e.target.name)[0].value;
    var value = `${e.target.value}`;
    setData({
      key: value
    })
  }


  return (
    <MDBRow>
      <MDBCol md="12">
        <form onSubmit={handleSubmit}>
          <div>
            <MDBInput label="Manufacturer name" group name="manufacturer_name" type="text" validate error="wrong" required
              value={data.manufacturer_name} onChange={handleChange} success="right" />
            <MDBInput label="Model" group type="text" name="model" validate error="wrong" required
              value={data.model} success="right" />
            <MDBInput label="Year" type="number" name="year" validate error="wrong" required
              value={data.year} success="right" />
            <MDBInput label="Producing country name" name="producing_country_name" type="text" validate error="wrong" required
              value={data.producing_country_name} success="right" />
          </div>
          <div className="text-center">
            <MDBBtn type="submit" color="primary">Save Changes</MDBBtn>
            <MDBBtn onClick={handleDelete} color="danger">Delete</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  );
};

export default Form;