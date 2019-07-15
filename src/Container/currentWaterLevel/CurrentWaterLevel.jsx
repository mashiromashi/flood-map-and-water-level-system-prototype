import React, { Component } from "react";

class CurrentWaterLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ float: "right" }} className="col s12 m6 l4">
        <h6>Curent Water Level </h6>
        <table className="striped">
          <thead>
            <tr>
              <th>Water Level </th>
              <th>Indicator</th>
            </tr>
          </thead>
          <tbody>
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

export default CurrentWaterLevel;
