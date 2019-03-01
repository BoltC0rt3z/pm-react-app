import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import RouterComponent from "./Router";
import Header from "./components/layout/Header";


const Navbar = (props) => (
    <nav>
        <ui>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/todolist">Todo</NavLink></li>
        </ui>
    </nav>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RouterComponent />
      </div>
    );
  }
}

export default App;
