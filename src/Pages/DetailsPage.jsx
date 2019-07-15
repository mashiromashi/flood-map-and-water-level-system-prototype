import React, { Component } from "react";
import CurrentRainLevel from "../Container/currentRainLevel/CurrentRainLevel";
import CurrentWaterLevel from "../Container/currentWaterLevel/CurrentWaterLevel";

class DetailsPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <CurrentRainLevel />
        <CurrentWaterLevel />
      </div>
    );
  }
}

export default DetailsPage;
