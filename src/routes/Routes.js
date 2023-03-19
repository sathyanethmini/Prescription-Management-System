import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "../middleware/RouteGuard";

//history
import { history } from "../helpers/history";

//pages

import Login from "../pages/Login";
import Patients from "../pages/Patients";
import Prescriptions from "../pages/Prescriptions";
import Stock from "../pages/Stock";
import Home from "../pages/Home";
import Register from "../pages/Register";

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <RouteGuard exact path="/" component={Home} />
        {/* Authentication Routes */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Main routes */}
        <RouteGuard path="/patients" component={Patients} />
        <RouteGuard path="/prescriptions" component={Prescriptions} />
        <RouteGuard path="/stock" component={Stock} />
        {/* Stock Routes */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
