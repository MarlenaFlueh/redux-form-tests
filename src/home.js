import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <Fragment>
    <h1>Welcome to form tests</h1>
    <div>
      <NavLink to="/short">ShortForm</NavLink>
    </div>
    <div>
      <NavLink to="/full">FullForm</NavLink>
    </div>
  </Fragment>
);

export default Nav;
