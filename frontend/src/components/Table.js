import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import './Table.css';
import ModalUpdate from './ModalUpdate';
const api = "http://127.0.0.1:8000"

const Table = (props) => {
  const [cars, setCars] = useState([])
  const [modal, setModal] = useState()
  const [selectedRow, setSelectedRow] = useState({})

  const renderTableData = (text) => {
    const url = (text === '') ? `${api}/cars/` : `${api}/cars/?q=${text}`;
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        let custom_result = result.map(r => {
          r.id = r._id.$oid;
          return r;
        })
        setCars(custom_result)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const resetModal = () => {
    setModal(0);
    setSelectedRow({});
  }

  const addRowHandlers = () => {
    var table = document.getElementById("cars-table");
    var rows = table.getElementsByTagName("tr");


    for (let i = 0; i < rows.length; i++) {
      var currentRow = table.rows[i];
      var createClickHandler = function (row) {
        return function () {
          var cell = row.getElementsByTagName("td")[0];
          if (cell !== undefined) {
            var id = cell.innerHTML;
            cars.map(r => {
              if (r.id === id) {
                setSelectedRow(r);
                return r;
              }
              return {};
            });
            setModal(9);
          }
        };
      };
      currentRow.ondblclick = createClickHandler(currentRow);
    }
  }

  useEffect(() => {
    renderTableData(props.queryParameter);
  }, [props.queryParameter])
  setTimeout(() => { addRowHandlers(); }, 1000);

  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
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
      <ModalUpdate modalNumber={modal} resetModal={resetModal} rowDetails={selectedRow} />
    </div>
  );
}

export default Table;