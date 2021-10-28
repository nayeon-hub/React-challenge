import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Prices} />
      <Route path="/coins" component={Coins} />
      <Route path="/exchanges" component={Exchanges} />
    </Router>
  );
};
