import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="blue">
        <div class="nav-wrapper">
          <ul id="nav-mobile">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/details">Details</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
