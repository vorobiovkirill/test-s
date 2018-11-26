// import "./index.css";
import "semantic-ui-css/semantic.min.css";

import * as serviceWorker from "./serviceWorker";

import React, { Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import User from "./User";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route
          path="/:number"
          render={({ history, match }) => (
            <App
              currentPage={match.params.number}
              updateRoute={number =>
                history.push(match.path.replace(":number", number))
              }
            />
          )}
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
