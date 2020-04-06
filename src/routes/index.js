import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Wizard from "./wizard";

export default function NbRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Wizard} />
      </Switch>
    </Router>
  );
}
