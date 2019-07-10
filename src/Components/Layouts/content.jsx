import React, { Component } from "react";
import {Route,Switch} from "react-router-dom"
class Content extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path ="/" component ={Dashboard}/>
          <Route path ="/login" component={Login} />

        </Switch>
      </div>
    );
  }
}

export default Content;
