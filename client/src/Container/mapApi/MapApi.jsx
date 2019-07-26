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
            className="responsive-img"
            src="/img/MAP_3_a.jpg"
            alt=""
            style={{
              // maxWidth: "100%",
              // height: "auto",
              paddingTop: "50px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Map;
