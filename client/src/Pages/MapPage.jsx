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
      <div className="container" style={{ display: "flex" }}>
        <div style={{ paddingTop: "50px", flexGrow: "2" }}>
          <Map />
        </div>
        <div style={{ paddingTop: "80px", flexGrow: "4" }}>
          <MapTables />
        </div>
      </div>
    );
  }
}

export default MapPage;
