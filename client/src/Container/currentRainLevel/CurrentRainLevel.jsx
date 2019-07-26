import React, { Component } from "react";
import "materialize-css";
import "./CurrentRainLevel.css";

class CurrentRainLevel extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "current" };

    this._handleSelectChange = this._handleSelectChange.bind(this);
  }

  _handleSelectChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  }

  render() {
    const { value } = this.state;
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
              <th>Rain Level</th>
              <th>Indicator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>It's Rising</td>
              <td>I dont know how</td>
            </tr>
            <tr>
              <td>It is also rising</td>
              <td>How ????????</td>
            </tr>
            <tr>
              <td>It is also rising</td>
              <td>How ????????</td>
            </tr>
            <tr>
              <td>It is also rising</td>
              <td>How ????????</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CurrentRainLevel;
