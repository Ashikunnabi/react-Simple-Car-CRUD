import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
const api = "http://127.0.0.1:8000"

const Table = (props) => {
  const [cars, setCars] = useState([])

  const renderTableData = (text) => {
    const url = (text == '') ? `${api}/cars/` : `${api}/cars/?q=${text}`;
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setCars(result)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    renderTableData(props.queryParameter);
  }, [props.queryParameter])

  const data = {
    columns: [
      {
        label: 'Manufacturer Name',
        field: 'manufacturer_name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Model',
        field: 'model',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Producing Country Name',
        field: 'producing_country_name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Action',
        field: '',
        sort: '',
        width: 100
      }
    ],    
    rows: cars
  };

  return (
    <div className="container-fluid">
      <h3 className="text-center">Cars List</h3>
      <MDBDataTable id="cars-table"
        striped
        bordered
        hover
        responsive
        data={data}
      />
    </div>
  );
}

export default Table;