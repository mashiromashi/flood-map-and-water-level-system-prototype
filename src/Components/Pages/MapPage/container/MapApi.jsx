import React, { Component } from "react";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="col s12 m6 l4 left-align">
          <img
            src="/img/MAP_3_a.jpg"
            alt=""
            style={{ maxWidth: "85%", height: "auto", paddingTop: "50px" }}
          />
        </div>
      </div>
    );
  }
}

export default Map;
