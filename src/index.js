import "semantic-ui-css/semantic.min.css";

import * as serviceWorker from "./serviceWorker";

import { applyMiddleware, compose, createStore } from "redux";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById("root")
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
