import React, { Component } from "react";
import Map from "../Container/mapApi/MapApi";
import MapTables from "../Container/MapTables/MapTables";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div style={{ paddingTop: "50px" }}>
          <Map />
        </div>
        <div>
          <MapTables />
        </div>
      </div>
    );
  }
}

export default MapPage;
