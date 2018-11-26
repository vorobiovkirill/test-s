// import { applyMiddleware, createStore } from "redux";

// import rootReducer from "./reducers";
// import thunk from "redux-thunk";

// const configureStore = () => {
//   return createStore(
//     rootReducer,
//     applyMiddleware(thunk)
//   );
// };

// export default configureStore;

import { applyMiddleware, compose, createStore } from "redux";

import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

const history = createBrowserHistory();

const configureStore = () => {
  return createStore(
    createRootReducer(history), // root reducer with router state
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );
};

export default configureStore;
