import "./App.css";

import { Route, Switch } from "react-router";

import { ConnectedRouter } from "connected-react-router";
import React from "react";
import User from "./User";
import Users from "./Users";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path={`/user/:userLogin`} component={User} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
