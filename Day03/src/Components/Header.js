import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <ul>
      <li>
        <Link to="/">Prices</Link>
      </li>
      <li>
        <Link to="/exchanges">Exchanges</Link>
      </li>
      <li>
        <Link to="/coins">Coins</Link>
      </li>
    </ul>
  );
};
