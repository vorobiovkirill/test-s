import { applyMiddleware, compose, createStore } from "redux";

import rootReducer from "./reducers";
import thunk from "redux-thunk";

// let composeEnhancers = compose;

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
