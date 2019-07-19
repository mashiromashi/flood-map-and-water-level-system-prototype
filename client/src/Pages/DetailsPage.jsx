import React, { Component } from "react";
import CurrentRainLevel from "../Container/currentRainLevel/CurrentRainLevel";
import CurrentWaterLevel from "../Container/currentWaterLevel/CurrentWaterLevel";

class DetailsPage extends Component {
  state = {};
  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "600px",
          alignContent: "space-around",
          paddingTop: "40px"
        }}
      >
        <CurrentRainLevel />
        <CurrentWaterLevel />
      </div>
    );
  }
}

export default DetailsPage;
