import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Router;
