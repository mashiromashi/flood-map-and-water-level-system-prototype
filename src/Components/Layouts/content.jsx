import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MapPage from "../Pages/MapPage/MapPage";
import DetailsPage from "../Pages/DetailPage/DetailsPage";
class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MapPage} />
          <Route path="/details" component={DetailsPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;
