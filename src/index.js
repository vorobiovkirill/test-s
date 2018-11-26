// import "./index.css";

import "semantic-ui-css/semantic.min.css";

import * as serviceWorker from "./serviceWorker";

import React, { Fragment } from "react";
import { Route, Router } from "react-router-dom";

import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import User from "./User";
import configureStore from "./store";
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Fragment>
        <Route
          exact
          path="/"
          component={App}
        />
        <Route
          exact
          path="/users/:userLogin"
          component={User}
        />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
