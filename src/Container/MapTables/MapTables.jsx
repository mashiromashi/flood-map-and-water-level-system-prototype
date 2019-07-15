import React, { Component } from "react";

class MapTables extends Component {
  state = {};
  render() {
    return (
      <div style={{ float: "right" }}>
        <div className="col s12 m6 l4 center-align">
          <table className="centered responsive-table">
            <thead>
              <tr>
                <th>Water Level</th>
                <th>Indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something</td>
                <td>something</td>
              </tr>
              <tr>
                <td>okay</td>
                <td>yeah</td>
              </tr>
              <tr>
                <td>okay</td>
                <td>yeah</td>
              </tr>
              <tr>
                <td>okay</td>
                <td>yeah</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="col s12 m6 l4 center-align"
          style={{ paddingTop: "50px" }}
        >
          <table className="centered responsive-table">
            <thead>
              <tr>
                <th>Rain Level</th>
                <th>Indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something here</td>
                <td>I do not know </td>
              </tr>
              <tr>
                <td>Something here</td>
                <td>I do not know </td>
              </tr>
              <tr>
                <td>Something here</td>
                <td>I do not know </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MapTables;
