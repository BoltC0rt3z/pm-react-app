import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import Router from "./Router";

const Navbar = (props) => (
    <nav>
        <ui>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
        </ui>
    </nav>
)

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
