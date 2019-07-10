import React, { Component } from "react";
import M from "materialize-css";
import "./App.css";
import Content from "./Components/Layouts/content";

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return <Content />;
  }
}

export default App;
