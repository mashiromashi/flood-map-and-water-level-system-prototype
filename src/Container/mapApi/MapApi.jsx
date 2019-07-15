import React, { Component } from "react";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="col s12">
          <img
            src="/img/MAP_3_a.jpg"
            alt=""
            style={{
              maxWidth: "80%",
              height: "auto",
              paddingTop: "50px",
              flexGrow: "2"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Map;
