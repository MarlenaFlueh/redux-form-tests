import React, { Fragment } from "react";
import { Route } from "react-router";

import Nav from "./home";
import FullForm from "./FullForm";
import ShortForm from "./ShortForm";

const App = () => (
  <Fragment>
    <Route path="/" component={Nav} />
    <Route path="/full" component={FullForm} />
    <Route path="/short" component={ShortForm} />
  </Fragment>
);

export default App;
