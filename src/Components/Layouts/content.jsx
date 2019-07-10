import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MapPage from "../Pages/MapPage/MapPage";
class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MapPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;
