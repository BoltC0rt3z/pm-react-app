import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import RouterComponent from "./Router";
import Header from "./components/layout/Header";


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
