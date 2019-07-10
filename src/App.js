import React, { Component } from "react";
import M from "materialize-css";
import "./App.css";
import Content from "./Components/Layouts/content";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
