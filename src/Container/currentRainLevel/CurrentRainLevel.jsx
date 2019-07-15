import React, { Component } from "react";

class CurrentRainLevel extends Component {
  state = {};
  render() {
    return (
      <div style={{ float: "left" }} className="col s12 m6 l4">
        <h6>Current Rain level</h6>
        <table className="striped">
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
