import React, { Component } from "react";
import "materialize-css";
import M from "materialize-css";

class CurrentRainLevel extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingRight: "10px",
          flexGrow: "2"
        }}
        className="col s12 m6 l4"
      >
        <div className="input-field selected">
          <select>
            <option value="current">Current</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
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
