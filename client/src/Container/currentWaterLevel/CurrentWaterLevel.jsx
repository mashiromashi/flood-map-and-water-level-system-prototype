import React, { Component } from "react";
import apiAddress from "../../util/apiPath";

class CurrentWaterLevel extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "current", waterInfo: [] };

    this._handleSelectChange = this._handleSelectChange.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
  }

  _handleSelectChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  }
  _handleOnSelect(e) {}
  apiFetch = () => {
    fetch(`${apiAddress}/water/getall`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        this.setState({ waterInfo: data });
        //console.log(this.state.waterInfo);
      });
  };
  componentDidMount() {
    this.apiFetch();
  }
  render() {
    const { value, waterInfo } = this.state;
    console.log(waterInfo);

    return (
      <div
        className="col s12 m6 l4"
        style={{ paddingLeft: "10px", flexGrow: "2" }}
      >
        <h4>Water Level</h4>
        <div className="input-field selected">
          <select value={value} onChange={this._handleSelectChange}>
            <option value="" disabled>
              Please Choose One
            </option>
            <option value="current">Current</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
            <option value="pastAll">Past All</option>
          </select>
        </div>
        <table className="striped currentWaterTable">
          <thead>
            <tr>
              <th>Sapang Labo Sensor</th>
              <th>Batasan Bridge Sensor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>30in</td>
              <td>30in</td>
            </tr>
            <tr>
              <td>25 in</td>
              <td>10in</td>
            </tr>
            <tr>
              <td>25in</td>
              <td>10in</td>
            </tr>
            <tr>
              <td>25in</td>
              <td>10in</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CurrentWaterLevel;
