import "./App.css";

// import { Container, Header } from "semantic-ui-react";
import React, { Component } from "react";
import { Route, Switch } from "react-router";

import { ConnectedRouter } from "connected-react-router";
import User from "./User";
// import UserPagination from "./UserPagination";
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
