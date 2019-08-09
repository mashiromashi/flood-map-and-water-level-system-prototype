import React, { Component } from "react";
import "materialize-css";
import "./CurrentRainLevel.css";
import apiAddress from "../../util/apiPath";

class CurrentRainLevel extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "current", rainInfo: [] };

    this._handleSelectChange = this._handleSelectChange.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
  }

  _handleSelectChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  }
  apiFetch = () => {
    fetch(`${apiAddress}/rain/getall`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        let rain = [];
        for (let i = 0; i < data.length; i++) {
          rain.push({
            _id: data[i]._id,
            createdAt: data[i].createdAt,
            laboSensor_level: data[
              i
            ].laboSensor_level.$numberDecimal.toString(),
            batasanSensor_level: data[
              i
            ].batasanSensor_level.$numberDecimal.toString()
          });
        }
        this.setState({
          rainInfo: rain
        });
      });
  };
  componentDidMount() {
    this.apiFetch();
  }
  render() {
    const { value, rainInfo } = this.state;
    return (
      <div
        className="col s12 m6 l4"
        style={{
          paddingLeft: "10px",
          // paddingTop: "10px",
          paddingRight: "10px",
          flexGrow: "2"
        }}
      >
        <h4>Rain Level</h4>
        <div className="input-field selected">
          <select onChange={this._handleSelectChange} value={value}>
            <option value="" disabled>
              Please Choose one
            </option>
            <option value="current" selected>
              Current
            </option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
            <option value="pastAll">Past All</option>
          </select>
        </div>
        <table className="striped" id="current">
          <thead>
            <tr>
              <th>Sapang Labo Sensor</th>
              <th>Batasan Bridge Sensor</th>
            </tr>
          </thead>
          <tbody>
            {rainInfo.map(rain => (
              <tr>
                <td>{rain.laboSensor_level}</td>
                <td>{rain.batasanSensor_level}</td>
                <td>{rain.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CurrentRainLevel;
