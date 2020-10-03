import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class PiChart extends React.Component {
  api = 'http://127.0.0.1:8000';
  state = {
    dataPie: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  }

  renderPieChartData = (text) => {
    const url = (text === '') ? `${this.api}/details/` : `${this.api}/details/?q=${text}`;
    console.log(url)
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          dataPie: {
            labels: Object.keys(result),
            datasets: [
              {
                data: Object.keys(result).map((n) => result[n]),
              }
            ]
          }
        })
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  componentDidMount() {
    this.renderPieChartData(this.props.queryParameter)
  }

  componentWillReceiveProps(nextProps) {
    this.renderPieChartData(nextProps.queryParameter);
  }


  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Car Manufacturer</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default PiChart;