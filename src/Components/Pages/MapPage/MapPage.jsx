import React, { Component } from "react";
import Map from "./container/MapApi";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Map />
      </div>
    );
  }
}

export default MapPage;
