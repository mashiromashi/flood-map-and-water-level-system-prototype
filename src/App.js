import React, { Component } from "react";
import M from "materialize-css";
import "./App.css";
import Content from "./Components/Layouts/content";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
