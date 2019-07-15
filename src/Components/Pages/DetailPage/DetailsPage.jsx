import React, { Component } from "react";
import CurrentRainLevel from "./container/currentRainLevel/CurrentRainLevel";
import CurrentWaterLevel from "./container/currentWaterLevel/CurrentWaterLevel";

class DetailsPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <CurrentRainLevel />
        <CurrentWaterLevel />
      </div>
    );
  }
}

export default DetailsPage;
